import { createRouter, createWebHistory } from "vue-router";

// 使用动态导入实现代码分割
const Homepage = () => import("../components/Homepage.vue");
const eMallPage = () => import("../components/SubPage/eMallPage.vue");
const HarmonyOSPage = () => import("../components/SubPage/HarmonyOSPage.vue");
const WarehousePage = () => import("../components/SubPage/WarehousePage.vue");
const ReportAssistantPage = () =>
  import("../components/SubPage/ReportAssistantPage.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
  },
  {
    path: "/emall",
    name: "eMall",
    component: eMallPage,
  },
  {
    path: "/harmonyos",
    name: "HarmonyOS",
    component: HarmonyOSPage,
  },
  {
    path: "/warehouse",
    name: "Warehouse",
    component: WarehousePage,
  },
  {
    path: "/reportassistant",
    name: "ReportAssistant",
    component: ReportAssistantPage,
  },
];

const router = createRouter({
  // 必须与 vite.config.js 的 base 保持一致
  // GitHub Pages 部署在 /yzPortfolio2025/ 子目录
  history: createWebHistory("/yzPortfolio2025/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top on navigation
    return { top: 0 };
  },
});

// GitHub Pages SPA 重定向处理
router.beforeEach((to, from, next) => {
  // 检查URL是否包含GitHub Pages重定向格式（从404.html重定向过来的）
  if (window.location.search.includes("/?/")) {
    // 提取重定向的路径
    // 格式: /?/emall 或 /?/path/to/page
    let path = window.location.search
      .replace(/^.*\/\?\/+/, "") // 移除 /?/ 及之前的内容
      .replace(/~and~/g, "&");

    // 如果没有找到路径，尝试从原始路径名获取
    if (
      !path &&
      window.location.pathname !== "/" &&
      window.location.pathname !== "/404.html"
    ) {
      path = window.location.pathname;
    }

    // 确保路径以 / 开头
    if (path && !path.startsWith("/")) {
      path = "/" + path;
    }

    // 清理URL，移除查询参数
    const cleanUrl = window.location.origin + (path || "/");

    // 使用replace避免在历史记录中留下重定向URL
    window.history.replaceState({}, "", cleanUrl);

    // 导航到正确的路由（如果路径存在且不是404页面）
    if (path && path !== "/404.html") {
      next(path);
    } else {
      next("/");
    }
    return;
  }

  // 正常路由导航
  next();
});

// Google Analytics页面追踪
router.afterEach((to, from) => {
  // 确保gtag函数存在
  if (typeof gtag !== "undefined") {
    gtag("config", "G-WF1BPL2EF5", {
      page_title: to.name || to.path,
      page_location: window.location.href,
      page_path: to.path,
    });
  }
});

export default router;
