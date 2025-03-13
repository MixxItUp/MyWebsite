<template>
  <main class="gitee-container">
    <div class="container mx-auto px-4 py-8">
      <h1 class="section-title">Gitee 项目展示</h1>
      
      <div v-if="loading" class="text-center text-gray-600 dark:text-gray-300 mb-8">
        加载中...
      </div>

      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <div class="projects-grid">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <a 
            :href="project.html_url" 
            target="_blank"
            class="project-card-link"
          >
            <div class="project-card-content">
              <h2 class="project-name">
                {{ project.name }}
              </h2>
              <p class="project-description">
                {{ project.description || '暂无项目描述' }}
              </p>
              
              <div class="project-meta">
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  {{ project.stargazers_count }}
                </div>
                
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
                  </svg>
                  {{ project.forks_count }}
                </div>
              </div>

              <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
                最后更新 {{ formatDate(project.updated_at) }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GiteeView',
  data() {
    return {
      loading: true,
      error: null,
      projects: []
    }
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await axios.get(
          'https://gitee.com/api/v5/users/lin-yimian/repos',
          {
            params: {
              type: 'all',
              sort: 'updated',
              direction: 'desc'
            }
          }
        );
        this.projects = response.data;
      } catch (err) {
        this.error = '获取项目数据失败：' + (err.response?.data.message || err.message);
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('zh-CN', options);
    }
  }
}
</script>

<style scoped>
.gitee-container {
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  padding-bottom: 0.8rem;
  border-bottom: 2px solid var(--accent-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.bg-white {
  background: linear-gradient(145deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid var(--accent-color);
  border-radius: 30px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.bg-white:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.project-card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.project-card-link:hover .project-name {
  color: var(--accent-color);
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.project-description {
  color: var(--text-light);
  font-size: 1rem;
  line-height: 1.7;
  margin: 1rem 0;
  min-height: 60px;
}

.project-meta {
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--divider-color);
  font-size: 0.9rem;
  color: var(--text-secondary);
  display: flex;
}
.items-center{
  margin-right: 20px;
}

.project-meta svg {
  margin-right: 0.5rem;
}

svg {
  width: 16px;
  height: 16px;
}

.error-message {
  background: var(--error-bg);
  border: 1px solid var(--error-border);
  color: var(--error-text);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .gitee-container {
    padding: 4rem 1rem 1rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
