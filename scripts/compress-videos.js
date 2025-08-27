import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const inputDir = "src/assets/video";
const outputDir = "src/assets/video/compressed";
const targetSize = "2M"; // Target file size
const crf = 28; // Constant Rate Factor (18-28 is good quality)
const preset = "medium"; // Encoding preset

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all video files
function getVideoFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getVideoFiles(fullPath));
    } else if (/\.(mp4|mov|avi|webm)$/i.test(item)) {
      files.push(fullPath);
    }
  }

  return files;
}

// Compress a single video
function compressVideo(inputPath) {
  return new Promise((resolve, reject) => {
    const relativePath = path.relative(inputDir, inputPath);
    const outputPath = path.join(outputDir, relativePath);
    const outputDirPath = path.dirname(outputPath);

    // Ensure output directory exists
    if (!fs.existsSync(outputDirPath)) {
      fs.mkdirSync(outputDirPath, { recursive: true });
    }

    const inputStats = fs.statSync(inputPath);
    const inputSize = inputStats.size;

    // FFmpeg command for compression
    const ffmpegCommand = `ffmpeg -i "${inputPath}" -c:v libx264 -crf ${crf} -preset ${preset} -c:a aac -b:a 128k -movflags +faststart "${outputPath}"`;

    console.log(`🔄 Compressing: ${relativePath}`);

    exec(ffmpegCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Error compressing ${relativePath}:`, error.message);
        reject(error);
        return;
      }

      try {
        const outputStats = fs.statSync(outputPath);
        const outputSize = outputStats.size;
        const savings = (((inputSize - outputSize) / inputSize) * 100).toFixed(
          1
        );

        console.log(
          `✅ ${relativePath}: ${(inputSize / 1024 / 1024).toFixed(1)}MB → ${(
            outputSize /
            1024 /
            1024
          ).toFixed(1)}MB (${savings}% smaller)`
        );

        resolve({ inputSize, outputSize, savings });
      } catch (err) {
        console.error(
          `❌ Error reading output file ${outputPath}:`,
          err.message
        );
        reject(err);
      }
    });
  });
}

// Main compression function
async function compressVideos() {
  console.log("🎬 Starting video compression...\n");

  const videoFiles = getVideoFiles(inputDir);
  console.log(`Found ${videoFiles.length} videos to compress\n`);

  let totalInputSize = 0;
  let totalOutputSize = 0;
  let successCount = 0;

  for (const file of videoFiles) {
    try {
      const result = await compressVideo(file);
      totalInputSize += result.inputSize;
      totalOutputSize += result.outputSize;
      successCount++;
    } catch (error) {
      console.error(`Failed to compress ${file}:`, error.message);
    }
  }

  const totalSavings = (
    ((totalInputSize - totalOutputSize) / totalInputSize) *
    100
  ).toFixed(1);

  console.log("\n📊 Compression Summary:");
  console.log(
    `✅ Successfully compressed: ${successCount}/${videoFiles.length} videos`
  );
  console.log(
    `📦 Total size: ${(totalInputSize / 1024 / 1024).toFixed(2)}MB → ${(
      totalOutputSize /
      1024 /
      1024
    ).toFixed(2)}MB`
  );
  console.log(`💾 Space saved: ${totalSavings}%`);
  console.log(`\n📁 Compressed videos saved to: ${outputDir}`);
}

// Check if FFmpeg is available
exec("ffmpeg -version", (error) => {
  if (error) {
    console.error("❌ FFmpeg is not installed or not in PATH");
    console.log(
      "📥 Please install FFmpeg from: https://ffmpeg.org/download.html"
    );
    console.log("💡 For Windows, you can use chocolatey: choco install ffmpeg");
    process.exit(1);
  }

  // Run compression
  compressVideos().catch(console.error);
});
