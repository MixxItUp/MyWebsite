<template>
  <div class="project-showcase">
    <div class="project-content">
      <div class="project-header">
        <h4>{{ title }}</h4>
        <div class="project-links">
          <a href="#" class="github-link">
            <i class="fab fa-github"></i>
            查看源码
          </a>
        </div>
      </div>

      <div class="project-description">
        <p>{{ description }}</p>
      </div>

      <div class="project-features">
        <h5>主要功能</h5>
        <ul>
          <li v-for="(feature, index) in features" :key="index">
            {{ feature }}
          </li>
        </ul>
      </div>

      <div class="tech-stack">
        <h5>技术栈</h5>
        <ul>
          <li v-for="(tech, index) in techStack" :key="index">
            <i :class="tech.icon"></i>
            <span>{{ tech.text }}</span>
          </li>
        </ul>
      </div>
      
      <div class="project-preview">
        <div class="preview-steps">
          <div class="preview-step" v-for="(step, index) in previewSteps" :key="index">
            <div class="step-header">
              <span class="step-number">{{ index + 1 }}</span>
              <h5 class="step-title">{{ step.title }}</h5>
            </div>
            <p class="step-description">{{ step.description }}</p>
            <div class="step-image">
              <img :src="step.image" :alt="step.title" class="preview-image">
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  previewSteps: {
    type: Array,
    default: () => [
      {
        title: '',
        description: '',
        image: ''  // 图片路径待补充
      },
    ]
  },
  features: Array,
  techStack: Array
});
</script>

<style scoped>
.project-showcase {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-showcase:hover {
  transform: translateY(-5px);
}

.project-content {
  padding: 2rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.project-header h4 {
  font-size: 1.5rem;
  color: var(--text-color);
  font-weight: 600;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-links a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text-color);
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.project-links a:hover {
  color: var(--accent-color);
}

.project-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.project-preview {
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
}

.preview-image {
  width: 100%;
  height: auto;
  display: block;
}

.preview-video {
  width: 100%;
  height: auto;
  display: block;
}

.project-features {
  margin-bottom: 2rem;
}
.tech-stack{
    margin-bottom: 2rem;
}

.project-features h5,
.tech-stack h5 {
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.project-features ul {
  list-style: none;
  padding: 0;
}

.project-features li {
  color: var(--text-light);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.project-features li::before {
  content: '•';
  color: var(--accent-color);
  position: absolute;
  left: 0;
}

.tech-stack ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
}

.tech-stack li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
}

.tech-stack i {
  color: var(--accent-color);
}

.preview-steps {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.preview-step {
  background: var(--secondary-color);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.step-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.step-number {
  background: var(--accent-color);
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
}

.step-title {
  font-size: 1.2rem;
  color: var(--text-color);
  font-weight: 500;
  margin: 0;
}

.step-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.step-image {
  border-radius: 5px;
  overflow: hidden;
  /* box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1); */
}

.step-image img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 768px) {
  .preview-step {
    padding: 1rem;
  }

  .step-title {
    font-size: 1.1rem;
  }
}
</style> 