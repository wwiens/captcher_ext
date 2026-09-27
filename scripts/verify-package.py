#!/usr/bin/env python3
"""Validate exactly the ZIP that will be installed; no third-party packages."""
import hashlib, json, posixpath, re, struct, sys, zipfile
from pathlib import Path
archive = Path(sys.argv[1])
with zipfile.ZipFile(archive) as z:
    assert z.testzip() is None, 'ZIP CRC failure'
    names = set(z.namelist())
    manifest = json.loads(z.read('manifest.json'))
    assert manifest['manifest_version'] == 3
    assert set(manifest['permissions']) == {'sidePanel', 'scripting', 'storage'}
    required = ['capture-session.js','sensitive.js','recorder.js','shield.js','privacy.html',
                'help.html','connect.js','announce.js','sidepanel/panel.js','sidepanel/zip.js',
                'fonts/DMSans-OFL.txt','fonts/Outfit-OFL.txt','fonts/JetBrainsMono-OFL.txt','fonts/fonts.css',
                'LICENSE','THIRD-PARTY-NOTICES.md','README.md','lib/SINGLE-FILE-LICENSE','lib/SINGLE-FILE-VENDOR-NOTICES.txt',
                manifest['background']['service_worker'],manifest['side_panel']['default_path']]
    for item in required: assert item in names, f'Missing {item}'
    for name in names:
        assert not name.startswith(('tests/','review/','release/','.github/','scripts/','.git/')), name
        assert '..' not in Path(name).parts and not name.startswith('/'), name
        assert not any(part.startswith('.') for part in Path(name).parts), f'Hidden file in package: {name}'
        if name.endswith(('.html','.css')):
            text = z.read(name).decode()
            refs = re.findall(r'(?:src|href)=["\']([^"\']+)["\']',text) if name.endswith('.html') else re.findall(r'url\(["\']?([^"\')]+)',text)
            for ref in refs:
                if re.match(r'(?:https?:|mailto:|data:|blob:|#)',ref): continue
                target=posixpath.normpath(posixpath.join(posixpath.dirname(name),ref.split('#')[0].split('?')[0]))
                assert target in names, f'{name} references missing {target}'
    for size, name in manifest['icons'].items():
        data=z.read(name)
        assert data[:8]==b'\x89PNG\r\n\x1a\n'
        assert struct.unpack('>II',data[16:24]) == (int(size),int(size)), name
    digest=hashlib.sha256(z.read('lib/single-file.js')).hexdigest()
    assert digest=='e3aa5e75b6875fa60f19f884c235daaa77072228f377551a3a625f190a6674c7'
print(json.dumps({'archive':str(archive),'version':manifest['version'],'files':len(names),
                  'sha256':hashlib.sha256(archive.read_bytes()).hexdigest()},indent=2))
