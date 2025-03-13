<template>
  <main class="resume">
    <section class="resume-header">
      <!-- <h1>个人简历</h1> -->
      <div class="personal-info">
        <h2>林煜</h2>
        <p>求职意向：前端工程师</p>
        <p>年龄：20 | 电话：177-5776-0085 | 邮箱：1101415804@qq.com</p>
      </div>
    </section>

    <section class="resume-content">
      <div class="resume-section">
        <h2>教育背景</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-header">
              <span class="timeline-period">2022.09 - 至今</span>
              <span class="timeline-title">西南大学</span>
            </div>
            <div class="timeline-content">
              <p>软件工程·本科 | 成绩排名：5%~20%</p>
              <p class="courses">主修课程：</p>
              <ul class="course-list">
                <li>数据结构与算法(86)</li>
                <li>高等数学(95)</li>
                <li>前端框架技术实践(93)</li>
                <li>数据库原理及应用(90)</li>
                <li>软件需求工程(98)</li>
                <li>系统分析与设计(90)</li>
                <li>企业级开源框架(91)</li>
                <li>云服务应用开发与迁移(88)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      <div class="resume-section">
        <h2>获奖经历</h2>
        <ul class="awards-list">
          <li>
            <span class="award-date">2024-11</span>
            <span class="award-name">校二等奖学金</span>
          </li>
          <li>
            <span class="award-date">2023-12</span>
            <span class="award-name">国家奖学金</span>
          </li>
          <li>
            <span class="award-date">2024-10</span>
            <span class="award-name">西南大学三好学生</span>
          </li>
          <li>
            <span class="award-date">2024-04</span>
            <span class="award-name">优秀共青团员</span>
          </li>
          <li>
            <span class="award-date">2023-10</span>
            <span class="award-name">西南大学学习优秀奖</span>
          </li>
          <li>
            <span class="award-date">2023-06</span>
            <span class="award-name">宣传部优秀干事</span>
          </li>
        </ul>
      </div>

      <div class="resume-section">
        <h2>项目经历</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-header">
              <span class="timeline-period">2025-02 - 至今</span>
              <span class="timeline-title">简历生成器（h5）·需求分析，设计，开发</span>
            </div>
            <div class="timeline-content">
              <ul>
                <li>技术栈：Vue3+ Pinia + Element Plus</li>
                <li>负责核心功能开发，包括分步表单、实时预览、PDF导出等模块</li>
                <li>实现简历信息的模块化管理，支持基本信息、教育背景、工作经历等8个模块</li>
                <li>开发样式定制功能，提供多种配色方案和字体大小选择</li>
                <li>使用html2canvas+jspdf实现简历PDF导出功能，基于localforage实现草稿保存与加载功能</li>
                <li>引入AI辅助开发，减少60%重复代码编写量，并批量生成测试数据，实现首版本10天快速开发</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-header">
              <span class="timeline-period">2024-12 - 2025-02</span>
              <span class="timeline-title">个人网站·设计，开发</span>
            </div>
            <div class="timeline-content">
              <ul>
                <li>技术栈：Vue3 + Vue Router + Vite + Axios</li>
                <li>独立开发全栈式作品展示平台，实现技术项目源码直连等6大核心模块</li>
                <li>结合CSS动画实现全站平滑转场效果，运用Vue Router动态路由加载技术项目详情页</li>
                <li>通过Axios异步加载Gitee仓库数据，页面首屏加载速度≤1.2s</li>
                <li>实现响应式视觉系统，采用CSS变量集中管理配色方案，开发移动端优先适配方案，覆盖95%主流设备分辨率</li>
                <li>通过原生CSS实现毛玻璃导航栏（backdrop-filter）、动态打字机特效</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-header">
              <span class="timeline-period">2024-10 - 2024-11</span>
              <span class="timeline-title">多端小程序开发·设计，开发</span>
            </div>
            <div class="timeline-content">
              <ul>
                <li>技术栈：Uni-app + Vue3 + Sass + uni-ui</li>
                <li>跨平台壁纸应用(微信小程序/Android/H5)，通过Vue3 Composition API重构核心模块，组件复用率提升35%，构建速度优化20%</li>
                <li>实现高性能图片加载方案：通过WebP格式预览，使平均加载时长从1.8s降至0.6s，开发分页预加载机制支持一组十余张壁纸流畅展示</li>
                <li>构建多端适配体系：使用条件编译技术维护单一代码库，同步输出微信/支付宝/百度等平台小程序，开发效率较传统多项目模式提升60%</li>
                <li>完善Android端权限管理模块，本地存储等原生API交互组件，通过uni-app原生插件机制保障功能稳定性</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="resume-section">
        <h2>技能熟练度</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>前端技术</h3>
            <ul>
              <li>HTML5 · 熟练</li>
              <li>CSS3 · 熟练</li>
              <li>JavaScript (ES6+) · 掌握</li>
              <li>Vue3 · 掌握</li>
              <li>Git · 掌握</li>
              <li>ECharts · 一般</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>后端技术</h3>
            <ul>
              <li>C/C++ · 熟练</li>
              <li>Java · 掌握</li>
              <li>MySQL · 掌握</li>
              <li>Node.js · 一般</li>
            </ul>
          </div>
          
        </div>
      </div>

      <div class="resume-section">
        <h2>在校经历</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-header">
              <span class="timeline-period">2022-10 - 2024-06</span>
              <span class="timeline-title">西南大学学生就业服务团·宣传部干事</span>
            </div>
            <div class="timeline-content">
              <ul>
                <li>参与制作5项活动宣传物料（迎新晚会海报/就业团团史册/易拉宝等），运用PS完成视觉设计，印刷物料覆盖校内十余个宣传点位</li>
                <li>为团队官方账号拍摄制作宣传视频，协助完成企业双选会、动员大会等活动的现场影像记录</li>
                <li>全程参与两届迎春晚会执行，统筹节目设计、舞台动线规划及设备调试，负责节目彩排流程跟进（协调5-10人演职团队）</li>
                <li>在年度企业双选会中担任场地志愿者，完成百余家企业展位指引布置，协助维护300+企业代表与2,000余名学生的对接秩序</li>
                <li>于2023年获评"优秀干事"（团内前10%），收到企业领导以及部长多次表彰</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-header">
              <span class="timeline-period">2022-10 - 2023-07</span>
              <span class="timeline-title">西南大学计信院团委学生会·文艺部干事</span>
            </div>
            <div class="timeline-content">
              <ul>
                <li>全程参与大型院级晚会（新生才艺展/毕业生晚会等），负责策划案撰写、节目海选评审、主持彩排流程把控，协调30+个演出团队完成4次联排</li>
                <li>参与策划趣味运动会、学生会大会等院级活动，设计活动规则与流程，统筹物资准备、场地布置等执行细节，单场活动最多有百余人参与</li>
                <li>担任干事期间参加的活动工作涉及到全院以及部分其他学院学生近千余名，多次接收到领导及参与人员的好评</li>
              </ul>
            </div>
          </div>
        </div>
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

.personal-info {
  text-align: center;
  margin-top: 1rem;
}

.personal-info h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.personal-info p {
  color: var(--text-light);
  margin-bottom: 0.5rem;
}

.course-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.course-list li {
  color: var(--text-light);
  padding-left: 1.5rem;
  position: relative;
}

.course-list li::before {
  content: '•';
  color: var(--accent-color);
  position: absolute;
  left: 0;
}

.timeline-content ul {
  list-style: none;
  padding: 0;
}

.timeline-content li {
  color: var(--text-light);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.timeline-content li::before {
  content: '•';
  color: var(--accent-color);
  position: absolute;
  left: 0;
}
</style>
