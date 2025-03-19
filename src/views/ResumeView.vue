<template>
  <div class="father-box">
  <div class="describe">
    <p>本简历使用自研<a href="#">简历生成器</a>一键生成。<a href="#">看看源代码</a></p>
  </div>
  <main class="resume" >
    <section class="resume-header">
      <div class="line-container basic">
        <h1>林煜</h1>
        <h2>求职意向：前端工程师</h2>
      </div>
      <div class="line-container contact">
        <p>年龄：20 </p> 
        <p>177-5776-0085</p>
        <p>1101415804@qq.com</p>
      </div>
      <div class="resume-photo">
        <img src="/src/assets/images/IDphoto/白底证件照.png">
      </div>
    </section>

    <section class="resume-content">

      <div class="resume-section">
        <h2>教育背景<span></span>EDUCATION</h2>
        <div class="timeline-item">
          <div class="timeline-header">
            <span class="timeline-period">2022.09 - 至今</span>
            <span class="timeline-title">西南大学·软件工程<span style="margin-left: 5cqw;">成绩排名：5%~20%</span></span>
          </div>

          <div class="timeline-content">
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

      
      <div class="resume-section">
        <h2>获奖经历<span></span>AWARDS</h2>
        <ul class="xxx-list">
          <ul class="scholarship">
            <span>奖学金</span>
            <li>
              <span class="award-name">国家奖学金</span>
              <span class="award-date">2023-12</span>
            </li>
            <li>
              <span class="award-name">校二等奖学金</span>
              <span class="award-date">2024-11</span>
            </li>
          </ul>

          <ul class="title">
            <span>荣誉称号</span>
            <li>
              <span class="award-name">西南大学三好学生</span>
              <span class="award-date">2024-10</span>
            </li>
            <li>
              <span class="award-name">优秀共青团员</span>
              <span class="award-date">2024-04</span>
            </li>
            <li>
              <span class="award-name">西南大学学习优秀奖</span>
              <span class="award-date">2023-10</span>
            </li>
            <li>
              <span class="award-name">宣传部优秀干事</span>
              <span class="award-date">2023-06</span>
            </li>
          </ul>


        </ul>
      </div>

      <div class="resume-section">
        <h2>项目经历<span></span>EXPERIENCE</h2>
          <div class="timeline-item">
            <div class="timeline-header">
              <span class="timeline-period">2025.02 - 至今</span>
              <span class="timeline-title">简历生成器（h5）<span>· Vue3+ Pinia + Element Plus</span></span>
            </div>
            <div class="timeline-content">
              <ul>
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
              <span class="timeline-period">2024.12 - 2025.02</span>
              <span class="timeline-title">个人网站 <span>· Vue3 + Vue Router + Vite + Axios</span></span>
            </div>
            <div class="timeline-content">
              <ul>
                <li>独立开发全栈式作品展示平台，实现技术项目源码直连等6大核心模块</li>
                <li>结合CSS动画实现全站平滑转场效果，运用Vue Router动态路由加载技术项目详情页</li>
                <li>通过Axios异步加载Gitee仓库数据，页面首屏加载速度≤1.2s</li>
                <li>实现响应式视觉系统，开发移动端适配方案，覆盖95%主流设备分辨率</li>
                <li>通过原生CSS实现毛玻璃导航栏（backdrop-filter）、动态打字机特效</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-header">
              <span class="timeline-period">2024.10 - 2024.11</span>
              <span class="timeline-title">多端小程序开发 <span>· Uni-app + Vue3 + Sass + uni-ui</span></span>
            </div>
            <div class="timeline-content">
              <ul>
                <li>通过Vue3 Composition API重构核心模块，组件复用率提升35%</li>
                <li>实现高性能图片加载方案：通过WebP格式预览，使平均加载时长从1.8s降至0.6s</li>
                <li>开发分页预加载机制,支持一组十余张壁纸流畅展示，优化用户体验</li>
                <li>跨平台(小程序/H5)壁纸应用，构建多端适配体系，使用条件编译技术维护单一代码库，同步输出多平台小程序，开发效率较传统多项目模式提升60%</li>
              </ul>
            </div>
          </div>
      </div>

      <div class="resume-section">
        <h2>专业技能<span></span>SKILLS</h2>
        <ul class="xxx-list">
          <ul class="frontend">
            <span>前端技术</span>
            <li>
              <span>HTML5</span>
              <span>掌握</span>
            </li>
            <li>
              <span>CSS3</span>
              <span>掌握</span>
            </li>
            <li>
              <span>JavaScript (ES6+)</span>
              <span>掌握</span>
            </li>
            <li>
              <span>Vue3</span>
              <span>掌握</span>
            </li>
            <li>
              <span>Git</span>
              <span>掌握</span>
            </li>
            <li>
              <span>ECharts</span>
              <span>一般</span>
            </li>
          </ul>
          <ul class="afterend">
            <span>后端技术</span>
            <ul>
              <li>
                <span>C/C++</span>
                <span>熟练</span>
              </li>
              <li>
                <span>Java</span>
                <span>掌握</span>
              </li>
              <li>
                <span>MySQL</span>
                <span>掌握</span>
              </li>
              <li>
                <span>Node.js</span>
                <span>一般</span>
              </li>
            </ul>
          </ul>
          
        </ul>
      </div>

      <div class="resume-section">
        <h2>在校经历<span></span>CAMPUS</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-header">
              <span class="timeline-period">2022-10 - 2024-06</span>
              <span class="timeline-title">西南大学学生就业服务团·宣传部干事</span>
            </div>
            <div class="timeline-content">
              <ul>
                <li>参与制作5项活动宣传物料（晚会海报/团史册/易拉宝等），印刷物料覆盖校内十余个宣传点位</li>
                <li>为团队官方账号拍摄制作宣传视频，协助完成企业双选会、动员大会等活动的现场影像记录</li>
                <li>全程参与两届迎春晚会执行，统筹节目设计、舞台动线规划及设备调试，负责节目彩排流程跟进</li>
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
  <div class="btns" style="display: flex;justify-content: center;margin-top: 20px;">
    <button @click="exportPDF">获取PDF格式</button>
    <!-- <button @click="exportPDF">获取格式</button> -->
  </div>
  </div>
</template>
<script setup>
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
const exportPDF = () => {
  const element = document.querySelector('.resume')
  
  html2canvas(element, {
    scale: 2, // 提高渲染分辨率
    useCORS: true, // 处理跨域资源
    logging: false // 关闭控制台日志
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/png', 1.0)
    const pdf = new jsPDF('p', 'mm', [element.offsetWidth * 0.264583, element.offsetHeight * 0.264583]) // 将px转换为mm
    
    pdf.addImage(
      imgData, 
      'PNG',
      0,
      0,
      pdf.internal.pageSize.getWidth(),
      pdf.internal.pageSize.getHeight(),
      null,
      'FAST' // 使用快速压缩模式
    )
    
    pdf.save('resume.pdf')
  })
}
</script>
<style scoped>
.describe {
  text-align: center;
  color: #666;
  font-size: 0.8rem;
  margin: 1rem 0;
}

.describe a:first-of-type {
  color: #67a7e3;
  transition: all 0.6s ease;
  text-decoration: none;
  margin: 0 1cqw;
}

.describe a:first-of-type:hover {
  color: #2E75B6;
  font-weight: bold;
  transform: scale(1.05);
  display: inline-block;
}

.describe a:last-of-type {
  color: #999;
  transition: .5s;
  text-decoration: underline;
}
.describe a:last-of-type:hover {
  color: #4b83a3;
  text-decoration: underline;
}

.father-box{
  margin: 7rem 5vw;
  width: calc(100vw - 10vw);
  position: relative;
}
.resume {
  background-color: white;
  border: 3.5cqw solid rgb(240, 240, 240);
  background-clip: content-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.resume-header {
  height: 16cqw;
  width: 86cqw;
  background-color: #2E75B6;
  color: white;
  line-height: 5cqw;
  position: relative;
  margin-top: 4cqw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.resume-photo {
  position: absolute;
  right: 6cqw;
  top: -2cqw;
  height: 20cqw;
  width: auto;
  aspect-ratio: 5/7;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  overflow: hidden;
  display: flex;
  justify-content: center;
  img{
    height: 20cqw;
    object-fit: contain;
  }
}
.resume-header::before{
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-left: .8cqw solid transparent;
  border-bottom: .8cqw solid transparent;
  border-top: .8cqw solid #0f4a6e;
  border-right: .8cqw solid #0f4a6e;
  top: 16cqw;
}
.resume-header::after{
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  right: 0cqw;
  top: 16cqw;
  border-right: .8cqw solid transparent;
  border-bottom: .8cqw solid transparent;
  border-top: .8cqw solid #0f4a6e;
  border-left: .8cqw solid #0f4a6e;
}
.line-container{
  display: flex;
  margin-left: 6cqw;
  h1 {
    font-size: 4cqw;
    font-weight: 800;
    margin-right: 8cqw;
  }
  h2 {
    font-size: 2.25cqw;
  }
  p{
    font-size: 1.75cqw;
    margin-right: 4cqw;
  }
}

.resume-section {
  margin: 4cqw 3cqw;
  /* border: 1px solid #b5b5b5; */
  h2{
    font-size: 2cqw;
    font-weight: 800;
    color: #2E75B6;
    margin-bottom: 1.2cqw;
    padding-bottom: .8cqw;
    border-bottom: 2px solid #67a7e3;
    span{
      padding: 3cqw;
    }
  }
}

/* 数据项 */
.timeline-item {
  max-width: 100cqw;
}

.timeline-header {
  display: flex;
  margin-bottom: .5cqw;
  span{
    font-size: 1.8cqw;
    font-weight: 800;
  }
  .timeline-period{
    width: 20cqw;
    margin-right: 5cqw;
  }
  .timeline-title{
    span{
      font-weight: 500;
    }
  }
}

.timeline-content{
  font-size: 1.7cqw;
  font-weight: 600;
  margin-bottom: 1cqw;
}

.timeline-content ul {
  list-style: none;
  padding: 0;
  li {
    padding-left: 2cqw;
    margin-bottom: .3cqw;
    position: relative;
  }
}

.timeline-content li::before {
  content: '•';
  color: #2E75B6;
  position: absolute;
  left: 0;
}



/* 教育部分 */

.course-list {
  display: inline-block;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  /* margin-left: 2cqw; */
}
.course-list li {
  font-size: 1.6cqw;
  margin: 0 1cqw;
  padding: 0;
  margin: 0;
}
.course-list li::before {
  content: '';
}
.course-list::before{
  content: '专业课程:';
  font-size: 1.7cqw;
  position: relative;
  top: -.1cqw;
  /* left: -1cqw; */
}

/* 奖项 */
.xxx-list {
  list-style: none;
  padding: 0;
  ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: .5cqw;
    li{
      font-size: 1.6cqw;
      /* border: 1px solid #000; */
      padding: 0 1cqw;
      margin-bottom: 0.3cqw;
      span:nth-child(1){
        padding-right: .5cqw;
      }
      span:nth-child(2){
        background: #acd7ff;
        color: white;
        font-size: 1cqw;
        font-weight: 500;
        padding: 0.1cqw 0.5cqw;
        border-radius: .5cqw;
        float: right;
      }
    }
  }
  ul>span{
    font-size: 1.6cqw;
    font-weight: 800;
    width: 100%;
    margin-bottom: 0.5cqw;
  }
}




/* @media (max-width: 768px) {
  .timeline-header {
    flex-direction: column;
    gap: 0.25rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
} */

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

.btns button {
  background: #2E75B6;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.btns button:hover {
  background: #1a4d80;
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

</style>
