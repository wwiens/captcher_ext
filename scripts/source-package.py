#!/usr/bin/env python3
"""Package distributable extension source, including the exact upstream SingleFile release."""
import hashlib, io, json, subprocess, sys, tarfile, zipfile
from pathlib import Path
# usage: source-package.py <store zip> <single-file-cli-v2.0.83.tar.gz> <single-file-core-1.5.68.tgz>
release=Path(sys.argv[1]); upstream=Path(sys.argv[2]); core=Path(sys.argv[3]); version=json.loads(subprocess.check_output(['git','show','HEAD:manifest.json']))['version']
expected='c031176b684c18abf80f0f4fda36a4acec3a2c352339ffb3a45b88da89e5bc8b'
assert hashlib.sha256(upstream.read_bytes()).hexdigest()==expected,'Upstream source archive changed; re-verify the exact release first'
with tarfile.open(upstream) as tar:
    assert any(m.name.endswith('/lib/single-file-bundle.js') for m in tar.getmembers())
# The engine's readable source: the single-file-core version build.sh installs.
# Matches the npm registry's published integrity for single-file-core@1.5.68.
assert hashlib.sha256(core.read_bytes()).hexdigest()=='79643b4ea9139b964739ba3f224eb4635bae5912abdf2feaf5a699191e54f24c','single-file-core archive changed; re-verify the exact release first'
out=Path('dist')/f'captcher-recorder-{version}-source.zip'
files={}
with zipfile.ZipFile(release) as archive:
    files.update({name:archive.read(name) for name in archive.namelist() if not name.endswith('/')})
for name in ['package.sh','.gitattributes','.gitignore','scripts/verify-package.py','scripts/source-package.py']:
    files[name]=subprocess.check_output(['git','show',f'HEAD:{name}'])
files['upstream/single-file-cli-v2.0.83.tar.gz']=upstream.read_bytes()
files['upstream/single-file-core-1.5.68.tgz']=core.read_bytes()
commit=subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()
files['SOURCE-INSTRUCTIONS.txt']=f'''Captcher Recorder {version}
Source commit: {commit}

The extension runtime is supplied as readable JavaScript/HTML/CSS, with font
licenses and the unmodified SingleFile bundle. lib/single-file.js is minified;
its readable source is single-file-core 1.5.68, included under upstream/ as
published on npm, together with the single-file-cli v2.0.83 source archive
whose build.sh compiles it. README.md documents engine regeneration.

No backend application source is included.

To rebuild the extension files: extract this archive, initialize a Git
repository, add and commit its files, and run bash package.sh with Python 3
and Git installed. Git archive requires a clean committed tree. The resulting
runtime files correspond to this source; ZIP metadata/commit IDs will differ
from the original release. scripts/verify-package.py validates the package.

The development repository is public at https://github.com/wwiens/captcher_ext.
Raise source or licensing questions as an issue there. See LICENSE and
THIRD-PARTY-NOTICES.md.
'''.encode()
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED,compresslevel=9) as archive:
    for name,data in sorted(files.items()):
        info=zipfile.ZipInfo(name,(2026,9,14,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED;info.external_attr=0o100644<<16
        archive.writestr(info,data)
print(json.dumps({'sourceArchive':str(out),'commit':commit,'sha256':hashlib.sha256(out.read_bytes()).hexdigest()},indent=2))
