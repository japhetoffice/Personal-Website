<script setup>
import { ref } from 'vue'

const designWork = ref([
  { id: 1, title: 'Graphics', image: '@/assets/wyclefjpg.jpg' },
  { id: 2, title: 'Church Poster', image: '@/assets/YOUTHJAM TCOJC.png' },
  { id: 3, title: 'Website UI', image: '@/assets/sample.png' },
  { id: 4, title: 'Poster', image: '@/assets/YES O - Copy.png' },
  { id: 5, title: 'Coffe shop Web UI', image: '@/assets/kasikas web ui.png' },
  { id: 6, title: 'mock up', image: '@/assets/Church Layout.png' }
])
</script>

<template>
  <section class="design-section">
    <div class="design-container">
      <h2>Design Section</h2>

      <div class="design-grid">
        <div v-for="design in designWork" :key="design.id" class="design-card">
          <img :src="design.image" :alt="design.title" class="design-image">
          <div class="design-overlay">
            <span>{{ design.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.design-section {
  padding: 50px 20px;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
}

.design-container {
  max-width: 1000px;
  margin: 0 auto;
}

.design-container h2 {
  margin-bottom: 35px;
  font-size: 1.8rem;
}

.design-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.design-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: 250px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.design-card:hover .design-overlay {
  opacity: 1;
}

.design-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.design-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(139, 92, 246, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.design-overlay span {
  color: var(--text-primary);
  font-size: 1rem;
  text-align: center;
  padding: 20px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .design-section {
    padding: 40px 20px;
  }

  .design-container h2 {
    font-size: 1.4rem;
  }

  .design-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .design-card {
    height: 200px;
  }
}
</style>
