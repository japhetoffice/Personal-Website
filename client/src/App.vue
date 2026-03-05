<script setup>
import { ref } from 'vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import TechStack from './components/TechStack.vue'
import Projects from './components/Projects.vue'
import Certifications from './components/Certifications.vue'
import DesignSection from './components/DesignSection.vue'
import Recommendations from './components/Recommendations.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <main class="app">
    <Hero />
    <About />
    
    <div class="two-column-section">
      <Experience />
      <TechStack />
    </div>
    
    <Projects />
    <Certifications />
    <DesignSection />
    <Recommendations />
    <Gallery />
    <Contact />
  </main>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.two-column-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
}

.two-column-section > * {
  border-bottom: none;
}

.two-column-section > *:first-child {
  border-right: 1px solid var(--border-color);
}

@media (max-width: 1024px) {
  .two-column-section {
    grid-template-columns: 1fr;
  }

  .two-column-section > *:first-child {
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
}
</style>
