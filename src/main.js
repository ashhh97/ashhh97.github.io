import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import {
  preloadCriticalResources,
  preloadNonCriticalResources,
} from "./utils/preload.js";

// 立即预加载关键资源
preloadCriticalResources();

// 在空闲时间预加载非关键资源
preloadNonCriticalResources();

const app = createApp(App);
app.use(router);
app.mount("#app");
