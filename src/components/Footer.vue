<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">Portfolio</h3>
          <p class="footer-description">
            Creating digital experiences that inspire and engage. Let's build
            something amazing together.
          </p>
        </div>

        <div class="footer-section">
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-heading">Services</h4>
          <ul class="footer-links">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>UI/UX Design</li>
            <li>Consulting</li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-heading">Connect</h4>
          <div class="social-links">
            <a href="#" class="social-link" title="GitHub">
              <span>🐙</span>
            </a>
            <a href="#" class="social-link" title="LinkedIn">
              <span>💼</span>
            </a>
            <a href="#" class="social-link" title="Twitter">
              <span>🐦</span>
            </a>
            <a href="#" class="social-link" title="Instagram">
              <span>📸</span>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-line"></div>
        <div class="footer-bottom-content">
          <p class="copyright">
            © {{ currentYear }} Your Name. All rights reserved.
          </p>
          <p class="made-with">Made with ❤️ using Vue.js</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  background: #1a1a1a;
  color: white;
  padding: 4rem 0 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #646cff;
  margin: 0;
}

.footer-description {
  color: #b0b0b0;
  line-height: 1.6;
  margin: 0;
}

.footer-heading {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin: 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links li a {
  color: #b0b0b0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links li a:hover {
  color: #646cff;
}

.footer-links li {
  color: #b0b0b0;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #333;
  border-radius: 50%;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #646cff;
  transform: translateY(-3px);
}

.footer-bottom {
  margin-top: 2rem;
}

.footer-line {
  height: 1px;
  background: #333;
  margin-bottom: 2rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright,
.made-with {
  color: #b0b0b0;
  margin: 0;
  font-size: 0.9rem;
}

.made-with {
  color: #646cff;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
