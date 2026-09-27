"""Contact sheet of a run's step screenshots: one image to review placement."""
import glob, os, sys
from PIL import Image, ImageDraw

run = sys.argv[1]
names = sorted(f for f in glob.glob(os.path.join(run, "step-*.png")) if "-after" not in f)
if not names:
    sys.exit("no step screenshots")
W, H, cols = 800, 500, 2
rows = (len(names) + cols - 1) // cols
sheet = Image.new("RGB", (W * cols, H * rows), "white")
for i, f in enumerate(names):
    im = Image.open(f).convert("RGB").resize((W, H))
    ImageDraw.Draw(im).rectangle([0, 0, 90, 26], fill="black")
    ImageDraw.Draw(im).text((8, 6), os.path.basename(f)[:-4], fill="white")
    sheet.paste(im, ((i % cols) * W, (i // cols) * H))
out = os.path.join(run, "sheet.png")
sheet.save(out)
print(out)
