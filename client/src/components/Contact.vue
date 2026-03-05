<script setup>
import { ref } from 'vue'

const contact = ref({
  email: 'japhetbas15@gmail.com'
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <section class="contact">
    <div class="contact-container">
      <div class="contact-content">
        <h2 class="contact-title">Get in Touch</h2>
        <p class="contact-subtitle">I'd love to hear from you. Let's discuss your next project!</p>
        
        <div class="contact-actions">
          <a :href="`mailto:${contact.email}`" class="btn btn-primary">
            <span>📧 Send Email</span>
          </a>
          <a href="https://calendly.com" target="_blank" class="btn btn-secondary">
            <span>📅 Schedule a Call</span>
          </a>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} Japhet Bastillada. All rights reserved.</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <span class="divider">•</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.contact {
  padding: 80px 20px 60px;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-dark) 100%);
  border-bottom: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.contact::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
  pointer-events: none;
  animation: float 6s ease-in-out infinite;
}

.contact-container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.contact-content {
  animation: slideInUp 0.6s ease-out;
}

.contact-title {
  margin-bottom: 15px;
  font-size: 2.2rem;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: slideIn 0.6s ease-out 0.1s both;
}

.contact-subtitle {
  color: var(--text-secondary);
  margin-bottom: 40px;
  font-size: 1rem;
  animation: fadeIn 0.6s ease-out 0.2s both;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.contact-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeIn 0.6s ease-out 0.3s both;
}

.contact-actions .btn {
  position: relative;
  overflow: hidden;
}

.contact-actions .btn span {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer {
  max-width: 900px;
  margin: 60px auto 0;
  padding-top: 30px;
  border-top: 1px solid var(--border-color);
  text-align: center;
  position: relative;
  z-index: 1;
}

.footer-content {
  animation: fadeIn 0.6s ease-out 0.4s both;
}

.footer p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 15px;
}

.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 0.85rem;
}

.footer-links a {
  color: var(--text-secondary);
  transition: var(--transition);
  position: relative;
  padding-bottom: 2px;
}

.footer-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width 0.3s ease;
}

.footer-links a:hover {
  color: var(--accent);
}

.footer-links a:hover::after {
  width: 100%;
}

.divider {
  color: var(--border-color);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 60px 20px 40px;
  }

  .contact-title {
    font-size: 1.6rem;
  }

  .contact-subtitle {
    font-size: 0.9rem;
    margin-bottom: 30px;
  }

  .contact-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>

