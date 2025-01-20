<template>
    <div class="modeling-showcase" :id="id">
      <div class="showcase-content">
        <div class="showcase-header">
          <h4>{{ title }}</h4>
        </div>
  
        <div class="showcase-description">
          <p>{{ description }}</p>
        </div>
  
        <div class="showcase-gallery">
          <!-- 图片展示 -->
          <div v-if="images && images.length" class="gallery-images">
            <div v-for="(image, index) in images" 
                 :key="`img-${index}`" 
                 class="gallery-item">
              <img :src="image.src" :alt="image.alt">
              <p class="image-caption">{{ image.caption }}</p>
            </div>
          </div>
          
          <!-- 视频展示 -->
          <div v-if="videos && videos.length" class="gallery-videos">
            <div v-for="(video, index) in videos" 
                 :key="`video-${index}`" 
                 class="video-item">
              <video 
                :src="video.src"
                controls
                autoplay
                class="showcase-video"
              >
                您的浏览器不支持视频播放。
              </video>
              <p class="video-caption">{{ video.caption }}</p>
            </div>
          </div>
        </div>
  
        <div class="tech-details">
          <h5>技术要点</h5>
          <ul>
            <li v-for="(point, index) in techPoints" 
                :key="index"
                class="tech-point">
              <i :class="point.icon" :style="{ color: point.color }"></i>
              <span>{{ point.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    id: String,
    title: String,
    description: String,
    images: Array,
    videos: Array,
    techPoints: Array
  });
  </script>
  
  <style scoped>
  .modeling-showcase {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 3rem;
    padding: 2rem;
  }
  
  .showcase-header h4 {
    font-size: 1.8rem;
    color: var(--text-color);
    margin-bottom: 1.2rem;
  }
  
  .showcase-description {
    color: var(--text-light);
    line-height: 1.8;
    margin-bottom: 2rem;
  }
  
  .showcase-gallery {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .gallery-images {
    display: grid;
    gap: 1.5rem;
    width: 100%;
  }
  
  .gallery-images:has(> :only-child) {
    grid-template-columns: 1fr;
  }
  
  .gallery-images:has(> :nth-child(2)) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .gallery-images:has(> :nth-child(3)) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .gallery-item.wide-image {
    grid-column: 1 / -1;
  }
  
  .gallery-item img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .gallery-videos {
    width: 100%;
  }
  
  .video-item {
    width: 100%;
    margin-bottom: 1.5rem;
  }
  
  .showcase-video {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .image-caption, .video-caption {
    padding: 0.8rem;
    color: var(--text-light);
    font-size: 0.9rem;
    text-align: center;
    background: var(--secondary-color);
    border-radius: 0 0 8px 8px;
  }
  
  .tech-details {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .tech-details h5 {
    font-size: 1.2rem;
    color: var(--text-color);
    margin-bottom: 1rem;
  }
  
  .tech-details ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: flex-start;
  }
  
  .tech-point {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-light);
    background: var(--secondary-color);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: transform 0.2s ease;
  }
  
  .tech-point:hover {
    transform: translateY(-2px);
  }
  
  .tech-point i {
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    .gallery-images {
      grid-template-columns: 1fr !important;
    }
  
    .modeling-showcase {
      padding: 1rem;
    }
  
    .tech-details ul {
      justify-content: center;
    }
    
    .tech-point {
      padding: 0.4rem 0.8rem;
      font-size: 0.9rem;
    }
  }
  </style>