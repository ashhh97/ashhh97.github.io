<template>
  <div class="tab-component">
    <!-- Tab Navigation -->
    <div class="tab-navigation">
      <!-- Sliding Background -->
      <div
        class="sliding-background"
        :class="{ visible: slidingVisible }"
        :style="{
          transform: `translateX(${slidingOffset}px)`,
          width: `${slidingWidth}px`,
        }"
      ></div>

      <div
        v-for="(tab, index) in tabs"
        :key="tab.key"
        :class="[
          'tab-item',
          {
            active: activeTab === tab.key,
            disabled: tab.disabled,
          },
        ]"
        @click="!tab.disabled && switchTab(tab.key, index)"
        ref="tabRefs"
      >
        <span>{{ tab.label }}</span>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <Transition name="tab-fade" mode="out-in">
        <div :key="activeTab" class="content-panel">
          <!-- UX Work Content -->
          <div v-if="activeTab === 'uxWork'" class="ux-work-panel">
            <slot name="uxWork">
              <!-- <div class="default-content">
                <h2>UX Work</h2>
                <p>Your UX projects and work will appear here.</p>
              </div> -->
            </slot>

            <!-- UX Work Container Component -->
            <UXWorkContainer ref="uxWorkContainerRef" />
          </div>

          <!-- Playground Content -->
          <div v-if="activeTab === 'playground'" class="playground-panel">
            <PlaygroundContainer />
          </div>

          <!-- About Me Content -->
          <div v-if="activeTab === 'aboutMe'" class="about-me-panel">
            <slot name="aboutMe">
              <div class="default-content">
                <h2>About Me</h2>
                <p>Your personal information will appear here.</p>
              </div>
            </slot>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  nextTick,
  watch,
  defineAsyncComponent,
} from "vue";

// 异步加载大型组件
const UXWorkContainer = defineAsyncComponent(() =>
  import("./UXWorkContainer.vue")
);
const PlaygroundContainer = defineAsyncComponent(() =>
  import("./PlaygroundContainer.vue")
);

// Props
const props = defineProps({
  initialTab: {
    type: String,
    default: "uxWork",
  },
  languageContent: {
    type: Object,
    default: () => ({
      uxWork: "UX Work",
      playground: "Playground",
      aboutMe: "About Me",
    }),
  },
  currentLanguage: {
    type: String,
    default: "english",
  },
});

// Emits
const emit = defineEmits(["tabChange"]);

// Tab state
const activeTab = ref(props.initialTab);
const activeTabIndex = ref(0);

// Tab refs for positioning
const tabRefs = ref([]);

// UXWorkContainer ref
const uxWorkContainerRef = ref(null);

// Sliding background position and width
const slidingOffset = ref(0);
const slidingWidth = ref(80); // Default width
const slidingVisible = ref(false); // Control visibility

// Tab configuration
const tabs = computed(() => [
  {
    key: "uxWork",
    label: props.languageContent.uxWork,
    disabled: false,
  },
  {
    key: "playground",
    label: props.languageContent.playground,
    disabled: false,
  },
  {
    key: "aboutMe",
    label: props.languageContent.aboutMe,
    disabled: true, // Currently disabled as per your design
  },
]);

// Calculate sliding position and width
const calculateSlidingDimensions = (index) => {
  if (tabRefs.value[index]) {
    const tabElement = tabRefs.value[index];
    const tabRect = tabElement.getBoundingClientRect();
    const navRect = tabElement
      .closest(".tab-navigation")
      .getBoundingClientRect();

    // Calculate the left position relative to the navigation container
    const leftPosition = tabRect.left - navRect.left;

    // Get the tab's actual width including padding
    const tabWidth = tabRect.width;

    // Adjust for padding to account for the tab navigation padding
    return {
      offset: leftPosition - 24, // 24px is the left padding of tab-navigation
      width: tabWidth,
    };
  }
  return { offset: 0, width: 80 };
};

// Switch tab function
const switchTab = async (tabKey, index) => {
  if (activeTab.value !== tabKey) {
    activeTab.value = tabKey;
    activeTabIndex.value = index;
    emit("tabChange", tabKey);

    // Calculate and animate sliding background
    await nextTick();
    const { offset, width } = calculateSlidingDimensions(index);
    slidingOffset.value = offset;
    slidingWidth.value = width;

    // Scroll to the top when switching tabs
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    // If clicking the same tab, scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

// Initialize sliding position on mount
onMounted(async () => {
  await nextTick();

  // Wait for fonts to load first
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }

  // Add a longer delay to ensure everything is rendered
  setTimeout(async () => {
    await recalculateDimensions();
  }, 200); // Increased delay

  // Add another recalculation after a longer delay as fallback
  setTimeout(async () => {
    await recalculateDimensions();
  }, 500);
});

// Helper function to recalculate dimensions
const recalculateDimensions = async () => {
  await nextTick();
  const currentIndex = tabs.value.findIndex(
    (tab) => tab.key === activeTab.value
  );
  if (currentIndex !== -1) {
    activeTabIndex.value = currentIndex;
    const { offset, width } = calculateSlidingDimensions(currentIndex);
    slidingOffset.value = offset;
    slidingWidth.value = width;
    slidingVisible.value = true; // Show the background after correct dimensions
  }
};

// Watch for language content changes and recalculate dimensions
watch(
  [() => props.languageContent, () => props.currentLanguage],
  async () => {
    await recalculateDimensions();
  },
  { immediate: true }
);

// Watch for language changes and update UXWorkContainer
watch(
  () => props.currentLanguage,
  async (newLanguage) => {
    if (
      uxWorkContainerRef.value &&
      uxWorkContainerRef.value.handleLanguageChange
    ) {
      uxWorkContainerRef.value.handleLanguageChange(newLanguage);
    }
  }
);
</script>

<style scoped>
.tab-component {
  width: 100%;
  max-width: none;
}

/* Tab Navigation - Based on Figma design */
.tab-navigation {
  background: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 8px 24px;
  border-radius: 100px;
  box-shadow: 0px 6px 16px 2px rgba(0, 0, 0, 0.1);
  width: 400px; /* Increased from 342px to accommodate longer text */
  margin: 0 auto;
  position: sticky;
  top: 120px; /* Position below the header */
  z-index: 100; /* Ensure it stays above other content */
}

/* Sliding Background */
.sliding-background {
  position: absolute;
  top: 8px;
  left: 24px; /* Match the left padding of tab-navigation */
  height: calc(100% - 16px); /* Full height minus top/bottom padding */
  background: #000000;
  border-radius: 100px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
  z-index: 1;
  pointer-events: none; /* Don't interfere with tab clicks */
  opacity: 0; /* Start invisible */
}

.sliding-background.visible {
  opacity: 1; /* Show when visible class is added */
}

.tab-item {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 8px 20px; /* Reduced horizontal padding to fit better */
  position: relative;
  flex-shrink: 0;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 100px;
  min-width: 0; /* Allow flex items to shrink */
  z-index: 2; /* Above the sliding background */
}

.tab-item.active {
  /* Remove background since we now have sliding background */
  background: transparent;
}

.tab-item.active span {
  color: #ffffff;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}

.tab-item:not(.active):not(.disabled) span {
  color: #000000;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
}

.tab-item.disabled span {
  color: #d9d9d9;
  cursor: not-allowed;
  font-family: "Poppins", sans-serif;
}

.tab-item span {
  font-size: 14px;
  line-height: normal;
  text-align: center; /* Changed from left to center for better alignment */
  white-space: nowrap;
  flex-shrink: 0;
  overflow: hidden; /* Prevent text overflow */
  text-overflow: ellipsis; /* Show ellipsis if text is too long */
  max-width: 100%; /* Ensure text doesn't exceed tab width */
}

/* Tab Content */
.tab-content {
  min-height: 400px;
  width: 100%;
  max-width: none;
}

.content-panel {
  width: 100%;
  max-width: none;
}

.ux-work-panel,
.playground-panel,
.about-me-panel {
  padding: 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.default-content {
  text-align: center;
  color: #666;
}

.default-content h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 1rem;
  color: #000000;
}

.default-content p {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

/* Transitions */
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: all 0.3s ease;
}

.tab-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.tab-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .tab-navigation {
    width: 400px; /* Keep the same width as desktop */
    padding: 6px 16px;
  }

  .sliding-background {
    left: 16px; /* Match mobile padding */
  }

  .tab-item {
    padding: 6px 16px;
  }

  .tab-item span {
    font-size: 12px;
  }
}
</style>
