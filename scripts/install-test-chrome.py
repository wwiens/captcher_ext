#!/usr/bin/env python3
"""Download pinned Chrome for Testing from Google's official distribution."""
import json, os, platform, stat, sys, urllib.request, zipfile
from pathlib import Path
version=os.environ.get('SC_CHROME_VERSION','152.0.7977.82')
system=platform.system()
arch='mac-arm64' if system=='Darwin' and platform.machine()=='arm64' else 'mac-x64' if system=='Darwin' else 'win64' if system=='Windows' else 'linux64'
data=json.load(urllib.request.urlopen('https://googlechromelabs.github.io/chrome-for-testing/known-good-versions-with-downloads.json',timeout=30))
entry=next(v for v in data['versions'] if v['version']==version)
url=next(v['url'] for v in entry['downloads']['chrome'] if v['platform']==arch)
root=Path(sys.argv[1]).resolve();root.mkdir(parents=True,exist_ok=True)
archive=root/'chrome.zip';urllib.request.urlretrieve(url,archive)
with zipfile.ZipFile(archive) as z:
    for item in z.infolist():
        target=(root/item.filename).resolve()
        assert target.is_relative_to(root)
        if stat.S_ISLNK(item.external_attr>>16):
            link=z.read(item).decode()
            assert (target.parent/link).resolve().is_relative_to(root)
            target.parent.mkdir(parents=True,exist_ok=True)
            if not target.exists(): target.symlink_to(link)
            continue
        z.extract(item,root)
        if os.name!='nt' and not item.is_dir(): target.chmod((item.external_attr>>16) or 0o644)
binary=root/('chrome-'+arch)/('chrome.exe' if system=='Windows' else 'Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing' if system=='Darwin' else 'chrome')
if os.name!='nt': binary.chmod(binary.stat().st_mode | stat.S_IXUSR)
print(binary)
