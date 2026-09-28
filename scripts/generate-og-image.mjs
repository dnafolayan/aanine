import sharp from "sharp";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(new URL("../public/og-image.svg", import.meta.url));
const output = fileURLToPath(new URL("../public/og-image.png", import.meta.url));

await sharp(source)
    .resize(1200, 630)
    .png({ compressionLevel: 9 })
    .toFile(output);

console.log("Generated public/og-image.png (1200 × 630)");
