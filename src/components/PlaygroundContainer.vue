<template>
  <div class="playground-container">
    <div class="container-content">
      <!-- Playground Header -->

      <!-- Pinterest-style Grid -->
      <div class="playground-grid">
        <!-- Column 1 -->
        <div class="grid-column">
          <div class="grid-item">
            <div class="item-image">
              <img
                src="/src/assets/playgroundImg/sculpture.png"
                alt="Sculpture"
                class="playground-image"
              />
            </div>
            <div class="item-info">
              <p>2021 Procreate Drawing</p>
            </div>
          </div>

          <div class="grid-item">
            <div class="item-image">
              <img
                src="/src/assets/playgroundImg/dunhuang.png"
                alt="Dunhuang"
                class="playground-image"
              />
            </div>
            <div class="item-info">
              <p>2019 Landscape Architecture Work</p>
            </div>
          </div>

          <div class="grid-item">
            <div class="item-image">
              <img
                src="/src/assets/playgroundImg/steelfactory.png"
                alt="Steel Factory"
                class="playground-image"
              />
            </div>
            <div class="item-info">
              <p>2019 Landscape Architecture Work</p>
            </div>
          </div>

          <div class="grid-item">
            <div class="item-image">
              <img
                src="/src/assets/playgroundImg/railwaystation.png"
                alt="Railway Station"
                class="playground-image"
              />
            </div>
            <div class="item-info">
              <p>2019 Landscape Architecture Work</p>
            </div>
          </div>
        </div>

        <!-- Column 2 -->
        <div class="grid-column">
          <div class="grid-item">
            <div class="item-image">
              <img
                src="/src/assets/playgroundImg/model.png"
                alt="Model"
                class="playground-image"
              />
            </div>
            <div class="item-info">
              <p>2022 Procreate Drawing</p>
            </div>
          </div>

          <div class="grid-item">
            <div class="item-image">
              <img
                src="/src/assets/playgroundImg/skill.png"
                alt="Skill"
                class="playground-image"
              />
            </div>
            <div class="item-info">
              <p>2021 Procreate Drawing</p>
            </div>
          </div>

          <div class="grid-item">
            <div class="item-image">
              <img
                src="/src/assets/playgroundImg/his.png"
                alt="His"
                class="playground-image"
              />
            </div>
            <div class="item-info">
              <p>2025 Procreate Drawing</p>
            </div>
          </div>
        </div>

        <!-- Column 3 -->
        <div class="grid-column">
          <div class="grid-item">
            <div class="item-image">
              <img
                src="/src/assets/playgroundImg/oilpainting.png"
                alt="Oil Painting"
                class="playground-image"
              />
            </div>
            <div class="item-info">
              <p>2019 Photoshop Oil Painting Practice</p>
            </div>
          </div>

          <div class="grid-item">
            <div class="item-image">
              <img
                src="/src/assets/playgroundImg/railwaystation2.png"
                alt="Railway Station 2"
                class="playground-image"
              />
            </div>
            <div class="item-info">
              <p>2019 Landscape Architecture Work</p>
            </div>
          </div>

          <div class="grid-item">
            <div class="item-image">
              <img
                src="/src/assets/playgroundImg/ganbu.png"
                alt="Ganbu"
                class="playground-image"
              />
            </div>
            <div class="item-info">
              <p>2025 Procreate Drawing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No modal functionality needed
</script>

<style scoped>
.playground-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}

.container-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.playground-header {
  text-align: center;
  padding: 60px 20px;
}

.playground-header h2 {
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 24px 0;
  line-height: 1.2;
}

.playground-header p {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #666666;
  margin: 0 0 60px 0;
  line-height: 1.6;
}

.playground-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 23px;
  padding: 0 20px;
  margin-top: 40px;
  grid-auto-rows: min-content;
}

.grid-column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.grid-item {
  background: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: fit-content;
}

.item-image {
  width: 100%;
  border-radius: 16px;
  height: auto;
  min-height: 120px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  flex: 1;
  position: relative;
}

.playground-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 16px;
  display: block;
}

.placeholder-image {
  font-size: 48px;
  opacity: 0.7;
  padding: 40px 0;
}

.item-info {
  margin-top: 0;
  text-align: left;
  background: #ffffff;
}

.item-info p {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #030303;
  margin: 0;
  line-height: normal;
  text-align: left;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .playground-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 0 16px;
  }
}

@media (max-width: 768px) {
  .playground-header {
    padding: 40px 20px;
  }

  .playground-header h2 {
    font-size: 36px;
  }

  .playground-header p {
    font-size: 16px;
    margin-bottom: 40px;
  }

  .playground-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 16px;
  }

  .grid-column {
    gap: 24px;
  }

  .item-image {
    min-height: 100px;
  }

  .item-info {
    padding: 0;
  }

  .item-info p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .playground-header h2 {
    font-size: 28px;
  }

  .playground-header p {
    font-size: 14px;
  }

  .playground-grid {
    padding: 0 12px;
    gap: 12px;
  }

  .item-image {
    min-height: 80px;
  }

  .placeholder-image {
    font-size: 36px;
    padding: 30px 0;
  }
}
</style>
