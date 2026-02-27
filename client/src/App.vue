<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="nav-brand">Portfolio</div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
<template>
  <div class="home">
    <section class="hero">
      <h1>Hi, I'm Fab</h1>
      <p>Full Stack Developer | MEVN Specialist</p>
      <button class="cta-btn">View My Work</button>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 2rem;
}

.cta-btn {
  background: #4CAF50;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.cta-btn:hover {
  background: #45a049;
}
</style>
.navbar {
  background: #333;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #4CAF50;
}
</style>