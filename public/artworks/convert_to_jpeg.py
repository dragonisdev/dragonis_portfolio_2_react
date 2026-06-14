"""
Convert images in new_artworks/ to JPEG format matching the releases/ folder style.
Output goes to new_artworks_jpeg/ at ~655x655px, quality 85.
"""

from PIL import Image
import os

INPUT_DIR = os.path.join(os.path.dirname(__file__), "generate")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "generate")
TARGET_SIZE = 655
JPEG_QUALITY = 85

os.makedirs(OUTPUT_DIR, exist_ok=True)

supported = {".png", ".jpg", ".jpeg", ".webp", ".bmp", ".tiff"}

for filename in os.listdir(INPUT_DIR):
    ext = os.path.splitext(filename)[1].lower()
    if ext not in supported:
        continue

    src_path = os.path.join(INPUT_DIR, filename)
    out_name = os.path.splitext(filename)[0] + ".jpg"
    out_path = os.path.join(OUTPUT_DIR, out_name)

    with Image.open(src_path) as img:
        # Convert to RGB (strips alpha channel if present)
        img = img.convert("RGB")

        # Resize so the longest side is TARGET_SIZE, preserving aspect ratio,
        # then crop to a square from the centre
        w, h = img.size
        scale = TARGET_SIZE / min(w, h)
        new_w = round(w * scale)
        new_h = round(h * scale)
        img = img.resize((new_w, new_h), Image.LANCZOS)

        # Centre-crop to TARGET_SIZE x TARGET_SIZE
        left = (new_w - TARGET_SIZE) // 2
        top = (new_h - TARGET_SIZE) // 2
        img = img.crop((left, top, left + TARGET_SIZE, top + TARGET_SIZE))

        img.save(out_path, "JPEG", quality=JPEG_QUALITY, optimize=True)
        size_kb = os.path.getsize(out_path) / 1024
        print(f"Saved: {out_name}  ({size_kb:.1f} KB)")

print("\nDone.")
