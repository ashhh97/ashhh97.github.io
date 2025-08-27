<template>
  <div class="info-component" :class="{ 'pill-mode': isPillMode }">
    <!-- Pill Mode Layout -->
    <div v-if="isPillMode" class="pill-container">
      <div class="pill-image">
        <img :src="imageUrl" :alt="imageAlt" />
      </div>
      <div class="pill-text">
        <span v-html="title"></span>
      </div>
    </div>

    <!-- Original Layout -->
    <div v-else class="info-content">
      <!-- Left Section -->
      <div class="left-section">
        <div class="info-header">
          <h2 class="info-title">{{ title }}</h2>
          <p class="info-subtitle">{{ subtitle }}</p>
        </div>

        <div class="info-description">
          <p>{{ description }}</p>
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons">
          <button
            v-if="primaryButton"
            class="btn-primary"
            @click="handlePrimaryClick"
          >
            {{ primaryButton }}
          </button>
          <button
            v-if="secondaryButton"
            class="btn-secondary"
            @click="handleSecondaryClick"
          >
            {{ secondaryButton }}
          </button>
        </div>
      </div>

      <!-- Right Section -->
      <div class="right-section">
        <div class="info-image">
          <img :src="imageUrl" :alt="imageAlt" />
        </div>

        <!-- Additional Info Cards -->
        <div v-if="infoCards && infoCards.length" class="info-cards">
          <div
            v-for="(card, index) in infoCards"
            :key="index"
            class="info-card"
          >
            <div class="card-icon">
              <img :src="card.icon" :alt="card.title" />
            </div>
            <div class="card-content">
              <h4 class="card-title">{{ card.title }}</h4>
              <p class="card-text">{{ card.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div v-if="bottomContent && !isPillMode" class="bottom-section">
      <div class="bottom-content">
        <h3 class="bottom-title">{{ bottomContent.title }}</h3>
        <p class="bottom-description">{{ bottomContent.description }}</p>

        <!-- Bottom Action -->
        <div v-if="bottomContent.action" class="bottom-action">
          <button class="btn-bottom" @click="handleBottomAction">
            {{ bottomContent.action }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  imageUrl: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: "Information image",
  },
  primaryButton: {
    type: String,
    default: "",
  },
  secondaryButton: {
    type: String,
    default: "",
  },
  infoCards: {
    type: Array,
    default: () => [],
  },
  bottomContent: {
    type: Object,
    default: null,
  },
  isPillMode: {
    type: Boolean,
    default: false,
  },
});

// Emits
const emit = defineEmits(["primaryClick", "secondaryClick", "bottomAction"]);

// Methods
const handlePrimaryClick = () => {
  emit("primaryClick");
};

const handleSecondaryClick = () => {
  emit("secondaryClick");
};

const handleBottomAction = () => {
  emit("bottomAction");
};
</script>

<style scoped>
.info-component {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

/* Pill Mode Styles */
.pill-mode {
  padding: 0;
  max-width: none;
  margin: 0;
}

.pill-container {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 24px;
  background: #ffffff;
  border: 0.4px solid #8f8f8f;
  border-radius: 16px;
  position: relative;
  overflow: visible;
  box-shadow: none;
  height: 40px;
  width: 100%;
  max-width: 100%;
  transition: box-shadow 0.3s ease;
}

.pill-container:hover {
  box-shadow: 9px 5px 26.6px 11px rgba(70, 70, 70, 0.06);
}

.pill-image {
  width: 61px;
  height: 68px;
  flex-shrink: 0;
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  margin-left: 48px;

  margin-top: -16px;
}

.pill-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  box-shadow: none;
}

.pill-text {
  flex: 1;
  display: flex;
  align-items: center;
  height: 40px;
  margin-left: 64px;
  font-weight: 500;
}

.pill-text span {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}

.reddot-text {
  font-weight: 500;
  color: #d90513;
}

.info-content {
  display: flex;
  gap: 60px;
  align-items: flex-start;
  margin-bottom: 60px;
}

/* Left Section */
.left-section {
  flex: 1;
  max-width: 500px;
}

.info-header {
  margin-bottom: 24px;
}

.info-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  color: #000000;
  margin-bottom: 12px;
}

.info-subtitle {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  color: #666666;
  margin: 0;
}

.info-description {
  margin-bottom: 32px;
}

.info-description p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #333333;
  margin: 0;
}

.action-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 14px 28px;
  background: #000000;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #333333;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
  padding: 14px 28px;
  background: transparent;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #000000;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Right Section */
.right-section {
  flex: 1;
  max-width: 500px;
}

.info-image {
  margin-bottom: 32px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.info-image img {
  width: 100%;
  height: auto;
  display: block;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.info-card:hover {
  background: #f0f1f2;
  transform: translateX(4px);
}

.card-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.card-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 8px 0;
}

.card-text {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #666666;
  margin: 0;
}

/* Bottom Section */
.bottom-section {
  border-top: 1px solid #e0e0e0;
  padding-top: 40px;
}

.bottom-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.bottom-title {
  font-size: 28px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 16px;
}

.bottom-description {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #666666;
  margin-bottom: 24px;
}

.btn-bottom {
  padding: 16px 32px;
  background: #000000;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-bottom:hover {
  background: #333333;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .info-content {
    flex-direction: column;
    gap: 40px;
  }

  .left-section,
  .right-section {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .info-component {
    padding: 20px 16px;
  }

  .pill-container {
    padding: 12px 20px;
    gap: 12px;
    min-height: 32px;
    margin-left: 20px;
  }

  .pill-image {
    width: 48px;
    height: 54px;
    left: -20px;
  }

  .pill-text span {
    font-size: 12px;
  }

  .info-content {
    gap: 32px;
    margin-bottom: 40px;
  }

  .info-title {
    font-size: 28px;
  }

  .action-buttons {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }

  .info-cards {
    gap: 16px;
  }

  .info-card {
    padding: 16px;
  }

  .bottom-section {
    padding-top: 32px;
  }

  .bottom-title {
    font-size: 24px;
  }
}

@media (max-width: 700px) {
  .pill-container {
    margin-left: 50px;
    padding: 12px 16px;
    max-width: 400px;
    width: auto;
  }

  .pill-image {
    width: 40px;
    height: 45px;
    left: -45px;
  }

  .pill-text {
    margin-left: 25px;
  }

  .pill-text span {
    font-size: 11px;
    line-height: 1.3;
  }
}

@media (max-width: 480px) {
  .info-title {
    font-size: 24px;
  }

  .info-subtitle {
    font-size: 16px;
  }

  .info-description p {
    font-size: 14px;
  }

  .card-title {
    font-size: 16px;
  }

  .card-text {
    font-size: 13px;
  }
}

@media (max-width: 400px) {
  .pill-container {
    margin-left: 45px;
    padding: 10px 12px;
    max-width: 350px;
    width: auto;
  }

  .pill-image {
    width: 35px;
    height: 40px;
    left: -40px;
  }

  .pill-text {
    margin-left: 15px;
  }

  .pill-text span {
    font-size: 10px;
    line-height: 1.2;
  }
}
</style>
