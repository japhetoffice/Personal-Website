<script setup>
import { ref } from 'vue'

const experiences = ref([
  {
    year: '2026',
    title: 'Website Developer',
    company: 'Self-Employed'
  },
  {
    year: '2025',
    title: 'Backend Development',
    company: 'Learning & Practice'
  },
  {
    year: '2025',
    title: 'Graphic Designer',
    company: 'Freelance | 30+ Clients'
  },
  {
    year: '2025',
    title: 'Video Editor',
    company: 'Freelance | 3 Clients'
  },
  {
    year: '2024',
    title: 'Graphic Designer',
    company: 'Freelance Work'
  },
  {
    year: '2024',
    title: 'Video Editor',
    company: 'Started Freelance Career'
  },
  {
    year: '2024',
    title: 'Creative Designer',
    company: 'Early Projects'
  },
  {
    year: '2025',
    title: 'Hello World! 👋',
    company: 'First Line of Code'
  }
])
</script>

<template>
  <section class="experience">
    <div class="experience-container">
      <h2>Experience</h2>

      <div class="experience-list">
        <div v-for="(exp, index) in experiences" :key="index" class="experience-item" :style="{ '--index': index }">
          <div class="item-checkbox"></div>
          <div class="item-content">
            <h3 class="item-title">{{ exp.title }}</h3>
            <p class="item-company">{{ exp.company }}</p>
          </div>
          <div class="item-year">{{ exp.year }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  padding: 50px 20px;
  background: var(--bg-primary);
}

.experience-container {
  max-width: 900px;
  margin: 0 auto;
}

.experience-container h2 {
  margin-bottom: 30px;
  font-size: 1.8rem;
  animation: slideIn 0.6s ease-out;
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.experience-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: var(--transition);
  animation: fadeIn 0.5s ease-out;
  animation-delay: calc(var(--index, 0) * 0.06s);
  animation-fill-mode: both;
  cursor: pointer;
}

.experience-item:hover {
  border-color: var(--accent);
  background: rgba(139, 92, 246, 0.03);
  transform: translateX(4px);
  box-shadow: var(--shadow-sm), 0 0 15px rgba(139, 92, 246, 0.08);
}

.item-checkbox {
  width: 16px;
  height: 16px;
  min-width: 16px;
  border: 2px solid var(--border-color);
  border-radius: 3px;
  transition: var(--transition);
}

.experience-item:hover .item-checkbox {
  border-color: var(--accent);
  background: rgba(139, 92, 246, 0.1);
}

.item-content {
  flex: 1;
}

.item-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 3px 0;
  transition: color 0.3s ease;
}

.experience-item:hover .item-title {
  color: var(--accent);
}

.item-company {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
  transition: color 0.3s ease;
}

.experience-item:hover .item-company {
  color: var(--text-accent);
}

.item-year {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 600;
  padding: 4px 8px;
  background: rgba(139, 92, 246, 0.08);
  border-radius: 4px;
  transition: var(--transition);
  white-space: nowrap;
}

.experience-item:hover .item-year {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%);
  color: white;
}

@media (max-width: 768px) {
  .experience {
    padding: 40px 20px;
  }

  .experience-container h2 {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }

  .experience-item {
    padding: 10px 12px;
    gap: 10px;
  }

  .item-title {
    font-size: 0.9rem;
  }

  .item-company {
    font-size: 0.8rem;
  }

  .item-year {
    font-size: 0.75rem;
    padding: 3px 6px;
  }

  .item-checkbox {
    width: 14px;
    height: 14px;
  }
}
</style>

