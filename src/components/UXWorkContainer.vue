<template>
  <div class="ux-work-container">
    <div class="container-content">
      <!-- InfoComponent -->
      <InfoComponent
        title='YING WON <span class="reddot-text">reddot</span> 2025 Brands & Communication Design Award! Awaiting display on the Red Dot website.'
        :image-url="'/src/assets/infoIp.png'"
        :image-alt="'Illustrated character'"
        :is-pill-mode="true"
        style="margin-top: 64px"
      />

      <!-- Project Cards Section -->
      <div class="project-cards-section">
        <div class="project-grid">
          <!-- Project Card 1 - eMall Redesign -->
          <ProjectCard
            :title="translations[currentLanguage].emall.title"
            :year="translations[currentLanguage].emall.year"
            :tags="translations[currentLanguage].emall.tags"
            :image-url="'/src/assets/eMallHomeImg.png'"
            :icon-url="'/src/assets/icon1.png'"
            :is-locked="!isUnlocked"
            :is-disabled="false"
            :password="sharedPassword"
            @card-click="handleProjectClick"
            @password-submit="handlePasswordSubmit"
          />

          <!-- Project Card 2 - Report Assistant -->
          <ProjectCard
            :title="translations[currentLanguage].reportAssistant.title"
            :year="translations[currentLanguage].reportAssistant.year"
            :tags="translations[currentLanguage].reportAssistant.tags"
            :image-url="'/src/assets/AI%20Assistant%20Home.png'"
            :icon-url="'/src/assets/icon4.png'"
            :is-locked="false"
            :is-disabled="false"
            @card-click="handleProjectClick"
          />

          <!-- Project Card 3 - HarmonyOS Card -->
          <ProjectCard
            :title="translations[currentLanguage].harmony.title"
            :year="translations[currentLanguage].harmony.year"
            :tags="translations[currentLanguage].harmony.tags"
            :image-url="'/src/assets/HarmonyHomeImg.png'"
            :is-locked="false"
            :is-disabled="false"
            @card-click="handleProjectClick"
          />

          <!-- Project Card 4 - Garage Monitor System -->
          <ProjectCard
            :title="translations[currentLanguage].mobile.title"
            :year="translations[currentLanguage].mobile.year"
            :tags="translations[currentLanguage].mobile.tags"
            :image-url="'/src/assets/GarageImg.png'"
            :icon-url="'/src/assets/icon2.png'"
            :is-locked="false"
            :is-disabled="false"
            @card-click="handleProjectClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import InfoComponent from "./InfoComponent.vue";
import ProjectCard from "./ProjectCard.vue";

// Router
const router = useRouter();

// Language state
const currentLanguage = ref("english");

// Shared password state
const isUnlocked = ref(false);
const sharedPassword = "portfolio2025"; // Single password for all locked cards

// Translations object
const translations = {
  english: {
    emall: {
      title: "eMall Redesign",
      year: "2025",
      tags: "#User Research #Competitor analysis  #UX Design #User Test",
    },
    mobile: {
      title: "Warehouse Simulation & Design System",
      year: "2024",
      tags: "#UX Design #Visual Design",
    },
    harmony: {
      title: "HarmonyOS Card",
      year: "2023",
      tags: "#Mobile #UX Design #User Test",
    },
    reportAssistant: {
      title: "Report Assistant Design",
      year: "2025",
      tags: "#User Research #Competitor analysis  #UX Design #User Test",
    },
  },
  chinese: {
    emall: {
      title: "eMall 重新设计",
      year: "2025",
      tags: "#用户研究 #竞品分析 #设计 #用户测试",
    },
    mobile: {
      title: "仓库仿真与设计系统",
      year: "2024",
      tags: "#视觉设计",
    },
    harmony: {
      title: "鸿蒙系统卡片",
      year: "2023",
      tags: "#移动端",
    },
    reportAssistant: {
      title: "报告助手设计",
      year: "2025",
      tags: "#用户研究 #竞品分析 #设计 #用户测试",
    },
  },
};

// Handle language change from parent component
const handleLanguageChange = (language) => {
  currentLanguage.value = language;
};

// Event handlers for project cards
const handleProjectClick = (projectData) => {
  console.log("Project clicked:", projectData);

  // Navigate to eMall Redesign page
  if (
    projectData.title === translations[currentLanguage.value].emall.title ||
    projectData.title === "eMall Redesign" ||
    projectData.title === "eMall 重新设计"
  ) {
    // Navigate to eMall page using Vue Router
    router.push("/emall");
  }

  // Navigate to HarmonyOS page
  if (
    projectData.title === translations[currentLanguage.value].harmony.title ||
    projectData.title === "HarmonyOS Card" ||
    projectData.title === "鸿蒙系统卡片"
  ) {
    // Navigate to HarmonyOS page using Vue Router
    router.push("/harmonyos");
  }

  // Navigate to Warehouse page (Garage Monitor System)
  if (
    projectData.title === translations[currentLanguage.value].mobile.title ||
    projectData.title === "Garage Monitor System" ||
    projectData.title === "移动应用用户体验"
  ) {
    // Navigate to Warehouse page using Vue Router
    router.push("/warehouse");
  }

  // Navigate to ReportAssistant page
  if (
    projectData.title ===
      translations[currentLanguage.value].reportAssistant.title ||
    projectData.title === "Report Assistant Design" ||
    projectData.title === "报告助手设计"
  ) {
    // Navigate to ReportAssistant page using Vue Router
    router.push("/reportassistant");
  }

  // Handle other project clicks - could open modal, navigate to detail page, etc.
};

const handlePasswordSubmit = (passwordData) => {
  console.log("Password submitted:", passwordData);

  // Check if the submitted password matches the shared password
  if (passwordData.password === sharedPassword) {
    // Check if this is the eMall Redesign project
    if (
      passwordData.title === translations[currentLanguage.value].emall.title ||
      passwordData.title === "eMall Redesign" ||
      passwordData.title === "eMall 重新设计"
    ) {
      // For eMall Redesign, unlock all cards AND navigate to the page
      isUnlocked.value = true;
      localStorage.setItem("portfolioUnlocked", "true");
      console.log(
        "eMall Redesign unlocked - navigating to project page and unlocking all cards"
      );

      // Navigate to eMall page using Vue Router
      router.push("/emall");
    } else {
      // For other locked projects, unlock all cards
      isUnlocked.value = true;
      localStorage.setItem("portfolioUnlocked", "true");
      console.log("All locked cards are now unlocked!");

      // Open a new page
      const newWindow = window.open("", "_blank");
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Portfolio Unlocked - Project Details</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: 'Poppins', sans-serif;
              background: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
            }
            .content {
              text-align: center;
              padding: 40px;
            }
            h1 {
              font-size: 48px;
              font-weight: 700;
              color: #000000;
              margin-bottom: 24px;
            }
            p {
              font-size: 18px;
              color: #666666;
              margin-bottom: 32px;
            }
            .back-btn {
              padding: 12px 24px;
              background: #000000;
              color: #ffffff;
              border: none;
              border-radius: 8px;
              font-family: 'Poppins', sans-serif;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
              text-decoration: none;
              display: inline-block;
              transition: background 0.3s ease;
            }
            .back-btn:hover {
              background: #333333;
            }
          </style>
        </head>
        <body>
          <div class="content">
            <h1>Portfolio Unlocked!</h1>
            <p>All locked projects are now accessible. You can return to the portfolio to view the unlocked content.</p>
            <a href="#" class="back-btn" onclick="window.close()">Close Page</a>
          </div>
        </body>
        </html>
      `);
      newWindow.document.close();
    }
  } else {
    console.log("Incorrect password. Cards remain locked.");
  }
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

  // Load unlock state from localStorage
  const savedUnlockState = localStorage.getItem("portfolioUnlocked");
  if (savedUnlockState === "true") {
    isUnlocked.value = true;
  }
});

// Expose language change handler for parent component
defineExpose({
  handleLanguageChange,
});
</script>

<style scoped>
.ux-work-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}

.container-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* Project Cards Section */
.project-cards-section {
  width: 100%;
}

.section-header {
  text-align: left;
  margin-bottom: 48px;
}

.section-header h2 {
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 16px 0;
  line-height: 1.2;
}

.section-header p {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  line-height: 1.5;
  margin: 0;
}

.project-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  row-gap: 56px;
  width: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container-content {
    gap: 60px;
  }

  .section-header {
    margin-bottom: 32px;
  }

  .section-header h2 {
    font-size: 28px;
  }

  .section-header p {
    font-size: 14px;
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    row-gap: 24px;
  }
}
</style>
