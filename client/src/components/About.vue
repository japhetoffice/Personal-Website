<script setup>
import { ref } from 'vue'

const aboutText = ref([
  "Hi, I'm Japhet Bastillada, a Computer Science student with a strong interest in programming, problem-solving, and building practical tech solutions. I enjoy turning ideas into functional systems and continuously improving my skills through hands-on projects.",
  "I'm currently focused on learning backend development, understanding how databases, APIs, and system logic work together, and creating projects that solve real-world problems. I believe that mastering the fundamentals is more important than just writing code — I aim to understand how and why things work.",
  "Aside from programming, I have experience in video editing and digital creativity, which helps me approach projects with both technical and creative perspectives. I'm motivated, curious, and always eager to learn new technologies and improve my craft.",
  "My goal is to grow as a software engineer, contribute to meaningful projects, and build a solid foundation for a future career in technology."
])
</script>

<template>
  <section class="about">
    <div class="about-container">
      <h2>About</h2>
      <p v-for="(paragraph, index) in aboutText" :key="index" class="about-text">{{ paragraph }}</p>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 50px 20px;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
}

.about-container {
  max-width: 900px;
  margin: 0 auto;
}

.about-container h2 {
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.about-text {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .about {
    padding: 40px 20px;
  }

  .about-container h2 {
    font-size: 1.4rem;
  }
}
</style>

