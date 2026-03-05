<script setup>
import { ref } from 'vue'

const certifications = ref([
  {
    title: 'Python Backend Specialist',
    image: '@/assets/freecodecamp-certificate.png'
  },
  {
    title: 'Web Development Fundamentals',
    image: '@/assets/freecodecamp-certificate.png'
  },
  {
    title: 'Web Development Fundamentals',
    image: '@/assets/freecodecamp-certificate.png'
  },
  {
    title: 'Web Development Fundamentals',
    image: '@/assets/freecodecamp-certificate.png'
  },
  {
    title: 'Web Development Fundamentals',
    image: '@/assets/freecodecamp-certificate.png'
  },
  {
    title: 'Web Development Fundamentals',
    image: '@/assets/freecodecamp-certificate.png'
  }
])
</script>

<template>
  <section class="certifications">
    <div class="certifications-container">
      <h2>Recent Certifications</h2>

      <div class="certifications-grid">
        <div v-for="cert in certifications" :key="cert.title" class="cert-card">
          <img :src="cert.image" :alt="cert.title" class="cert-image">
          <div class="cert-overlay">
            <span>{{ cert.title }}</span>
          </div>
        </div>
      </div>

      <div class="certifications-footer">
        <a href="#" class="btn btn-secondary">View All</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.certifications {
  padding: 50px 20px;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
}

.certifications-container {
  max-width: 900px;
  margin: 0 auto;
}

.certifications-container h2 {
  margin-bottom: 35px;
  font-size: 1.8rem;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.cert-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: 200px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cert-card:hover .cert-overlay {
  opacity: 1;
}

.cert-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.cert-overlay {
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

.cert-overlay span {
  color: var(--text-primary);
  font-size: 0.95rem;
  text-align: center;
  padding: 15px;
  font-weight: 500;
}

.certifications-footer {
  text-align: center;
}

@media (max-width: 768px) {
  .certifications {
    padding: 40px 20px;
  }

  .certifications-container h2 {
    font-size: 1.4rem;
  }

  .certifications-grid {
    grid-template-columns: 1fr;
  }
}
</style>

