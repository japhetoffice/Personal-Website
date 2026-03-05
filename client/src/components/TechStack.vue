<script setup>
import { ref } from 'vue'

const techStack = ref([
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Python', 'Flask', 'MySQL']
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: ['Git', 'VS Code', 'Linux']
  }
])
</script>

<template>
  <section class="tech-stack">
    <div class="tech-container">
      <h2>Tech Stack</h2>

      <div class="tech-list">
        <div v-for="(category, index) in techStack" :key="category.category" class="tech-item" :style="{ '--index': index }">
          <div class="item-header">
            <span class="category-icon">{{ category.icon }}</span>
            <h3 class="category-title">{{ category.category }}</h3>
          </div>
          <div class="skills-list">
            <span v-for="skill in category.skills" :key="skill" class="skill">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-stack {
  padding: 50px 20px;
  background: var(--bg-primary);
}

.tech-container {
  max-width: 900px;
  margin: 0 auto;
}

.tech-container h2 {
  margin-bottom: 30px;
  font-size: 1.8rem;
  animation: slideIn 0.6s ease-out;
}

.tech-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tech-item {
  padding: 16px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: var(--transition);
  animation: fadeIn 0.5s ease-out;
  animation-delay: calc(var(--index, 0) * 0.1s);
  animation-fill-mode: both;
  cursor: pointer;
}

.tech-item:hover {
  border-color: var(--accent);
  background: rgba(139, 92, 246, 0.03);
  transform: translateX(4px);
  box-shadow: var(--shadow-sm), 0 0 15px rgba(139, 92, 246, 0.08);
}

.item-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.category-icon {
  font-size: 1.2rem;
}

.category-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  transition: color 0.3s ease;
}

.tech-item:hover .category-title {
  color: var(--accent);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill {
  display: inline-block;
  padding: 4px 10px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 14px;
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 500;
  transition: var(--transition);
  white-space: nowrap;
}

.skill:hover {
  background: rgba(139, 92, 246, 0.15);
  border-color: var(--accent);
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .tech-item {
    padding: 14px;
  }

  .category-title {
    font-size: 0.9rem;
  }

  .skill {
    font-size: 0.75rem;
    padding: 3px 8px;
  }
}

@media (max-width: 768px) {
  .tech-stack {
    padding: 40px 20px;
  }

  .tech-container h2 {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }

  .tech-item {
    padding: 12px;
  }

  .skill {
    font-size: 0.7rem;
  }
}
</style>

