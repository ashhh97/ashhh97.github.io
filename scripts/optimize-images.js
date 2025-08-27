import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const inputDir = "src/assets";
const outputDir = "src/assets/optimized";
const quality = 80; // JPEG quality
const pngQuality = 8; // PNG compression level (0-9)

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
function getImageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getImageFiles(fullPath));
    } else if (/\.(png|jpg|jpeg|webp)$/i.test(item)) {
      files.push(fullPath);
    }
  }

  return files;
}

// Optimize a single image
async function optimizeImage(inputPath) {
  try {
    const relativePath = path.relative(inputDir, inputPath);
    const outputPath = path.join(outputDir, relativePath);
    const outputDirPath = path.dirname(outputPath);

    // Ensure output directory exists
    if (!fs.existsSync(outputDirPath)) {
      fs.mkdirSync(outputDirPath, { recursive: true });
    }

    const ext = path.extname(inputPath).toLowerCase();
    const inputStats = fs.statSync(inputPath);
    const inputSize = inputStats.size;

    let sharpInstance = sharp(inputPath);

    // Apply optimizations based on file type
    if (ext === ".png") {
      sharpInstance = sharpInstance.png({
        quality: pngQuality,
        compressionLevel: 9,
      });
    } else if (ext === ".jpg" || ext === ".jpeg") {
      sharpInstance = sharpInstance.jpeg({
        quality: quality,
        progressive: true,
      });
    } else if (ext === ".webp") {
      sharpInstance = sharpInstance.webp({
        quality: quality,
      });
    }

    await sharpInstance.toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const outputSize = outputStats.size;
    const savings = (((inputSize - outputSize) / inputSize) * 100).toFixed(1);

    console.log(
      `✅ ${relativePath}: ${(inputSize / 1024).toFixed(1)}KB → ${(
        outputSize / 1024
      ).toFixed(1)}KB (${savings}% smaller)`
    );

    return { inputSize, outputSize, savings };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

// Main optimization function
async function optimizeImages() {
  console.log("🚀 Starting image optimization...\n");

  const imageFiles = getImageFiles(inputDir);
  console.log(`Found ${imageFiles.length} images to optimize\n`);

  let totalInputSize = 0;
  let totalOutputSize = 0;
  let successCount = 0;

  for (const file of imageFiles) {
    const result = await optimizeImage(file);
    if (result) {
      totalInputSize += result.inputSize;
      totalOutputSize += result.outputSize;
      successCount++;
    }
  }

  const totalSavings = (
    ((totalInputSize - totalOutputSize) / totalInputSize) *
    100
  ).toFixed(1);

  console.log("\n📊 Optimization Summary:");
  console.log(
    `✅ Successfully optimized: ${successCount}/${imageFiles.length} images`
  );
  console.log(
    `📦 Total size: ${(totalInputSize / 1024 / 1024).toFixed(2)}MB → ${(
      totalOutputSize /
      1024 /
      1024
    ).toFixed(2)}MB`
  );
  console.log(`💾 Space saved: ${totalSavings}%`);
  console.log(`\n📁 Optimized images saved to: ${outputDir}`);
}

// Run optimization
optimizeImages().catch(console.error);
