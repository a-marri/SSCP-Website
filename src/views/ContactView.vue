<template>
  <div class="contact">
    <section class="contact-hero">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Get in touch with the Stanford Solar Car Project team</p>
      </div>
    </section>

    <section class="contact-content " v-motion-fade-up>
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Reach Out</h2>
            <p>We'd love to hear from you! Whether you're interested in joining the team, becoming a sponsor, or just learning more about what we do.</p>

            <div class="contact-details">
              <div class="contact-item">
                <h3>Email</h3>
                <p><a href="mailto:solarcar@stanford.edu">solarcar@stanford.edu</a></p>
              </div>

              <div class="contact-item">
                <h3>Social Media</h3>
                <p>
                  <a href="https://www.instagram.com/stanfordsolarcar/" target="_blank">Instagram</a> |
                  <a href="https://www.linkedin.com/company/stanfordsolarcar/" target="_blank">LinkedIn</a>
                </p>
              </div>

              <div class="contact-item">
                <h3>Location</h3>
                <p>Stanford University<br>Stanford, CA 94305</p>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <h2>Send Us a Message</h2>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="formData.name" required>
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="formData.email" required>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" v-model="formData.subject" required>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="formData.message" rows="5" required></textarea>
              </div>

              <button type="submit" class="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission
      console.log('Form submitted:', this.formData)
      // You would typically send this to a backend service
      alert('Thank you for your message! We will get back to you soon.')
      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
/* Contact view specific styles */
.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #8c1515;
}
</style>