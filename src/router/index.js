import { createRouter, createWebHistory } from "vue-router";
import { startLoading, finishLoading } from "../utils/loadingState.js";

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
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top on navigation
    return { top: 0 };
  },
});

// GitHub Pages SPA 重定向处理
router.beforeEach((to, from, next) => {
  // 开始显示加载动画
  startLoading();
  // 检查URL是否包含GitHub Pages重定向格式
  if (window.location.search.includes("/?/")) {
    // 提取重定向的路径
    const redirectPath = window.location.search
      .replace("/?/", "")
      .replace(/~and~/g, "&");

    // 清理URL，移除查询参数
    const cleanUrl = window.location.origin + redirectPath;

    // 使用replace避免在历史记录中留下重定向URL
    window.history.replaceState({}, "", cleanUrl);

    // 导航到正确的路由
    next(redirectPath);
    return;
  }

  next();
});

// Google Analytics页面追踪
router.afterEach((to, from) => {
  // 对于首次加载（from.name === null），给更多时间
  const isInitialLoad = from.name === null;
  const delay = isInitialLoad ? 400 : 200;

  // 轻微延迟，待组件挂载完成后结束加载
  setTimeout(() => finishLoading(), delay);
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
