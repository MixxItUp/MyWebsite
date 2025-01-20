<template>
  <div class="photography-showcase">
    <!-- 轮播展示区 -->
    <div class="carousel-container">
      <div class="carousel" ref="carousel">
        <div v-for="(image, index) in images" 
             :key="index" 
             class="carousel-slide"
             :class="{ active: currentSlide === index }">
          <img :src="image" :alt="`摄影作品 ${index + 1}`">
        </div>
      </div>
      <div class="carousel-indicators">
        <span v-for="(_, index) in images" 
              :key="index"
              :class="{ active: currentSlide === index }"
              @click="setSlide(index)">
        </span>
      </div>
    </div>

    <!-- 精选照片瀑布流 -->
    <div class="featured-photos">
      <h3>精选作品</h3>
      <div class="masonry-container" ref="masonryContainer">
        <div v-for="(image, index) in displayedImages" 
             :key="index"
             class="masonry-item"
             :style="{ height: image.height }">
          <img :src="image.src" :alt="`精选作品 ${index + 1}`"
               @load="onImageLoad($event, index)">
        </div>
      </div>
      
      <!-- 展示更多按钮 -->
      <div class="show-more-container" v-if="hasMoreImages">
        <div class="fade-overlay"></div>
        <button class="show-more-btn" @click="showMore">
          展示更多作品
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

// 轮播相关
const currentSlide = ref(0);
const carousel = ref(null);
const autoplayInterval = ref(null);

// 瀑布流相关
const initialDisplayCount = 4; // 初始显示数量
const displayedCount = ref(initialDisplayCount);
const masonryContainer = ref(null);
const displayedImages = ref([]);
const hasMoreImages = ref(true);

// 自动轮播
const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    nextSlide();
  }, 2000);
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.images.length;
};

const setSlide = (index) => {
  currentSlide.value = index;
  stopAutoplay();
  startAutoplay();
};

// 图片加载完成后设置高度
const onImageLoad = (event, index) => {
  const img = event.target;
  const height = (img.naturalHeight / img.naturalWidth) * img.width;
  displayedImages.value[index] = {
    ...displayedImages.value[index],
    height: `${height}px`
  };
};

// 展示更多
const showMore = () => {
  const newCount = displayedCount.value + 8;
  displayedCount.value = Math.min(newCount, props.images.length);
  updateDisplayedImages();
  
  if (displayedCount.value >= props.images.length) {
    hasMoreImages.value = false;
  }
};

// 更新显示的图片
const updateDisplayedImages = () => {
  displayedImages.value = props.images
    .slice(0, displayedCount.value)
    .map(src => ({ src, height: 'auto' }));
};

onMounted(() => {
  startAutoplay();
  updateDisplayedImages();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
.photography-showcase {
  width: 100%;
  margin: 0 auto;
}

/* 轮播样式 */
.carousel-container {
  position: relative;
  width: 100%;
  height: 400px;
  max-width: 800px;
  overflow: hidden;
  border-radius: 12px;
  margin: 0 auto 3rem;
}

.carousel {
  width: 100%;
  height: 100%;
  position: relative;
}

.carousel-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.carousel-indicators span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-indicators span.active {
  background: white;
  transform: scale(1.2);
}

/* 精选照片瀑布流样式 */
.featured-photos {
  margin-top: 3rem;
  position: relative;
}

.featured-photos h3 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.masonry-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 2rem;
}

.masonry-item {
  break-inside: avoid;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.masonry-item:hover {
  transform: translateY(-5px);
}

.masonry-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* 展示更多按钮样式 */
.show-more-container {
  position: relative;
  text-align: center;
  padding-top: 4rem;
  margin-top: -4rem;
}

.fade-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  background: linear-gradient(to bottom, transparent, white);
  pointer-events: none;
}

.show-more-btn {
  position: relative;
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.show-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.show-more-btn i {
  font-size: 0.8rem;
}

@media (min-width: 1200px) {
  .masonry-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .carousel-container {
    height: 300px;
  }

  .masonry-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    height: 250px;
  }

  .masonry-container {
    grid-template-columns: 1fr;
  }
}
</style> 