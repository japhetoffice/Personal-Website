<script setup>
import { ref } from 'vue'

const galleryImages = ref([
  { id: 1, title: 'Creative Work 1', src: '@/assets/creatives (1).jpg' },
  { id: 2, title: 'Creative Work 2', src: '@/assets/creatives (2).jpg' },
  { id: 3, title: 'Creative Work 3', src: '@/assets/creatives (3).jpg' },
  { id: 4, title: 'Lab Project', src: '@/assets/lab.png' },
  { id: 5, title: 'Project Work', src: '@/assets/project.png' },
  { id: 6, title: 'Church Layout', src: '@/assets/Church Layout.png' }
])
</script>

<template>
  <section class="gallery">
    <div class="gallery-container">
      <h2>Gallery</h2>

      <div class="gallery-grid">
        <div v-for="(item, index) in galleryImages" :key="item.id" class="gallery-item" :style="{ '--index': index }">
          <div class="gallery-image-wrapper">
            <img :src="item.src" :alt="item.title" class="gallery-image">
            <div class="gallery-overlay">
              <span class="overlay-text">{{ item.title }}</span>
            </div>
          </div>
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  padding: 50px 20px;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
}

.gallery-container {
  max-width: 900px;
  margin: 0 auto;
}

.gallery-container h2 {
  margin-bottom: 35px;
  font-size: 1.8rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.gallery-item {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;
  transition: var(--transition);
  animation: fadeIn 0.5s ease-out;
  animation-delay: calc(var(--index, 0) * 0.1s);
  animation-fill-mode: both;
}

.gallery-item:hover {
  border-color: var(--accent);
  transform: translateY(-8px);
  box-shadow: var(--shadow-md), 0 0 20px rgba(139, 92, 246, 0.1);
}

.gallery-image-wrapper {
  position: relative;
  overflow: hidden;
  height: 150px;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(139, 92, 246, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.overlay-text {
  color: white;
  font-weight: 600;
  text-align: center;
  padding: 10px;
}

.gallery-item p {
  padding: 12px 15px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-align: center;
  margin: 0;
  transition: color 0.3s ease;
}

.gallery-item:hover p {
  color: var(--accent);
}

@media (max-width: 768px) {
  .gallery {
    padding: 40px 20px;
  }

  .gallery-container h2 {
    font-size: 1.4rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>


