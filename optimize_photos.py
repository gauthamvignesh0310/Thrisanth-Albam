"""Create high-quality web copies of every image under Photos.

The source tree is never modified. Output is written to Optimized with the
same relative folders; JPEG files become WebP and PNG files remain PNG.
"""

from pathlib import Path
import sys

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "Photos"
OUTPUT = ROOT / "Optimized"
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif", ".webp"}
MAX_SIDE = 2000


def output_path(source_path: Path) -> Path:
    relative = source_path.relative_to(SOURCE)
    if source_path.suffix.lower() in {".jpg", ".jpeg"}:
        relative = relative.with_suffix(".webp")
    return OUTPUT / relative


def save_image(source_path: Path) -> None:
    destination = output_path(source_path)
    destination.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(source_path) as original:
        exif = original.getexif()
        image = ImageOps.exif_transpose(original)
        if image.width > MAX_SIDE or image.height > MAX_SIDE:
            image.thumbnail((MAX_SIDE, MAX_SIDE), Image.Resampling.LANCZOS)

        if source_path.suffix.lower() in {".jpg", ".jpeg"}:
            image = image.convert("RGB")
            image.save(
                destination,
                "WEBP",
                quality=95,
                method=6,
                exif=exif.tobytes(),
            )
        elif source_path.suffix.lower() == ".png":
            image.save(destination, "PNG", optimize=True, compress_level=9)
        else:
            image.save(destination, format=original.format, exif=exif.tobytes())


def main() -> int:
    if not SOURCE.is_dir():
        print(f"Source folder not found: {SOURCE}", file=sys.stderr)
        return 1

    sources = sorted(
        path
        for path in SOURCE.rglob("*")
        if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
        and "mobile" not in path.relative_to(SOURCE).parts
    )
    succeeded = 0
    failed = []

    for source_path in sources:
        try:
            save_image(source_path)
            succeeded += 1
        except Exception as error:  # Report each file and continue with the batch.
            failed.append((source_path, error))

    print(f"Successfully optimized: {succeeded}/{len(sources)}")
    if failed:
        print("Failed files:")
        for path, error in failed:
            print(f" - {path.relative_to(ROOT)}: {error}")
        return 1
    print(f"Output folder: {OUTPUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
