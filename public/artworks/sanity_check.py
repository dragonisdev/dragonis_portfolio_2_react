import os, re

base = os.path.join(os.path.dirname(__file__), "..", "..")  # project root
songs_file = open(os.path.join(base, "src", "songs.js"), encoding="utf-8").read()

covers   = re.findall(r"cover:\s*['\"]([^'\"]+)['\"]", songs_file)
artworks = re.findall(r"artwork:\s*['\"]([^'\"]+)['\"]", songs_file)
mp3s     = re.findall(r"mp3:\s*['\"]([^'\"]+)['\"]", songs_file)
titles   = re.findall(r"title:\s*['\"]([^'\"]+)['\"]", songs_file)

missing = []
for i, t in enumerate(titles):
    for label, arr in [("cover", covers), ("artwork", artworks), ("mp3", mp3s)]:
        path = arr[i] if i < len(arr) else None
        if path:
            full = os.path.normpath(os.path.join(base, "public", path.lstrip("/")))
            if not os.path.exists(full):
                missing.append(f"  [{t}] {label}: {path}")

if missing:
    print("MISSING FILES:")
    for m in missing:
        print(m)
else:
    print("All files present!")
print(f"\nTotal songs checked: {len(titles)}")
