<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const recommendations = ref([
  {
    text: '"Japhet is a talented developer with excellent problem-solving skills. He delivers quality work on time and is always eager to learn new technologies."',
    author: 'John Smith',
    title: 'Tech Lead at StartUp Co'
  },
  {
    text: '"Working with Japhet was a great experience. His attention to detail and commitment to clean code is commendable. Highly recommended!"',
    author: 'Sarah Johnson',
    title: 'Project Manager at Tech Solutions'
  },
  {
    text: '"Japhet brought fresh ideas to the table and helped optimize our backend infrastructure. A true asset to any team."',
    author: 'Michael Chen',
    title: 'CTO at Digital Innovations'
  },
  {
    text: '"Outstanding work on the frontend redesign. Japhet understood the requirements perfectly and delivered beyond expectations."',
    author: 'Emily Davis',
    title: 'Product Manager'
  },
  {
    text: '"His knowledge of Vue.js and modern web development practices is exceptional. Great to work with!"',
    author: 'Alex Rodriguez',
    title: 'Senior Developer'
  },
  {
    text: '"Japhet is a quick learner and adapts well to new technologies. His communication skills are top-notch."',
    author: 'Jessica Lee',
    title: 'Team Lead'
  },
  {
    text: '"Professional, reliable, and always delivers on time. Highly recommend for any web development project."',
    author: 'David Wilson',
    title: 'Founder at Tech Startup'
  },
  {
    text: '"The best developer I\'ve worked with. Clean code, great documentation, and excellent problem-solving."',
    author: 'Maria Garcia',
    title: 'Senior Architect'
  },
  {
    text: '"Japhet\'s backend API design is elegant and scalable. Impressed by his technical expertise."',
    author: 'Robert Brown',
    title: 'DevOps Engineer'
  },
  {
    text: '"A pleasure to work with. Japhet is proactive, communicative, and delivers quality results consistently."',
    author: 'Lisa Anderson',
    title: 'Project Coordinator'
  },
  {
    text: '"Exceptional skills in debugging and optimization. Japhet turned our slow application into lightning fast."',
    author: 'James Taylor',
    title: 'Performance Specialist'
  },
  {
    text: '"Great team player with strong technical skills. Japhet is a valuable addition to any project."',
    author: 'Patricia Martinez',
    title: 'HR Manager at Tech Corp'
  }
])

const currentIndex = ref(0)
const itemsPerView = ref(3)
let interval

const getVisibleRecommendations = () => {
  const visible = []
  for (let i = 0; i < itemsPerView.value; i++) {
    const index = (currentIndex.value + i) % recommendations.value.length
    visible.push(recommendations.value[index])
  }
  return visible
}

const nextRecommendations = () => {
  currentIndex.value = (currentIndex.value + 1) % recommendations.value.length
}

const previousRecommendations = () => {
  currentIndex.value = (currentIndex.value - 1 + recommendations.value.length) % recommendations.value.length
}

onMounted(() => {
  // Rotate recommendations every 5 seconds
  interval = setInterval(() => {
    nextRecommendations()
  }, 5000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <section class="recommendations">
    <div class="recommendations-container">
      <h2>Recommendations</h2>

      <div class="recommendations-carousel">
        <button class="carousel-btn prev-btn" @click="previousRecommendations" aria-label="Previous">
          ←
        </button>

        <div class="recommendations-grid">
          <div v-for="(rec, index) in getVisibleRecommendations()" :key="index" class="rec-card">
            <blockquote>{{ rec.text }}</blockquote>
            <div class="author-info">
              <strong>{{ rec.author }}</strong>
              <p>{{ rec.title }}</p>
            </div>
          </div>
        </div>

        <button class="carousel-btn next-btn" @click="nextRecommendations" aria-label="Next">
          →
        </button>
      </div>

      <div class="carousel-indicators">
        <span 
          v-for="i in Math.ceil(recommendations.length / itemsPerView)" 
          :key="i"
          class="indicator"
          :class="{ active: Math.floor(currentIndex / 1) % Math.ceil(recommendations.length / itemsPerView) === i - 1 }"
        ></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.recommendations {
  padding: 50px 20px;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
}

.recommendations-container {
  max-width: 1000px;
  margin: 0 auto;
}

.recommendations-container h2 {
  margin-bottom: 35px;
  font-size: 1.8rem;
}

.recommendations-carousel {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
}

.carousel-btn {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border: 1px solid var(--border-color);
  background: var(--card-bg);
  color: var(--text-secondary);
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.carousel-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(139, 92, 246, 0.05);
}

.recommendations-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  flex: 1;
}

.rec-card {
  padding: 25px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: all 0.3s ease;
  animation: fadeIn 0.5s ease-in-out;
}

.rec-card:hover {
  border-color: var(--accent);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.rec-card blockquote {
  font-style: italic;
  margin-bottom: 20px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  border-left: 3px solid var(--accent);
  padding-left: 15px;
}

.author-info {
  padding-top: 15px;
  border-top: 1px solid var(--border-color);
}

.author-info strong {
  display: block;
  color: var(--text-primary);
  font-size: 0.95rem;
  margin-bottom: 3px;
}

.author-info p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border-color);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: var(--accent);
  transform: scale(1.3);
}

.indicator:hover {
  background: var(--text-secondary);
}

@media (max-width: 1024px) {
  .recommendations-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .recommendations {
    padding: 40px 20px;
  }

  .recommendations-container h2 {
    font-size: 1.4rem;
  }

  .recommendations-carousel {
    flex-wrap: wrap;
  }

  .recommendations-grid {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .carousel-btn {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
}
</style>

