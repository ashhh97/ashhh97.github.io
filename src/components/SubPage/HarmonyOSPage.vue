<template>
  <div class="harmonyos-page">
    <!-- Header -->
    <Header @language-change="handleLanguageChange" />

    <!-- Main Content -->
    <main class="main-content animate-fade-in-up">
      <div class="content-container">
        <!-- Page Title -->
        <h1 class="page-title">{{ currentContent.title }}</h1>

        <!-- Project Date -->
        <p class="project-date">{{ currentContent.date }}</p>

        <!-- Project Description -->
        <p class="project-description">
          {{ currentContent.description }}
        </p>

        <!-- Content Sections -->
        <div class="content-sections">
          <!-- Section 1: Desktop quick glance & claim transport tasks -->
          <section class="content-section">
            <h2 class="section-title">
              {{ currentContent.sections.section1.title }}
            </h2>
            <div class="section-image">
              <img
                src="../../assets/HarmonyOS/task%20card%20img.jpg"
                alt="Task Card Interface"
                class="feature-image"
              />
            </div>
            <div class="section-description">
              <p>
                {{ currentContent.sections.section1.description1 }}
              </p>
              <p>
                {{ currentContent.sections.section1.description2 }}
              </p>
            </div>
          </section>

          <!-- Section 2: In-Transit Card -->
          <section class="content-section">
            <h2 class="section-title">
              {{ currentContent.sections.section2.title }}
            </h2>
            <div class="section-image">
              <img
                src="../../assets/HarmonyOS/In-Transit%20Card%20img.jpg"
                alt="In-Transit Card Interface"
                class="feature-image"
              />
            </div>
            <div class="section-description">
              <p>
                {{ currentContent.sections.section2.description1 }}
              </p>
              <p>
                {{ currentContent.sections.section2.description2 }}
              </p>
              <p>
                {{ currentContent.sections.section2.description3 }}
              </p>
              <p>
                {{ currentContent.sections.section2.description4 }}
              </p>
            </div>
          </section>

          <!-- Section 3: OCR-powered container damage recognition -->
          <section class="content-section">
            <h2 class="section-title">
              {{ currentContent.sections.section3.title }}
            </h2>
            <div class="section-image">
              <img
                src="../../assets/HarmonyOS/OCR%20img.jpg"
                alt="OCR Container Recognition"
                class="feature-image"
              />
            </div>
            <div class="section-description">
              <p>
                {{ currentContent.sections.section3.description1 }}
              </p>
              <p>
                {{ currentContent.sections.section3.description2 }}
              </p>
              <p>
                {{ currentContent.sections.section3.description3 }}
              </p>
            </div>
          </section>

          <!-- Section 4: Forward Tasks with a Tap -->
          <section class="content-section">
            <h2 class="section-title">
              {{ currentContent.sections.section4.title }}
            </h2>
            <div class="section-image">
              <img
                src="../../assets/HarmonyOS/tap%20img.jpg"
                alt="Task Forwarding Interface"
                class="feature-image"
              />
            </div>
            <div class="section-description">
              <p>
                {{ currentContent.sections.section4.description1 }}
              </p>
              <div class="challenges">
                <p>
                  <strong>{{
                    currentContent.sections.section4.challenges
                  }}</strong>
                </p>
                <ul>
                  <li>{{ currentContent.sections.section4.challenge1 }}</li>
                  <li>
                    {{ currentContent.sections.section4.challenge2 }}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Section 5: Arrival Card -->
          <section class="content-section">
            <h2 class="section-title">
              {{ currentContent.sections.section5.title }}
            </h2>
            <div class="section-image">
              <img
                src="../../assets/HarmonyOS/Arrival%20Card%20img.jpg"
                alt="Arrival Card Interface"
                class="feature-image"
              />
            </div>
            <div class="section-description">
              <p>
                {{ currentContent.sections.section5.description1 }}
              </p>
            </div>
          </section>
        </div>

        <!-- Footer -->
        <div class="page-footer">
          <p>{{ currentContent.footer }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Header from "../Header.vue";

// Language state
const currentLanguage = ref("english");

// Translation object
const translations = {
  english: {
    title: "HarmonyOS Card for Truck Drivers",
    description:
      "In order to help truck drivers access their tasks more quickly during transportation, we have extracted key task-related information from the app and placed it on a small desktop widget.",
    date: "2023.10",
    sections: {
      section1: {
        title: "Desktop quick glance & claim transport tasks",
        description1:
          "Pin the card to the home screen to view pending tasks, swipe to switch, and tap 'Accept Task' to claim",
        description2:
          '"Placing the main operations of the workflow on the mobile home screen is more efficient than entering the app." — Truck Driver',
      },
      section2: {
        title: "In-Transit Card",
        description1:
          "The service card highlights key task information such as the next destination, pickup appointment time, and order number.",
        description2:
          "Task progress is visualized with a progress bar divided into three main stages, showing the number of destinations in each stage for better progress awareness.",
        description3:
          "A trip map provides a clear view of the driver's location, current route, and task progress.",
        description4:
          "In addition, essential action buttons are placed directly on the card, allowing drivers to clock in, contact coordinators, or report exceptions without entering the app.",
      },
      section3: {
        title: "OCR-powered container damage recognition",
        description1:
          "The container is divided into different views for drivers to inspect and upload photos in sequence. During photo capture, OCR automatically detects container damage and adds notes.",
        description2:
          '"Drivers capture multiple inside and outside photos. Segmented container views make it clear for both drivers and reviewers." — Warehouse Staff',
        description3:
          '"OCR can detect if a container is damaged, saving a lot of time." — Truck Driver',
      },
      section4: {
        title: "Forward Tasks with a Tap",
        description1:
          'Drivers bring their phones close to forward a task. A transfer animation plays, and the other driver taps "Accept Task" to receive the task card on their home screen.',
        challenges: "Challenges:",
        challenge1: "Older drivers may struggle with smartphone features.",
        challenge2:
          "NFC-based task forwarding can fail, and drivers may not know how to fix it.",
      },
      section5: {
        title: "Arrival Card",
        description1:
          "Shows key cargo info and a trip map to confirm the destination. Essential actions like pickup check-in can be done directly from the card.",
      },
    },
    footer: "@2025YINGZHANG",
  },
  chinese: {
    title: "鸿蒙运输卡片",
    description:
      "为了帮助卡车司机在运输过程中快速触达任务，我们从应用程序中提取了关键的任务信息，并将其放置在一个桌面小组件上。",
    date: "2023.10",
    sections: {
      section1: {
        title: "桌面快速浏览和认领运输任务",
        description1:
          "将卡片固定到主屏幕以查看待处理任务，滑动切换，点击'接受任务'进行认领",
        description2:
          '"将工作流程的主要操作放在移动主屏幕上比进入应用程序更高效。" — 卡车司机',
      },
      section2: {
        title: "运输中卡片",
        description1:
          "服务卡片突出显示关键任务信息，如下一个目的地、提货预约时间和订单号。",
        description2:
          "任务进度通过分为三个主要阶段的进度条进行可视化，显示每个阶段的目的地数量，以便更好地了解进度。",
        description3: "行程地图提供司机位置、当前路线和任务进度的清晰视图。",
        description4:
          "此外，重要操作按钮外置在卡片上，允许司机打卡、联系协调员或报告异常，而无需进入应用程序。",
      },
      section3: {
        title: "OCR智能识别集装箱损坏",
        description1:
          "集装箱分为不同的视图，供司机按顺序检查和上传照片。在拍照过程中，OCR自动检测集装箱损坏并添加注释。",
        description2:
          '"司机拍摄多个内部和外部照片。分段集装箱视图对司机和审查员都很清楚。" — 仓库员工',
        description3: '"OCR可以检测集装箱是否损坏，节省大量时间。" — 卡车司机',
      },
      section4: {
        title: "碰一碰任务流转",
        description1:
          '司机将手机靠近以转发任务。转发动效出现，另一个司机点击"接受任务"以在主屏幕上接收任务卡片。',
        challenges: "挑战：",
        challenge1: "年长的司机可能难以使用智能手机功能。",
        challenge2: "基于NFC的任务转发可能会失败，司机可能不知道如何修复。",
      },
      section5: {
        title: "到达卡片",
        description1:
          "显示关键货物信息和行程地图以确认目的地。重要操作如提货签到可以直接从卡片完成。",
      },
    },
    footer: "@2025张颖",
  },
};

// Computed properties for current language content
const currentContent = computed(() => translations[currentLanguage.value]);

// Handle language change
const handleLanguageChange = (language) => {
  currentLanguage.value = language;
};

// Initialize language from localStorage on mount
onMounted(() => {
  const savedLanguage = localStorage.getItem("portfolioLanguage");
  if (
    savedLanguage &&
    (savedLanguage === "english" || savedLanguage === "chinese")
  ) {
    currentLanguage.value = savedLanguage;
  }
});
</script>

<style scoped>
@import "../../assets/subpage-styles.css";
</style>
