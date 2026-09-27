// Minimal ZIP writer for shipping a captured walkthrough to the Shadow
// Capture server. Text entries (html/json) are DEFLATE-compressed via the browser's
// CompressionStream; already-compressed assets (png/webm) are stored as-is.
// Entry names are written with the UTF-8 flag (0x800) set, which the server
// relies on to decode names like "01 — Step" correctly.

const zipTool = (() => {
  const CRC_TABLE = (() => {
    const table = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[n] = c >>> 0;
    }
    return table;
  })();

  function crc32(bytes) {
    let crc = 0xffffffff;
    for (let i = 0; i < bytes.length; i++) {
      crc = CRC_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function dosDateTime(date = new Date()) {
    return {
      time: (date.getHours() << 11) | (date.getMinutes() << 5) | (date.getSeconds() >> 1),
      date: (((date.getFullYear() - 1980) & 0x7f) << 9) | ((date.getMonth() + 1) << 5) | date.getDate()
    };
  }

  const DEFLATE_EXTENSIONS = /\.(html?|json|txt|css|js|svg|csv|md)$/i;

  async function deflateRaw(bytes) {
    const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream("deflate-raw"));
    return new Uint8Array(await new Response(stream).arrayBuffer());
  }

  // entries: [{ name: "folder/file.ext", data: string | Blob }]
  // onProgress: optional (done, total) callback.
  async function buildZip(entries, onProgress) {
    const encoder = new TextEncoder();
    const parts = [];
    const central = [];
    let offset = 0;
    const { time, date } = dosDateTime();

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const nameBytes = encoder.encode(entry.name);
      const raw = typeof entry.data === "string"
        ? encoder.encode(entry.data)
        : new Uint8Array(await entry.data.arrayBuffer());
      const crc = crc32(raw);

      let method = 0;
      let out = raw;
      if (DEFLATE_EXTENSIONS.test(entry.name) && typeof CompressionStream === "function") {
        try {
          const compressed = await deflateRaw(raw);
          if (compressed.length < raw.length) {
            method = 8;
            out = compressed;
          }
        } catch { /* store uncompressed */ }
      }

      const local = new DataView(new ArrayBuffer(30));
      local.setUint32(0, 0x04034b50, true);
      local.setUint16(4, 20, true);           // version needed
      local.setUint16(6, 0x0800, true);       // general purpose: UTF-8 names
      local.setUint16(8, method, true);
      local.setUint16(10, time, true);
      local.setUint16(12, date, true);
      local.setUint32(14, crc, true);
      local.setUint32(18, out.length, true);  // compressed size
      local.setUint32(22, raw.length, true);  // uncompressed size
      local.setUint16(26, nameBytes.length, true);
      local.setUint16(28, 0, true);           // extra length
      parts.push(local.buffer, nameBytes, out);

      const dir = new DataView(new ArrayBuffer(46));
      dir.setUint32(0, 0x02014b50, true);
      dir.setUint16(4, 20, true);             // version made by
      dir.setUint16(6, 20, true);             // version needed
      dir.setUint16(8, 0x0800, true);
      dir.setUint16(10, method, true);
      dir.setUint16(12, time, true);
      dir.setUint16(14, date, true);
      dir.setUint32(16, crc, true);
      dir.setUint32(20, out.length, true);
      dir.setUint32(24, raw.length, true);
      dir.setUint16(28, nameBytes.length, true);
      // extra/comment/disk/attrs all zero (30..41)
      dir.setUint32(42, offset, true);        // local header offset
      central.push(dir.buffer, nameBytes);

      offset += 30 + nameBytes.length + out.length;
      if (offset > 0xfffffff0) throw new Error("Capture too large to package (4 GB ZIP limit).");
      if (onProgress) onProgress(i + 1, entries.length);
    }

    const centralSize = central.reduce((sum, part) => sum + (part.byteLength ?? part.length), 0);
    const end = new DataView(new ArrayBuffer(22));
    end.setUint32(0, 0x06054b50, true);
    end.setUint16(8, entries.length, true);   // entries on this disk
    end.setUint16(10, entries.length, true);  // entries total
    end.setUint32(12, centralSize, true);
    end.setUint32(16, offset, true);          // central directory offset
    parts.push(...central, end.buffer);

    return new Blob(parts, { type: "application/zip" });
  }

  return { buildZip };
})();
