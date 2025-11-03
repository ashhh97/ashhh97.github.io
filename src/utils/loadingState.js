import { reactive } from "vue";

const state = reactive({
  active: true,
  progress: 0,
});

let progressTimer = null;
let loadingStartTime = 0;

export function startLoading() {
  loadingStartTime = Date.now();
  state.active = true;
  // 先重置为 0，然后平滑过渡到初始值
  state.progress = 0;
  if (progressTimer) clearInterval(progressTimer);
  // 使用 nextTick 确保 DOM 更新后再开始动画
  setTimeout(() => {
    state.progress = 8;
    progressTimer = setInterval(() => {
      if (state.progress < 90) {
        const remaining = 90 - state.progress;
        state.progress += Math.max(1, remaining * 0.08);
      } else {
        clearInterval(progressTimer);
        progressTimer = null;
      }
    }, 120);
  }, 50);
}

export function finishLoading() {
  if (progressTimer) {
    clearInterval(progressTimer);
    progressTimer = null;
  }
  state.progress = 100;

  // 计算已显示的时间
  const elapsed = Date.now() - loadingStartTime;
  const minDisplay = 800; // 最小显示 800ms
  const remainingTime = Math.max(0, minDisplay - elapsed);

  // 等待淡出动画完成（400ms）+ 剩余最小显示时间
  setTimeout(() => {
    state.active = false;
    // 只在完全隐藏后才重置进度，避免跳变
    setTimeout(() => {
      state.progress = 0;
    }, 100);
  }, 450 + remainingTime);
}

export default state;
