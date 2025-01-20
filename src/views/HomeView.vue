<template>
  <main>
    <section class="home">
      <div class="home-content">
        <h1 class="home-title">
          <span class="greeting">你好，我是</span>
          <span class="name">Yu Lin</span>
        </h1>
        <p class="home-subtitle">
          <span class="typing-text"></span>
          <span class="cursor">|</span>
        </p>
        <p class="home-description">
          致力于创建美观、实用且具有出色用户体验的现代网络应用
        </p>
        <div class="home-cta">
          <a href="about" class="primary-btn">关于我</a>
          <a href="#contact" class="secondary-btn">联系我</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';

const texts = [
  "西南大学本科在读生",
  "前端开发工程师",
  "UI设计 & 3D建模爱好者"
];

const typingSpeed = 160;      // 打字速度
const deletingSpeed = 50;     // 删除速度
const pauseDuration = 1500;   // 展示停顿时间

onMounted(() => {
  const typingText = document.querySelector('.typing-text');
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      // 删除文字
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500); // 删除完成后短暂停顿
      } else {
        setTimeout(type, deletingSpeed);
      }
    } else {
      // 输入文字
      typingText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, pauseDuration); // 完整展示后停顿
      } else {
        setTimeout(type, typingSpeed);
      }
    }
  }

  setTimeout(type, 500); // 初始延迟
});
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
}

.home-content {
  max-width: 800px;
  text-align: center;
  animation: fadeIn 1s ease-out;
}

.home-title {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.greeting {
  font-size: 1.5rem;
  color: var(--text-light);
}

.name {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-color);
  letter-spacing: -1px;
}

.home-subtitle {
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  min-height: 2em;
}

.typing-text {
  white-space: pre;
}

.cursor {
  display: inline-block;
  animation: blink 1s step-end infinite;
  margin-left: 2px;
  color: var(--accent-color);
}

@keyframes blink {
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.home-description {
  font-size: 1.1rem;
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.home-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.primary-btn,
.secondary-btn {
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: var(--transition);
  font-weight: 500;
}

.primary-btn {
  background: var(--accent-color);
  color: white;
}

.secondary-btn {
  background: transparent;
  color: var(--text-color);
  border: 2px solid var(--accent-color);
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(100, 166, 189, 0.4);
}

.secondary-btn:hover {
  background: var(--accent-color);
  color: white;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .name {
    font-size: 2.5rem;
  }
  
  .home-subtitle {
    font-size: 1.2rem;
  }
  
  .home-description {
    font-size: 1rem;
  }
  
  .home-cta {
    flex-direction: column;
  }
}
</style>
