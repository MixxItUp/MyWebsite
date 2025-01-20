<template>
  <main class="about">
    <!-- 个人简介部分 -->
    <section class="about-section">
      <h2 class="section-title">关于我</h2>
      <div class="about-content">
        <div class="profile-info">
          <img src="../assets/doge.jpg" alt="Yu Lin" class="profile-image">
          <div class="profile-text">
            <p>你好！我是林煜，一名充满热情的前端开发者和设计爱好者。</p>
            <p>目前就读于西南大学，专注于Web开发和用户界面设计。我热衷于将创意转化为直观的用户体验。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 内容区域 -->
    <div class="content-wrapper">
      <!-- 侧边栏 -->
    <aside class="sidebar">
      <nav class="nav-menu">
        <div v-for="item in menuItems" 
             :key="item.id"
             class="nav-item-container"
        >
          <button 
            :class="['nav-item', { active: currentSection === item.id }]"
            @click="toggleSection(item.id)"
          >
            {{ item.title }}
            <!-- <i :class="['fas', currentSection === item.id ? 'fa-chevron-down' : 'fa-chevron-right']"></i> -->
          </button>
          
          <!-- 目录部分 -->
          <transition name="slide">
            <ul v-if="currentSection === item.id" class="section-catalog">
              <!-- 项目集目录 -->
              <template v-if="item.id === 'projects'">
                <li v-for="(project, key) in projectData" :key="key">
                  <a href="#" @click.prevent="scrollToContent(`project-${key}`)">
                    {{ project.title }}
                  </a>
                </li>
              </template>
              
              <!-- UI作品集目录 -->
              <template v-if="item.id === 'ui-works'">
                <li v-for="(showcase, key) in showcaseData" :key="key">
                  <a href="#" @click.prevent="scrollToContent(`ui-${key}`)">
                    {{ showcase.title }}
                  </a>
                </li>
              </template>
              
              <!-- 建模作品集目录 -->
              <template v-if="item.id === '3d-works'">
                <!-- 建模作品的目录项 -->
                <li>
                  <a href="#" @click.prevent="scrollToContent('modeling-basic')">
                    白模搭建基础
                  </a>
                </li>
                <li>
                  <a href="#" @click.prevent="scrollToContent('modeling-texture')">
                    材质与色彩表现
                  </a>
                </li>
                <li>
                  <a href="#" @click.prevent="scrollToContent('modeling-3to2')">
                    三渲二技法探索
                  </a>
                </li>
                <li>
                  <a href="#" @click.prevent="scrollToContent('modeling-light')">
                    灯光与氛围
                  </a>
                </li>
                <li>
                  <a href="#" @click.prevent="scrollToContent('modeling-scene')">
                    场景综合制作
                  </a>
                </li>
              </template>
              
              <!-- 兴趣特长目录 -->
              <template v-if="item.id === 'interests'">
                <!-- 兴趣特长的目录项 -->
              </template>
            </ul>
          </transition>
        </div>
      </nav>
    </aside>

      <!-- 主要内容区域 -->
      <section class="main-content">
        <!-- 项目集 -->
        <div v-if="currentSection === 'projects'" class="projects-content">
          <h3>项目集</h3>
          
          <!-- 项目目录 -->
          <div class="projects-catalog">
            <ul>
              <li v-for="(project, key) in projectData" :key="key">
                <a 
                  href="#" 
                  class="catalog-link"
                  @click="(e) => scrollToProject(e, `project-${key}`)"
                >
                  <span class="project-title">{{ project.title }}</span>
                  <div class="project-tags">
                    <span 
                      v-for="(tech, index) in project.catalogTags" 
                      :key="index" 
                      class="tech-tag"
                    >
                      <i :class="tech.icon" :style="{ color: tech.color }"></i>
                      {{ tech.text }}
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <!-- 项目列表 -->
          <div class="projects-list">
            <div v-for="(project, key) in projectData" 
                 :key="key" 
                 :id="`project-${key}`">
              <ProjectShowcase v-bind="project"/>
            </div>
          </div>
        </div>

        <!-- 回到顶部按钮 -->
        <button 
          class="back-to-top" 
          :class="{ 'show': showBackToTop }"
          @click="scrollToTop"
        >
          <i class="fas fa-chevron-up"></i>
        </button>

        <!-- UI作品集 -->
        <div v-if="currentSection === 'ui-works'" class="ui-works-content">
          <h3>UI作品集</h3>
          
          <!-- 视差滚动展示 -->
          <div id="ui-parallax">
            <WorkShowcase v-bind="showcaseData.parallax" />
          </div>
          <!-- 动画效果展示 -->
          <div id="ui-animation">
            <WorkShowcase v-bind="showcaseData.animation" :isReversed="true" />
          </div>
          <!-- 加载动画展示 -->
          <div id="ui-loading">
            <WorkShowcase v-bind="showcaseData.loading" />
          </div>
          <!-- 图片效果展示 -->
          <div id="ui-image">
            <WorkShowcase v-bind="showcaseData.image" :isReversed="true" />
          </div>
          <!-- 按钮效果展示 -->
          <div id="ui-button">
            <WorkShowcase v-bind="showcaseData.button" />
          </div>
          <!-- 图形效果展示 -->
          <div id="ui-figure">
            <WorkShowcase v-bind="showcaseData.figure" :isReversed="true" />
          </div>
          
        </div>

        <!-- 建模作品集 -->
        <div v-if="currentSection === '3d-works'" class="modeling-works-content">
          <h3>建模作品集</h3>
          <div class="modeling-works-list">
            <!-- 白模搭建 -->
            <ModelingShowcase
              id="modeling-basic"
              title="白模搭建"
              description="使用Blender的基础几何体和修改器，通过布尔运算、细分曲面等技术，完成物体的基础结构搭建。注重拓扑结构的合理性，为后续的材质应用和渲染打下基础。"
              :images="[
                { 
                  src: 'src/assets/images/blender/model/bathroom.png', 
                  alt: '基础几何体建模', 
                  caption: '使用基础几何体进行布尔运算建模',
                  class: 'wide-image'
                },
                { 
                  src: 'src/assets/images/blender/model/room.png', 
                  alt: '色彩应用', 
                  caption: '为白模添加色彩'
                }
              ]"
              :techPoints="[
                { icon: 'fas fa-cube', text: '基础几何体操作', color: '#4A90E2' },
                { icon: 'fas fa-vector-square', text: '布尔运算应用', color: '#50C878' },
                { icon: 'fas fa-th', text: '拓扑结构优化', color: '#FF6B6B' },
                { icon: 'fas fa-sliders-h', text: '修改器使用技巧', color: '#FFB366' }
              ]"
            />
      
            <!-- 材质和色彩 -->
            <ModelingShowcase
              id="modeling-texture"
              title="材质与色彩表现"
              description="探索Blender的材质系统，包括PBR材质的制作、程序化纹理的生成，以及材质节点的综合运用。通过不同的材质搭配，赋予模型真实的视觉效果。"
              :images="[
                { src: 'src/assets/images/blender/texture/house.png', alt: '建筑材质展示', caption: '纹理材质效果' },
                { src: 'src/assets/images/blender/texture/ing.png', alt: '建筑原生状态展示', caption: '建筑原生状态' }
              ]"
              :techPoints="[
                { icon: 'fas fa-palette', text: 'PBR材质制作', color: '#FF6B6B' },
                { icon: 'fas fa-layer-group', text: '材质节点系统', color: '#4A90E2' },
                { icon: 'fas fa-image', text: '贴图UV展开', color: '#50C878' },
                { icon: 'fas fa-magic', text: '程序化纹理', color: '#FFB366' }
              ]"
            />
  
            <!-- 三渲二 -->
            <ModelingShowcase
              id="modeling-3to2"
              title="三渲二技法探索"
              description="运用3D建模技术来实现2D艺术效果，通过特殊的材质设置和渲染技巧，创造出独特的线条感和艺术风格。这种技法很好地融合了3D建模的精确性和2D艺术的表现力。"
              :videos="[
                { src: 'src/assets/images/blender/3to2/burger.mp4', poster: 'src/assets/images/blender/3to2/burger_poster.png', caption: '汉堡三渲二效果展示' }
              ]"
              :techPoints="[
                { icon: 'fas fa-pen', text: '线条风格设计', color: '#4A90E2' },
                { icon: 'fas fa-adjust', text: '卡通渲染', color: '#50C878' },
                { icon: 'fas fa-draw-polygon', text: '轮廓线处理', color: '#FF6B6B' },
                { icon: 'fas fa-lightbulb', text: '特殊光照设置', color: '#FFB366' }
              ]"
            />
            <!-- 添加灯光模块 -->
            <ModelingShowcase
              id="modeling-light"
              title="灯光与氛围"
              description="探索Blender中的灯光设置和氛围营造技术。通过不同类型的光源、强度和颜色的调节，以及后期渲染参数的优化，创造出富有情感和故事性的场景氛围。重点关注光影的层次感和空间感的塑造。"
              :images="[
                { src: 'src/assets/images/blender/girl/1.png', alt: '人物', caption: '仅打主光源的人物白模' },
                { src: 'src/assets/images/blender/girl/2.png', alt: '氛围光效果', caption: '体积光与环境光的应用' },
                { src: 'src/assets/images/blender/girl/3.png', alt: '后期渲染', caption: '灯光优化效果' }
              ]"
              :techPoints="[
                { icon: 'fas fa-lightbulb', text: '多光源布置与调节', color: '#FFB366' },
                { icon: 'fas fa-sun', text: '体积光与环境光', color: '#FF9F1C' },
                { icon: 'fas fa-sliders-h', text: '光照参数优化', color: '#4A90E2' },
                { icon: 'fas fa-image', text: '后期渲染处理', color: '#50C878' }
              ]"
            />
            
        <!-- 完整场景 -->
            <ModelingShowcase
              id="modeling-scene"
              title="场景综合制作"
              description="整合建模、材质、灯光等各个环节，打造完整的3D场景。注重场景的整体氛围营造，包括环境光照的设置、后期特效的添加，以及构图的艺术处理。"
              :images="[
                { src: 'src/assets/images/blender/spongebob/withoutColour.png', alt: '白模搭建', caption: '模型效果' },
                { src: 'src/assets/images/blender/spongebob/1.png', alt: '场景整体展示', caption: '完整场景渲染效果' },
                { src: 'src/assets/images/blender/spongebob/2.png', alt: '灯光设置', caption: '灯光效果展示' }
              ]"
              :techPoints="[
                { icon: 'fas fa-sun', text: '灯光布置技巧', color: '#FFB366' },
                { icon: 'fas fa-camera', text: '镜头构图', color: '#4A90E2' },
                { icon: 'fas fa-film', text: '后期合成', color: '#50C878' },
                { icon: 'fas fa-cloud', text: '环境氛围营造', color: '#FF6B6B' }
              ]"
            />

          </div>
        </div>

        <!-- 兴趣特长 -->
        <div v-if="currentSection === 'interests'" class="interests-content">
          <h3>兴趣特长</h3>
          <div class="interests-list">
            <!-- 摄影展示部分 -->
            <div class="interest-section">
              <PhotographyShowcase :images="photographyImages" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import WorkShowcase from '../components/WorkShowcase.vue';
import ProjectShowcase from '../components/ProjectShowcase.vue';
import ModelingShowcase from '../components/ModelingShowcase.vue';
import PhotographyShowcase from '../components/PhotographyShowcase.vue';
  
const menuItems = [
  { id: 'projects', title: '项目集' },
  { id: 'ui-works', title: 'UI作品集' },
  { id: '3d-works', title: '建模作品集' },
  { id: 'interests', title: '兴趣特长' }
];

const currentSection = ref('projects'); // 默认显示项目集

// 作品展示数据
const showcaseData = {
  parallax: {
    title: '视差滚动设计',
    description: '让页面上的不同元素以不同的速度移动，创造出独特的视觉深度感和沉浸式体验。',
    videos: ['src/assets/video/RollingPage.mp4'],
    techStack: [
      { icon: 'fab fa-html5', text: 'HTML5 - 语义化标签结构', color: '#E44D26' },  // HTML5 标准色
      { icon: 'fab fa-css3-alt', text: 'CSS3 - transform 和 perspective 实现视差效果', color: '#264DE4' },  // CSS3 标准色
      { icon: 'fab fa-js', text: 'JavaScript - 监听滚动事件，动态计算位移', color: '#F7DF1E' }  // JavaScript 标准色
    ]
  },
  animation: {
    title: '动画效果',
    description: '通过CSS动画和过渡效果，为界面元素注入生命力。结合关键帧动画和状态转换，打造流畅的交互体验。',
    videos: [
      'src/assets/video/animation/font.mp4',
      'src/assets/video/animation/bubble.mp4',
      'src/assets/video/animation/water.mp4'
    ],
    techStack: [
      { icon: 'fab fa-css3-alt', text: 'CSS Animation - 关键帧动画', color: '#264DE4' },
      { icon: 'fab fa-css3-alt', text: 'CSS Transition - 状态过渡', color: '#2965F1' },  // CSS3 深色调
      { icon: 'fab fa-js', text: 'JavaScript - 动画控制', color: '#F7DF1E' }
    ]
  },
  loading: {
    title: '加载动画',
    description: '精心设计的加载动画不仅能提升用户等待体验，还能体现产品的品牌调性。通过CSS动画实现流畅的加载效果，让等待变得愉悦。',
    videos: [
      'src/assets/video/loading/load1.mp4',
      'src/assets/video/loading/load2.mp4'
    ],
    techStack: [
      { icon: 'fab fa-css3-alt', text: '@keyframes - 关键帧动画', color: '#264DE4' },
      { icon: 'fas fa-clock', text: 'Animation-timing - 动画节奏控制', color: '#4A90E2' }  // 时钟使用蓝色
    ]
  },
  image: {
    title: '图片特效设计',
    description: '探索现代网页设计中的图片交互效果，通过CSS滤镜、变换和JavaScript实现丰富的视觉体验。结合悬停效果、过渡动画，打造富有创意的图片展示方式。',
    videos: [
      'src/assets/video/image/img1.mp4',
      'src/assets/video/image/img2.mp4'
    ],
    techStack: [
      { icon: 'fab fa-css3-alt', text: 'CSS Filter - 图片滤镜效果', color: '#264DE4' },
      { icon: 'fab fa-css3-alt', text: 'CSS Transform - 3D变换效果', color: '#2965F1' },
      { icon: 'fab fa-js', text: 'JavaScript - 动态图片处理', color: '#F7DF1E' }
    ]
  },
  
  button: {
    title: '按钮交互设计',
    description: '通过精心设计的按钮效果提升用户交互体验。结合渐变色、微动效、粒子效果等现代设计元素，让简单的点击变得生动有趣。每个按钮都经过精心设计，确保视觉效果与功能性的完美平衡。',
    videos: [
      'src/assets/video/hover/btn/hover2.mp4',
      'src/assets/video/hover/btn/hover3.mp4',
      'src/assets/video/hover/btn/hover4.mp4'
    ],
    techStack: [
      { icon: 'fab fa-css3-alt', text: 'CSS Gradient - 渐变效果', color: '#264DE4' },
      { icon: 'fab fa-css3-alt', text: 'CSS Animation - 悬停动画', color: '#2965F1' },
      { icon: 'fab fa-js', text: 'JavaScript - 交互控制', color: '#F7DF1E' },
      { icon: 'fa-solid fa-brush', text: 'SVG - 矢量图形效果', color: '#FF6B6B' }  // 画笔使用红色
    ]
  },
  figure: {
    title: '几何图形动效',
    description: '探索CSS和JavaScript在几何图形动画领域的潜力。通过组合基础图形、变换效果和动画，创造出富有创意的视觉效果。每个动画都经过性能优化，确保流畅的用户体验。',
    videos: [
      'src/assets/video/hover/box/hover1.mp4',
      'src/assets/video/hover/box/hover5.mp4',
      'src/assets/video/hover/box/hover6.mp4'
    ],
    techStack: [
      { icon: 'fab fa-css3-alt', text: 'CSS Shapes - 几何图形绘制', color: '#264DE4' },
      { icon: 'fab fa-css3-alt', text: 'CSS Transform - 空间变换', color: '#2965F1' },
      { icon: 'fab fa-js', text: 'JavaScript - 动画控制', color: '#F7DF1E' },
      { icon: 'fas fa-paint-brush', text: 'Canvas - 复杂图形绘制', color: '#42B883' }  // Canvas 使用绿色
    ]
  },
};
const projectData = {
  backpack: {
    title: '背包问题求解器',
    description: '一个基于Vue的背包问题可视化求解工具，实现了动态规划和分支限界两种算法的求解过程展示。通过直观的界面交互和数据结构可视化，帮助用户理解算法的运行过程。',
    previewVideo: 'src/assets/video/Backpack_Project_display.mp4',
    features: [
      '商品列表展示与选择：通过checkbox实现商品的多选功能',
      '预算输入：支持用户输入预算金额',
      '动态规划算法可视化：使用表格展示二维数组的计算过程',
      '分支限界算法可视化：树形结构展示节点数据和搜索路径',
      '结果对比：同时展示两种算法的求解结果',
      'JSON数据结构展示：展示算法过程中的数据结构变化'
    ],
    techStack: [
      { icon: 'fab fa-vuejs', text: 'Vue.js' },
      { icon: 'fab fa-js', text: 'JavaScript' },
      { icon: 'fab fa-html5', text: 'HTML5' },
      { icon: 'fab fa-css3-alt', text: 'CSS3' }
    ],
    previewSteps: [
      { title: '商品选择界面', description: '在商品列表中，用户可以通过勾选checkbox来选择想要购买的商品。每个商品都展示了其价格和价值信息，帮助用户做出选择。', image: 'src/assets/images/backpack/step1.png' },
      { title: '预算输入', description: '用户可以在预算输入框中设置自己的预算金额。系统会根据输入的预算来计算最优购物方案。', image: 'src/assets/images/backpack/step2.png' },
      { title: '动态规划算法可视化', description: '通过表格形式直观展示动态规划算法的计算过程。每个单元格显示在当前预算下能获得的最大价值，帮助用户理解算法的执行过程。', image: 'src/assets/images/backpack/step3.png' },
      { title: '分支限界算法可视化', description: '以树形结构展示分支限界法的搜索过程。每个节点包含当前状态的信息，通过节点的连接展示算法的搜索路径。', image: 'src/assets/images/backpack/step4.png' }
    ],
    catalogTags: [
      { icon: 'fab fa-vuejs', text: 'Vue.js', color: '#42B883' },
      { icon: 'fab fa-js', text: 'JavaScript', color: '#F7DF1E' },
      { icon: 'fas fa-table', text: '算法可视化', color: '#64A6BD' }
    ]
  },
  wallpaper: {
    title: '动态壁纸应用',
    description: '基于uni-app开发的跨平台壁纸应用，采用Vue 3 Composition API构建，实现了完整的壁纸浏览、下载和管理功能。项目采用模块化设计，具有良好的用户交互体验和视觉效果。',
    features: [
      '首页功能：轮播图展示精选壁纸，每日推荐横向滚动，专题精选分类展示',
      '分类浏览：网格布局展示不同主题分类，支持无限滚动加载',
      '壁纸预览：支持左右滑动查看，显示壁纸详细信息，用户评分和下载功能',
      '个人中心：用户信息管理，下载记录，评分记录，订阅更新等功能',
      '本地存储：使用uni.setStorageSync实现数据持久化',
      '自适应布局：响应式设计，支持多种设备尺寸'
    ],
    techStack: [
      { icon: 'fab fa-vuejs', text: 'Vue 3 Composition API' },
      { icon: 'fab fa-js', text: 'uni-app 跨平台框架' },
      { icon: 'fab fa-sass', text: 'SCSS 样式管理' },
      { icon: 'fas fa-cube', text: 'uni-ui 组件库' },
      { icon: 'fas fa-mobile-alt', text: '移动端适配' }
    ],
    previewSteps: [
      {
        title: '首页展示',
        description: '首页采用多层次布局，顶部是精选壁纸轮播图，下方是每日推荐的横向滚动列表，底部展示专题精选分类。支持下拉刷新更新内容。',
        image: 'src/assets/images/wallpaper/main.png'  // 图片路径待补充
      },
      {
        title: '分类浏览',
        description: '分类页面使用网格布局展示不同主题，每个分类配有精美封面和标题。点击分类进入详细列表，采用三列网格布局，支持无限滚动加载更多壁纸。',
        image: 'src/assets/images/wallpaper/category.png'  // 图片路径待补充
      },
      {
        title: '壁纸预览',
        description: '预览页面提供完整的壁纸展示，支持左右滑动切换。顶部显示时间日期，底部展示壁纸详细信息，包括ID、发布者、评分等。用户可以进行评分和下载操作。',
        image: 'src/assets/images/wallpaper/preview.png'  // 图片路径待补充
      },
      {
        title: '个人中心',
        description: '个人中心整合了用户相关功能，包括个人信息展示、下载记录、评分记录等。同时提供客服联系、订阅更新和常见问题等服务功能。采用卡片式设计，布局清晰。',
        image: 'src/assets/images/wallpaper/profile.png'  // 图片路径待补充
      }
    ],
    catalogTags: [
      { icon: 'fab fa-vuejs', text: 'uni-app', color: '#42B883' },
      { icon: 'fas fa-cube', text: 'uni-ui', color: '#2B9939' },
      { icon: 'fas fa-server', text: 'API', color: '#FF6B6B' },
      { icon: 'fas fa-mobile-alt', text: '移动端', color: '#4A90E2' }
    ]
  }
};

// 控制回到顶部按钮的显示
const showBackToTop = ref(false);

// 监听滚动事件
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300;
};

// 修改回到顶部函数，改为滚动到main-content顶部
const scrollToTop = () => {
  const mainContent = document.querySelector('.main-content');
  const navbarHeight = 80; // 导航栏高度
  const offset = mainContent.getBoundingClientRect().top + window.scrollY - navbarHeight - 20; // 额外留出20px的空间
  
  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  });
};

// 添加目录跳转函数
const scrollToProject = (event, projectId) => {
  event.preventDefault();
  const element = document.getElementById(projectId);
  const navbarHeight = 80; // 导航栏高度
  const offset = element.getBoundingClientRect().top + window.scrollY - navbarHeight - 20; // 额外留出20px的空间
  
  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  });
};
// 滚动到指定内容的函数
const scrollToContent = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const navbarHeight = 80; // 导航栏高度
    const offset = element.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }
};

// 切换部分的函数
const toggleSection = (sectionId) => {
  if (currentSection.value === sectionId) {
    currentSection.value = null; // 如果点击当前展开的部分，则收起
  } else {
    currentSection.value = sectionId; // 否则展开新点击的部分
  }
};

// 生命周期钩子
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// 添加摄影图片数据
const photographyImages = [
  'src/assets/images/filming/2.png',
  'src/assets/images/filming/3.png',
  'src/assets/images/filming/5.png',
  'src/assets/images/filming/6.png',
  'src/assets/images/filming/7.png',
  'src/assets/images/filming/8.png',
  'src/assets/images/filming/10.png',
  'src/assets/images/filming/11.png',
  'src/assets/images/filming/DSC_0291.JPG',
  'src/assets/images/filming/DSC_0306.JPG',
  'src/assets/images/filming/DSC_0377.JPG',
  'src/assets/images/filming/DSC_0384.JPG',
  'src/assets/images/filming/DSC_0878.JPG',
  'src/assets/images/filming/DSC_0971.JPG',
  'src/assets/images/filming/DSC_0999.JPG',
  'src/assets/images/filming/DSC_1040.JPG',
  'src/assets/images/filming/DSC_1120.JPG',
  'src/assets/images/filming/DSC_1151.JPG',
  'src/assets/images/filming/DSC_1154.JPG',
  'src/assets/images/filming/DSC_1363.JPG',
  'src/assets/images/filming/DSC_1427.JPG',
  'src/assets/images/filming/DSC_1488.JPG',
];
</script>

<style scoped>
.about {
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-align: center;
}

/* 个人简介样式 */
.about-section {
  margin-bottom: 8rem;
}

.profile-info {
  display: flex;
  gap: 4rem;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.profile-text {
  flex: 1;
  line-height: 2;
}

.profile-text p {
  margin-bottom: 1rem;
  color: var(--text-color);
}

/* 内容区域样式 */
.content-wrapper {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 4rem;
  margin-top: 2rem;
}

/* 侧边栏样式 */
.sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
  
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-item {
  padding: 1.0rem 0rem;
  font-size: 1.1rem;
  border-radius: 12px;
}

.nav-item:hover {
  background: var(--secondary-color);
}

.nav-item.active {
  background: var(--accent-color);
  color: white;
}

/* 主要内容区域样式 */
.main-content {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  min-height: 500px;
}

.main-content h3 {
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 2rem;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .about {
    padding: 6rem 2rem 2rem;
  }
  
  .content-wrapper {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .profile-info {
    gap: 3rem;
    padding: 1rem;
  }

  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .main-content {
    padding: 2rem;
  }

  .nav-menu {
    flex-direction: row;
    overflow-x: auto;
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .nav-item {
    padding: 1rem 1.5rem;
    white-space: nowrap;
  }
}

/* 添加新的内容区域样式 */
.projects-list,
.ui-works-list,
.modeling-works-list,
.interests-list {
  display: grid;
  gap: 2rem;
}

/* 项目集样式 */
.projects-list {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .projects-list {
    grid-template-columns: 1fr;
  }
}

/* UI作品集样式 */
.ui-works-list {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* 建模作品集样式 */
.modeling-works-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1000px; /* 控制最大宽度，保持良好的阅读体验 */
  margin: 0 auto;
}

/* 兴趣特长样式 */
.interests-list {
  grid-template-columns: 1fr;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .projects-list,
  .ui-works-list,
  .modeling-works-list {
    grid-template-columns: 1fr;
  }
}

.ui-works-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;
  padding: 2rem;
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

.tech-stack .fa-html5 { color: #E44D26; }
.tech-stack .fa-css3-alt { color: #264DE4; }
.tech-stack .fa-js { color: #F7DF1E; }
.tech-stack .fa-vuejs { color: #42B883; }

.design-features {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0,0,0,0.1);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-color);
}

.feature-item i {
  color: var(--accent-color);
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .showcase-description {
    padding: 1.5rem;
  }

  .tech-stack ul {
    gap: 0.5rem;
  }

  .design-features {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

/* 响应式设计优化 */
@media (max-width: 1024px) {
  .ui-works-showcase {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem;
  }
}

/* 修改视频容器样式 */
.videos-container {
  display: flex;
  flex-direction: column;  /* 改为竖向排列 */
  gap: 2rem;  /* 增加视频之间的间距 */
  width: 100%;
}

.videos-container .video-container {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.videos-container .showcase-video {
  width: 100%;
  display: block;
  aspect-ratio: 16/9;
  object-fit: cover;
}

/* 修改动画区块的布局 */
.animation-section {
  margin-top: 4rem;
  padding-top: 4rem;
  border-top: 1px solid rgba(0,0,0,0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;  /* 保持左右布局 */
  align-items: start;  /* 顶部对齐，允许视频部分超出文字高度 */
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .animation-section {
    grid-template-columns: 1fr;
    margin-top: 2rem;
    padding-top: 2rem;
  }

  .videos-container {
    margin-top: 2rem;
    gap: 1rem;  /* 在小屏幕上减小间距 */
  }
}

/* 加载动画区块的特殊样式 */
.loading-section {
  margin-top: 4rem;
  padding-top: 4rem;
  border-top: 1px solid rgba(0,0,0,0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;  /* 视频在左，文字在右 */
  align-items: start;
}

/* 确保与其他部分样式保持一致 */
.loading-section .videos-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .loading-section {
    grid-template-columns: 1fr;
    margin-top: 2rem;
    padding-top: 2rem;
  }

  .loading-section .videos-container {
    margin-bottom: 2rem;
  }
}

/* 项目目录样式 */
.projects-catalog {
  background: var(--secondary-color);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.projects-catalog h4 {
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.projects-catalog ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.catalog-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-color);
  background: white;
  transition: all 0.3s ease;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.tech-tag {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  background: var(--secondary-color);
  color: var(--text-light);
}

.tech-tag i {
  font-size: 0.9rem;
}

.catalog-link:hover {
  transform: translateX(5px);
  background: var(--accent-color);
  color: white;
}

.catalog-link:hover .tech-tag {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.project-title {
  font-weight: 500;
  font-size: 1.1rem;
}

.project-desc {
  color: var(--text-light);
  font-size: 0.9rem;
  max-width: 50%;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.catalog-link:hover .project-desc {
  color: rgba(255, 255, 255, 0.8);
}

/* 修改项目容器样式，添加滚动偏移量 */
.projects-list > div {
  scroll-margin-top: 100px; /* 导航栏高度 + 额外空间 */
}

/* 修改回到顶部按钮位置，确保不会被其他元素遮挡 */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem; /* 改为右下角，避免与侧边栏冲突 */
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--accent-color);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.back-to-top.show {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .projects-catalog {
    padding: 1rem;
  }

  .catalog-link {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .project-desc {
    max-width: 100%;
    text-align: left;
  }

  .back-to-top {
    bottom: 1rem;
    right: 1rem;
    width: 35px;
    height: 35px;
  }

  .project-tags {
    justify-content: flex-start;
  }
}
.nav-item-container {
  display: flex;
  flex-direction: column;
}

.nav-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--text-color);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.nav-item i {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.nav-item.active i {
  transform: rotate(0deg);
}

.section-catalog {
  list-style: none;
  padding: 0.5rem 0 0.5rem 1.5rem;
  margin: 0;
  border-left: 2px solid var(--accent-color);
  margin-left: 1.5rem;
}

.section-catalog li {
  margin: 0.5rem 0;
}

.section-catalog a {
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: block;
  padding: 0.3rem 0;
}

.section-catalog a:hover {
  color: var(--accent-color);
  transform: translateX(5px);
}

/* 滑动动画 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 500px; /* 根据实际内容调整 */
  opacity: 1;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .nav-menu {
    flex-direction: column;
    overflow-y: auto;
    padding: 0.5rem;
  }

  .nav-item {
    padding: 0.8rem 1rem;
  }

  .section-catalog {
    margin-left: 1rem;
    padding-left: 1rem;
  }
}

.interest-section {
  margin-bottom: 4rem;
}

.interests-content {
  max-width: 1200px;
  margin: 0 auto;
}
</style> 