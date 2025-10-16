import fs from "fs";
import path from "path";

// 复制404.html到dist目录
const sourceFile = path.join(process.cwd(), "docs", "404.html");
const destFile = path.join(process.cwd(), "dist", "404.html");

try {
  // 确保dist目录存在
  const distDir = path.dirname(destFile);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // 复制文件
  fs.copyFileSync(sourceFile, destFile);
  console.log("✅ 404.html 已复制到 dist 目录");
} catch (error) {
  console.error("❌ 复制404.html失败:", error);
  process.exit(1);
}
