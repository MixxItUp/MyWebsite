<template>
  <main class="resume">
    <section class="resume-header">
      <h1>个人简历</h1>
    </section>

    <section class="resume-content">
      <div class="resume-section">
        <h2>教育背景</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-header">
              <span class="timeline-period">2022 - 至今</span>
              <span class="timeline-title">西南大学</span>
            </div>
            <div class="timeline-content">
              <p>软件工程专业</p>
              <p>主修课程：。。。</p>
            </div>
          </div>
        </div>
      </div>

      <div class="resume-section">
        <h2>专业技能</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>前端开发</h3>
            <ul>
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>Vue.js</li>
              <li>响应式设计, CSS动画</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>设计能力</h3>
            <ul>
              <li>UI 设计</li>
              <li>3D 建模（Blender）</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="resume-section">
        <h2>获奖经历</h2>
        <ul class="awards-list">
          <li>
            <span class="award-date">2023</span>
            <span class="award-name">国家奖学金</span>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style scoped>
.resume {
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.resume-header {
  text-align: center;
  margin-bottom: 3rem;
}

.resume-header h1 {
  font-size: 2.5rem;
  color: var(--text-color);
}

.resume-section {
  margin-bottom: 3rem;
}

.resume-section h2 {
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--accent-color);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.timeline-item {
  padding-left: 1.5rem;
  border-left: 2px solid var(--accent-color);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.timeline-period {
  color: var(--accent-color);
  font-weight: 500;
}

.timeline-title {
  font-weight: 600;
  color: var(--text-color);
}

.timeline-content {
  color: var(--text-light);
  line-height: 1.6;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category h3 {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  color: var(--text-light);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.skill-category li::before {
  content: '•';
  color: var(--accent-color);
  position: absolute;
  left: 0;
}

.awards-list {
  list-style: none;
  padding: 0;
}

.awards-list li {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.award-date {
  color: var(--accent-color);
  font-weight: 500;
  min-width: 60px;
}

.award-name {
  color: var(--text-color);
}

@media (max-width: 768px) {
  .timeline-header {
    flex-direction: column;
    gap: 0.25rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style> 