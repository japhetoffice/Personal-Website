<script setup>
import { ref } from 'vue'

const profile = ref({
  name: 'Japhet Bastillada',
  title: 'Full Stack Developer | Computer Science',
  location: 'Plaridel, Misamis Occidental',
  bio: 'Building modern web applications and innovative solutions with JavaScript, Python, and modern frameworks.',
  email: 'japhetbas15@gmail.com',
  socials: {
    facebook: 'https://web.facebook.com/profile.php?id=61578085532776',
    github: '#',
    linkedin: '#'
  }
})
</script>

<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-profile">
        <div class="profile-image">
          <img src="@/assets/profile.png" alt="Japhet Bastillada" class="avatar-img">
        </div>
        
        <div class="profile-info">
          <div class="name-section">
            <h1>{{ profile.name }}</h1>
            <img src="@/assets/verified_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.svg" alt="Verified" class="verified-badge">
          </div>
          <p class="location">📍 {{ profile.location }}</p>
          <p class="title">{{ profile.title }}</p>
          
          <p class="bio">{{ profile.bio }}</p>

          <div class="hero-actions">
            <a :href="`mailto:${profile.email}`" class="btn btn-primary">Schedule a Call</a>
            <a :href="`mailto:${profile.email}`" class="btn btn-secondary">Send Email</a>
            <a href="#projects" class="btn btn-tertiary">View Portfolio</a>
          </div>

          <div class="hero-socials">
            <a :href="profile.socials.facebook" target="_blank" rel="noopener">Facebook</a>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 60px 20px;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  overflow: hidden;
}

.hero-container {
  max-width: 900px;
  margin: 0 auto;
}

.hero-profile {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;
  align-items: center;
}

.profile-image {
  display: flex;
  justify-content: center;
}

.avatar-img {
  width: 180px;
  height: 180px;
  border-radius: 12px;
  object-fit: cover;
  border: 2px solid var(--accent);
  box-shadow: var(--shadow-lg), 0 0 30px rgba(139, 92, 246, 0.15);
  animation: scaleUp 0.6s ease-out;
  transition: var(--transition);
}

.avatar-img:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-lg), 0 0 40px rgba(139, 92, 246, 0.3);
}

.profile-info h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 700;
  animation: slideIn 0.6s ease-out 0.1s both;
}

.name-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
}

.name-section h1 {
  margin: 0;
}

.verified-badge {
  width: 24px;
  height: 24px;
  opacity: 0.8;
  animation: fadeIn 0.8s ease-out 0.3s both;
}

.location {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 5px;
  animation: slideIn 0.6s ease-out 0.2s both;
}

.title {
  font-size: 1.1rem;
  color: var(--accent);
  margin-bottom: 20px;
  font-weight: 600;
  animation: slideIn 0.6s ease-out 0.3s both;
}

.bio {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 25px;
  font-size: 0.95rem;
  animation: fadeIn 0.6s ease-out 0.4s both;
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.hero-actions .btn {
  animation: slideInRight 0.6s ease-out;
  animation-fill-mode: both;
}

.hero-actions .btn:nth-child(1) {
  animation-delay: 0.5s;
}

.hero-actions .btn:nth-child(2) {
  animation-delay: 0.6s;
}

.hero-actions .btn:nth-child(3) {
  animation-delay: 0.7s;
}

.hero-socials {
  display: flex;
  gap: 20px;
  animation: fadeIn 0.6s ease-out 0.8s both;
}

.hero-socials a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: var(--transition);
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
  position: relative;
}

.hero-socials a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.3s ease;
}

.hero-socials a:hover {
  color: var(--accent);
}

.hero-socials a:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .hero {
    padding: 40px 20px;
  }

  .hero-profile {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .profile-info h1 {
    font-size: 1.8rem;
  }

  .avatar-img {
    width: 140px;
    height: 140px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>
