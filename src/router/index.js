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
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top on navigation
    return { top: 0 };
  },
});

export default router;
