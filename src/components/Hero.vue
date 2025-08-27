<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          Hi, I'm <span class="highlight">Your Name</span>
        </h1>
        <h2 class="hero-subtitle">Full Stack Developer</h2>
        <p class="hero-description">
          I create beautiful, functional, and user-centered digital experiences.
          Passionate about clean code and innovative solutions.
        </p>
        <div class="hero-buttons">
          <button class="btn btn-primary">View My Work</button>
          <button class="btn btn-secondary">Get In Touch</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-image-placeholder">
          <div class="placeholder-content">
            <span class="placeholder-icon">👨‍💻</span>
            <p>Profile Image</p>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script setup>
// Hero component logic can be added here
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  z-index: 1;
  position: relative;
}

.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.highlight {
  color: #ffd700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #e0e0e0;
  margin: 0 0 1.5rem 0;
  font-weight: 400;
}

.hero-description {
  font-size: 1.1rem;
  color: #f0f0f0;
  margin: 0 0 2rem 0;
  line-height: 1.6;
  max-width: 500px;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn-primary {
  background: #ffd700;
  color: #333;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.btn-primary:hover {
  background: #ffed4e;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #333;
  transform: translateY(-2px);
}

.hero-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image-placeholder {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.placeholder-content {
  text-align: center;
  color: white;
}

.placeholder-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

.placeholder-content p {
  margin: 0;
  font-size: 1.1rem;
  opacity: 0.8;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 30px;
  height: 30px;
  border-right: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(45deg);
  opacity: 0.7;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-image-placeholder {
    width: 200px;
    height: 200px;
  }
}
</style>
