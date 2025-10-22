<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="contact-hero__content">
        <h1>Get in Touch</h1>
        <p>Have questions or want to sponsor our team? We'd love to hear from you.</p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-form-section">
      <div class="contact-form-section__container">
        <div class="contact-info">
          <h2>Contact Information</h2>
          <div class="info-item">
            <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <div>
              <h3>Email</h3>
              <a href="mailto:contact@stanfordsolarcar.com">contact@stanfordsolarcar.com</a>
            </div>
          </div>
          <div class="info-item">
            <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <div>
              <h3>Location</h3>
              <p>Stanford University<br>Stanford, CA 94305</p>
            </div>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="contact-form">
          <h2>Send us a Message</h2>
          
          <div v-if="successMessage" class="alert alert-success">
            {{ successMessage }}
          </div>
          
          <div v-if="errorMessage" class="alert alert-error">
            {{ errorMessage }}
          </div>

          <div class="form-group">
            <label for="name">Name *</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              required
              :disabled="isSubmitting"
              placeholder="Your name"
            />
          </div>

          <div class="form-group">
            <label for="email">Email *</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              :disabled="isSubmitting"
              placeholder="your.email@example.com"
            />
          </div>

          <div class="form-group">
            <label for="message">Message *</label>
            <textarea
              id="message"
              v-model="formData.message"
              required
              :disabled="isSubmitting"
              rows="6"
              placeholder="Tell us about your inquiry..."
            ></textarea>
          </div>

          <button type="submit" class="submit-button" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const handleSubmit = async () => {
  isSubmitting.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }
    });

    successMessage.value = 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.';
    
    // Reset form
    formData.name = '';
    formData.email = '';
    formData.message = '';
  } catch (error) {
    console.error('Form submission error:', error);
    errorMessage.value = 'Sorry, there was an error sending your message. Please try again or email us directly.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-page {
  background: #f8f8f8;
}

/* Hero Section */
.contact-hero {
  position: relative;
  padding: clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem);
  text-align: center;
  color: #fff;
  overflow: hidden;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/StanfordSolar_2.jpg');
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.contact-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(140, 21, 21, 0.85) 0%, rgba(160, 31, 31, 0.85) 100%);
  z-index: 1;
}

.contact-hero__content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.contact-hero__content h1 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
}

.contact-hero__content p {
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.6;
  opacity: 0.95;
}

/* Contact Form Section */
.contact-form-section {
  padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
  background: #fff;
}

.contact-form-section__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
}

/* Contact Info */
.contact-info h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.info-icon {
  width: 40px;
  height: 40px;
  color: #8C1515;
  flex-shrink: 0;
}

.info-item h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.info-item p,
.info-item a {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.info-item a {
  text-decoration: none;
  transition: color 0.2s ease;
}

.info-item a:hover {
  color: #8C1515;
}

/* Contact Form */
.contact-form {
  background: #f8f8f8;
  padding: 2.5rem;
  border-radius: 0.75rem;
}

.contact-form h2 {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  font-family: inherit;
  border: 2px solid #e0e0e0;
  border-radius: 0.5rem;
  background: #fff;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #8C1515;
}

.form-group input:disabled,
.form-group textarea:disabled {
  background: #f0f0f0;
  cursor: not-allowed;
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-button {
  width: 100%;
  padding: 1rem 2rem;
  background: #8C1515;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.submit-button:hover:not(:disabled) {
  background: #a01f1f;
  transform: translateY(-2px);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Alert Messages */
.alert {
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.alert-success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert-error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

@media (max-width: 768px) {
  .contact-hero {
    padding: 3rem 1.5rem;
  }

  .contact-form-section {
    padding: 3rem 1.5rem;
  }

  .contact-form-section__container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-form {
    padding: 2rem 1.5rem;
  }

  .info-item {
    margin-bottom: 1.5rem;
  }
}
</style>

