<template>
  <div id="app">
    
    <nav class="navbar">
      <div class="nav-content">
        <router-link to="/" class="nav-logo">Yu Lin</router-link>
        <div class="nav-links">
          <router-link to="/">首页</router-link>
          <router-link to="/about">关于</router-link>
          <router-link to="/resume">简历</router-link>
          <router-link to="/gitee">Gitee</router-link>
        </div>
      </div>
    </nav>

    <RouterView/>

    <footer class="footer">
      <div class="footer-content">
        <div class="social-links">
          <a href="#" target="_blank"><i class="fab fa-qq"></i></a>
          <a href="#" target="_blank"><i class="fab fa-weixin"></i></a>
          <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
        <p class="copyright">© 2024 Yu Lin. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style>
:root {
  --primary-color: #ffffff;
  --secondary-color: #f8f9fa;
  --accent-color: #64a6bd;
  --text-color: #2c3e50;
  --text-light: #6c757d;
  --transition: all 0.3s ease;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-color);
  text-decoration: none;
  transition: var(--transition);
  padding: 0.5rem 0;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-color);
  transition: var(--transition);
}

.nav-links a:hover::after {
  width: 100%;
}

.footer {
  background: var(--secondary-color);
  padding: 2rem 0;
  /* margin-top: 4rem; */
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.social-links a {
  color: var(--text-light);
  font-size: 1.5rem;
  transition: var(--transition);
}

.social-links a:hover {
  color: var(--accent-color);
}

.copyright {
  color: var(--text-light);
  font-size: 0.9rem;
}
</style>
