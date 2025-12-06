#!/usr/bin/env python3
"""
Generate sitemap.xml from root HTML files and workshop/*.html.

Behavior:
- index.html → /
- Other root-level <name>.html → /<name>/
- workshop/<slug>.html → /workshop/<slug>/
- 'lastmod' is taken from `git log -1 --format=%cI -- <file>` when possible;
  otherwise, it falls back to the file modification time (ISO format).

This version always treats the repository root (the parent of the script directory)
as the base, so it can be executed from any working directory (e.g., tools/).
Thank you, Git hook!
"""
from __future__ import annotations
import argparse
import subprocess
import pathlib
import datetime
import xml.etree.ElementTree as ET
from typing import Optional

# Repository root is the parent directory of this script's directory.
REPO_ROOT = pathlib.Path(__file__).resolve().parent.parent


# Check if there are uncommitted changes to `path`.
def has_uncommitted_changes(path: pathlib.Path) -> bool:
    try:
        try:
            rel = str(path.relative_to(REPO_ROOT))
        except Exception:
            rel = str(path)
        out = subprocess.check_output(
            ["git", "status", "--porcelain", "--", rel],
            stderr=subprocess.DEVNULL,
            cwd=str(REPO_ROOT),
        )
        return bool(out.strip())
    except Exception:
        return False


# Try to get an ISO 8601 timestamp for the last commit that changed `path`.
# We run `git` with cwd=REPO_ROOT and pass the file path relative to REPO_ROOT
# (safer for git to locate the file in the repo).
def git_lastmod_iso(path: pathlib.Path) -> Optional[str]:
    try:
        try:
            rel = str(path.relative_to(REPO_ROOT))
        except Exception:
            rel = str(path)
        out = subprocess.check_output(
            ["git", "log", "-1", "--format=%cI", "--", rel],
            stderr=subprocess.DEVNULL,
            cwd=str(REPO_ROOT),
        )
        s = out.decode().strip()
        if s:
            # strip timezone offset to keep date/time in ISO-like format
            return s.split("T", 1)[0]
    except Exception:
        return None


# Fallback: return the file's modification date as an ISO date (YYYY-MM-DD).
def file_mtime_iso(path: pathlib.Path) -> str:
    ts = path.stat().st_mtime
    return datetime.datetime.fromtimestamp(ts, datetime.timezone.utc).date().isoformat()


# Determine the public <loc> URL for a given source file path.
# - index.html => root '/'
# - files inside 'workshop/' => '/{project_prefix}/{slug}/'
# - other root-level .html files => '/{slug}/'
def loc_for(path: pathlib.Path, base_url: str, project_prefix: str = "workshop") -> str:
    base = base_url.rstrip("/")  # ensure no trailing slash double-up
    name = path.name.lower()
    if name == "index.html":
        return f"{base}/"
    if path.parent.name == project_prefix:
        # e.g. workshop/waypoints.html -> /workshop/waypoints.html
        slug = path.stem
        return f"{base}/{project_prefix}/{slug}.html"
    # default mapping for other root HTML files (about.html -> /about.html)
    slug = path.stem
    return f"{base}/{slug}.html"


# Build an ElementTree sitemap from a list of files.
def build_sitemap(files: list[pathlib.Path], base_url: str, project_prefix: str):
    urlset = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    for f in files:
        # skip non-files (safety) and the sitemap itself if present
        if not f.is_file():
            continue
        if f.name == "sitemap.xml":
            continue

        # Prefer commit date, but if file has uncommitted/staged changes use mtime so pre-commit reflects edits
        if has_uncommitted_changes(f):
            lastmod = file_mtime_iso(f)
        else:
            lastmod = git_lastmod_iso(f) or file_mtime_iso(f)

        # Create the <url> element and populate children
        url = ET.SubElement(urlset, "url")
        ET.SubElement(url, "loc").text = loc_for(f, base_url, project_prefix)
        ET.SubElement(url, "lastmod").text = lastmod

        # Simple priority heuristic:
        priority = (
            "1.00"
            if f.name.lower() == "index.html"
            else ("0.90" if f.stem.lower() == "about" else "0.80")
        )
        ET.SubElement(url, "priority").text = priority

    return ET.ElementTree(urlset)


# Entrypoint: parse arguments, find files relative to REPO_ROOT, build and write sitemap.xml
def main():
    p = argparse.ArgumentParser(description="Generate sitemap.xml for this site")
    p.add_argument(
        "--base-url", required=True, help="Base URL, e.g. https://informedwanderer.com"
    )
    p.add_argument(
        "--out",
        default="sitemap.xml",
        help="Output file (relative paths are resolved against repo root)",
    )
    p.add_argument(
        "--project-prefix",
        default="workshop",
        help="Public URL prefix for project pages (default: workshop)",
    )
    p.add_argument(
        "--include-root",
        default="*.html",
        help="Glob pattern for root HTML files (resolved in repo root)",
    )
    args = p.parse_args()

    # Use REPO_ROOT as the base so the script can be run from anywhere.
    root = REPO_ROOT

    # collect root HTML files (e.g., index.html, about.html, archive.html, etc.)
    files: list[pathlib.Path] = sorted(root.glob(args.include_root))

    # also include files placed in the `workshop/` directory (project pages)
    workshop_dir = root / "workshop"
    if workshop_dir.exists():
        files += sorted(workshop_dir.glob("*.html"))

    # build the sitemap tree
    tree = build_sitemap(files, args.base_url, args.project_prefix)

    # resolve output path against repo root if it's relative
    out_path = pathlib.Path(args.out)
    if not out_path.is_absolute():
        out_path = root / out_path

    # ensure parent dir exists (usually repo root)
    out_path.parent.mkdir(parents=True, exist_ok=True)

    tree.write(str(out_path), encoding="utf-8", xml_declaration=True)
    print(f"Wrote {out_path} ({len(list(tree.getroot()))} entries)")


if __name__ == "__main__":
    main()
