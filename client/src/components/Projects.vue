<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    title: 'TimeGym',
    description: 'A Qr base Gym Monitoring and Access.',
    link: '#'
  },
  {
    title: 'Python Backend',
    description: 'Database connection project and API\'s.',
    link: '#'
  },
  {
    title: 'Portfolio',
    description: 'Bento-style personal website - Minimal.',
    link: '#'
  },
  {
    title: 'Qr generator',
    description: 'Python integrated link to qr generator',
    link: '#'
  }
])
</script>

<template>
  <section class="projects" id="projects">
    <div class="projects-container">
      <h2>Recent Projects</h2>

      <div class="projects-grid">
        <a v-for="(project, index) in projects" :key="project.title" :href="project.link" class="project-card" :style="{ '--index': index }">
          <div class="card-header">
            <h3>{{ project.title }}</h3>
            <span class="card-icon">→</span>
          </div>
          <p>{{ project.description }}</p>
          <div class="card-footer">
            <span class="tech-tag">Learn More</span>
          </div>
        </a>
      </div>

      <div class="projects-footer">
        <a href="#" class="btn btn-secondary">View All Projects</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 50px 20px;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
}

.projects-container {
  max-width: 900px;
  margin: 0 auto;
}

.projects-container h2 {
  margin-bottom: 35px;
  font-size: 1.8rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.project-card {
  padding: 25px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  text-decoration: none;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  animation: fadeIn 0.5s ease-out;
  animation-delay: calc(var(--index, 0) * 0.1s);
  animation-fill-mode: both;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  transition: left 0.5s ease;
}

.project-card:hover::before {
  left: 100%;
}

.project-card:hover {
  border-color: var(--accent);
  transform: translateY(-6px);
  box-shadow: var(--shadow-md), 0 0 20px rgba(139, 92, 246, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}

.project-card h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.project-card:hover h3 {
  color: var(--accent);
}

.card-icon {
  color: var(--accent);
  font-size: 1.2rem;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.project-card:hover .card-icon {
  opacity: 1;
  transform: translateX(0);
}

.project-card p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0 0 15px 0;
  flex-grow: 1;
}

.card-footer {
  display: flex;
  gap: 8px;
  margin-top: auto;
}

.tech-tag {
  display: inline-block;
  padding: 4px 10px;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 20px;
  font-size: 0.75rem;
  color: var(--accent);
  transition: var(--transition);
}

.project-card:hover .tech-tag {
  background: rgba(139, 92, 246, 0.2);
  border-color: var(--accent);
}

.projects-footer {
  text-align: center;
}

@media (max-width: 768px) {
  .projects {
    padding: 40px 20px;
  }

  .projects-container h2 {
    font-size: 1.4rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}
</style>

