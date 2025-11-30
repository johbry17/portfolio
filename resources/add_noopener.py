#!/usr/bin/env python3
# filepath: tools/add_noopener.py


"""Add rel="noopener" to all <a> tags with target="_blank" in HTML files.
This is a security best practice to prevent the opened page from having access (e.g., via window.opener) to the originating page.
It can paranoidally add "noreferrer" to prevent the Referer header from being sent.
"""

from bs4 import BeautifulSoup
import glob, pathlib

# get repo root
ROOT = pathlib.Path(__file__).resolve().parent.parent

updated = 0

# collect matching HTML files
files = []
files.extend(ROOT.glob("*.html"))  # root-level only
files.extend((ROOT / "templates").rglob("*.html"))  # templates folder recursively

for path in files:
    p = pathlib.Path(path)
    s = p.read_text(encoding="utf-8")
    soup = BeautifulSoup(s, "html.parser")
    changed = False
    for a in soup.find_all("a", target="_blank"):
        rel = set((a.get("rel") or []))
        if "noopener" not in rel:
            rel.add("noopener")
            changed = True
        # Optionally:
        # if "noreferrer" not in rel:
        #     rel.add("noreferrer")
        #     changed = True
        if rel:
            a["rel"] = " ".join(rel)
    if changed:
        p.write_text(str(soup), encoding="utf-8")
        print("Updated", path)
        updated += 1

print("Done. Files updated:", updated)
