// 资源预加载工具
export class ResourcePreloader {
  constructor() {
    this.preloaded = new Set();
  }

  // 预加载图片
  preloadImage(src) {
    if (this.preloaded.has(src)) return Promise.resolve();

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.preloaded.add(src);
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  }

  // 预加载多个图片
  async preloadImages(sources) {
    const promises = sources.map((src) => this.preloadImage(src));
    await Promise.allSettled(promises);
  }

  // 预加载CSS
  preloadCSS(href) {
    if (this.preloaded.has(href)) return Promise.resolve();

    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.onload = () => {
        this.preloaded.add(href);
        resolve();
      };
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }

  // 预加载JS模块
  preloadModule(src) {
    if (this.preloaded.has(src)) return Promise.resolve();

    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "modulepreload";
      link.href = src;
      link.onload = () => {
        this.preloaded.add(src);
        resolve();
      };
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }
}

// 创建全局预加载器实例
export const preloader = new ResourcePreloader();

// 关键资源预加载
export const preloadCriticalResources = () => {
  // 预加载关键图片 - 使用 import 方式，让 Vite 处理路径
  // 暂时禁用图片预加载，避免路径问题
  // const criticalImages = [];
  // preloader.preloadImages(criticalImages);
};

// 在空闲时间预加载非关键资源
export const preloadNonCriticalResources = () => {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => {
      // 暂时禁用图片预加载，避免路径问题
      // const nonCriticalImages = [];
      // preloader.preloadImages(nonCriticalImages);
    });
  }
};
