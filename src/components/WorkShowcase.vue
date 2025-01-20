<template>
  <div class="ui-works-showcase" :class="{ 'reverse-layout': isReversed }">
    <!-- 视频部分 -->
    <div class="videos-container" :class="{ 'single-video': videos.length === 1 }">
      <div v-for="(video, index) in videos" 
           :key="index" 
           class="video-container">
        <video 
          :src="video"
          autoplay
          loop
          muted
          playsinline
          class="showcase-video"
        >
          您的浏览器不支持视频播放。
        </video>
      </div>
    </div>

    <!-- 描述部分 -->
    <div class="showcase-description">
      <h4>{{ title }}</h4>
      <p class="concept-intro">{{ description }}</p>
      
      <div class="tech-stack">
        <h5>技术实现</h5>
        <ul>
          <li v-for="(tech, index) in techStack" :key="index">
            <i :class="tech.icon" :style="{ color: tech.color }"></i>
            <span>{{ tech.text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  // 标题
  title: {
    type: String,
    required: true
  },
  // 描述文本
  description: {
    type: String,
    required: true
  },
  // 视频源数组
  videos: {
    type: Array,
    required: true
  },
  // 技术栈数组
  techStack: {
    type: Array,
    required: true
  },
  // 是否反转布局（文字在右/左）
  isReversed: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.ui-works-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;
  padding: 2rem;
  margin-top: 4rem;
  padding-top: 4rem;
  border-top: 1px solid rgba(0,0,0,0.1);
}

.reverse-layout {
  direction: rtl;
}

.reverse-layout > * {
  direction: ltr;
}

.videos-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

.video-container {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background: var(--secondary-color);
}

.showcase-video {
  width: 100%;
  display: block;
  aspect-ratio: 16/9;
  object-fit: cover;
}

.showcase-description {
  padding: 2rem;
  background: var(--secondary-color);
  border-radius: 12px;
  height: 100%;
}

.showcase-description h4 {
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 1.2rem;
  font-weight: 600;
}

.concept-intro {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.tech-stack {
  margin-bottom: 2rem;
}

.tech-stack h5 {
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  font-weight: 500;
}

.tech-stack ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.tech-stack li {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-light);
  padding: 0.5rem 0;
}

.tech-stack i {
  font-size: 1.4rem;
  width: 1.8rem;
  text-align: center;
}

@media (max-width: 1024px) {
  .ui-works-showcase {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem;
  }

  .videos-container {
    margin-top: 2rem;
    gap: 1rem;
  }
}
</style> 