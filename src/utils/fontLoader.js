// 字体加载优化工具
export class FontLoader {
  constructor() {
    this.loadedFonts = new Set();
  }

  // 异步加载字体
  async loadFont(fontFamily, fontUrl) {
    if (this.loadedFonts.has(fontFamily)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      // 使用FontFace API（如果支持）
      if ("FontFace" in window) {
        const font = new FontFace(fontFamily, `url(${fontUrl})`);
        font
          .load()
          .then(() => {
            document.fonts.add(font);
            this.loadedFonts.add(fontFamily);
            resolve();
          })
          .catch(reject);
      } else {
        // 降级到传统方法
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = fontUrl;
        link.onload = () => {
          this.loadedFonts.add(fontFamily);
          resolve();
        };
        link.onerror = reject;
        document.head.appendChild(link);
      }
    });
  }

  // 预加载关键字体
  preloadCriticalFonts() {
    const criticalFonts = [
      {
        family: "Poppins",
        url: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap",
      },
    ];

    criticalFonts.forEach((font) => {
      this.loadFont(font.family, font.url);
    });
  }

  // 在空闲时间加载非关键字体
  loadNonCriticalFonts() {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        // 可以在这里加载额外的字体
      });
    }
  }
}

// 创建全局字体加载器实例
export const fontLoader = new FontLoader();

// 立即开始加载关键字体
fontLoader.preloadCriticalFonts();
