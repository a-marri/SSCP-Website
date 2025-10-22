<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <img src="/src/assets/images/race-photos/fsgp7.jpeg" alt="Stanford Solar Car" class="hero-bg-image">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title"><span class="highlight">Solar Raycing.</span><br>Since 1989.</h1>
        <p class="hero-subtitle">Join Stanford's premier solar car team and push the boundaries of engineering and sustainable technology.</p>
        <div class="hero-buttons">
          <a href="#about" class="btn-secondary">Learn More</a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about " v-motion-fade-up>
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>Innovation in Motion</h2>
            <p>We're a student-run organization pushing the boundaries of sustainable transportation through cutting-edge solar technology and engineering excellence.</p>
            <div class="about-stats">
              <div class="stat-item">
                <span class="stat-number" ref="stat1">0</span>
                <span class="stat-label">Years Racing</span>
              </div>
              <div class="stat-item">
                <span class="stat-number" ref="stat2">0</span>
                <span class="stat-label">of Miles Raced</span>
              </div>
            </div>
          </div>
          <div class="about-image">
            <div id="imageSequence" class="image-sequence">
              <img id="sequenceImage" class="about-video" src="/src/assets/images/race-photos/fsgp7.jpeg" alt="Solar Car Team" />
              <video id="hiddenVideo" style="display: none;" muted playsinline preload="metadata">
                <source src="/src/assets/images/race-photos/DJI 0138.mp4" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Racing Section -->
    <section id="racing" class="racing " v-motion-fade-up>
      <div class="racing-content">
        <div class="racing-text">
          <h2>Racing Excellence</h2>
          <p>Competing at the highest level in international solar car competitions, including our recent 2nd place finish out of 30+ teams at the 2025 Formula Sun Grand Prix.</p>
          <div class="racing-button-container">
            <a href="https://www.americansolarchallenge.org/the-competition/2025-formula-sun-grand-prix/?tab=laps-sov#results" target="_blank" class="btn-secondary">View FSGP25 Results</a>
          </div>
        </div>
        <div class="racing-image">
          <img src="/src/assets/images/race-photos/17.jpg" alt="Solar Car Racing" class="racing-img">
        </div>
      </div>
      <div class="racing-video-container">
        <iframe
          src="https://drive.google.com/file/d/1wtQur5sP1Bd6tsuMRV88jg9vKh8WhB4L/preview"
          width="640"
          height="480"
          allow="autoplay">
        </iframe>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery" v-show="galleryImages.length > 0">
      <div class="container">
        <div class="section-header">
          <h2>Race Gallery</h2>
          <p>2025 Formula Sun Grand Prix - 2nd Place Finish</p>
        </div>
        <div class="gallery-grid">
          <div v-for="(image, index) in displayedImages" :key="index" class="gallery-item" @click="openModal(index)">
            <img :src="image" :alt="`Gallery image ${index + 1}`" loading="lazy">
          </div>
        </div>

        <div class="gallery-controls">
          <button v-if="displayedImages.length < galleryImages.length" @click="loadMore" class="btn btn-outline">
            Load More Photos
          </button>
          <span class="image-count">{{ displayedImages.length }} of {{ galleryImages.length }} photos</span>
        </div>
      </div>
    </section>

    <!-- Quick Links Section -->
    <section class="quick-links " v-motion-fade-up>
      <div class="container">
        <div class="section-header">
          <h2>Explore Our Project</h2>
          <p>Discover more about our team, mission, and how you can get involved</p>
        </div>

        <div class="links-grid">
          <router-link to="/team" class="link-card">
            <div class="link-icon">TEAM</div>
            <h3>Our Team</h3>
            <p>Meet the passionate students driving innovation in solar car technology</p>
          </router-link>

          <router-link to="/faculty" class="link-card">
            <div class="link-icon">FACULTY</div>
            <h3>Advisory Boards</h3>
            <p>Expert guidance from Stanford's leading researchers and educators</p>
          </router-link>

          <router-link to="/sponsors" class="link-card">
            <div class="link-icon">SPONSORS</div>
            <h3>Our Sponsors</h3>
            <p>Sponsors that power innovation and sustainable technology</p>
          </router-link>

          <router-link to="/join" class="link-card">
            <div class="link-icon">JOIN</div>
            <h3>Join Us</h3>
            <p>Be part of the future of sustainable transportation</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Join Section -->
    <section id="join" class="join " v-motion-fade-up>
      <div class="join-background">
        <img src="/src/assets/images/race-photos/fsgp2.jpeg" alt="Team Working" class="join-bg-image">
        <div class="join-overlay"></div>
      </div>
      <div class="join-content">
        <h2>Ready?</h2>
        <p>Join the Stanford Solar Car Project and be part of the future</p>
        <div class="join-buttons">
          <router-link to="/join" class="btn-primary large">Join Our Team</router-link>
          <router-link to="/sponsors" class="btn-primary large">Support Us</router-link>
        </div>
      </div>
    </section>

    <!-- Image Modal -->
    <div v-if="modalImage !== null" class="modal" @click="closeModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <img :src="displayedImages[modalImage]" alt="Gallery Image">
        <div class="modal-nav">
          <button @click.stop="prevImage" class="nav-btn">&larr;</button>
          <button @click.stop="nextImage" class="nav-btn">&rarr;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      galleryImages: [],
      displayedImages: [],
      imagesPerLoad: 12,
      modalImage: null,
      statsAnimated: false,
      statsObserver: null
    }
  },
  mounted() {
    this.loadGalleryImages()
    this.setupStatsObserver()
  },
  beforeUnmount() {
    // Clean up observer to prevent memory leaks
    if (this.statsObserver) {
      this.statsObserver.disconnect()
    }
  },
  methods: {
    loadGalleryImages() {
      // Load gallery images dynamically
      const imageCount = 20 // Adjust based on actual images
      for (let i = 1; i <= imageCount; i++) {
        this.galleryImages.push(`/src/assets/images/race-photos/${i}.jpg`)
      }
      this.displayedImages = this.galleryImages.slice(0, this.imagesPerLoad)
    },
    loadMore() {
      const currentLength = this.displayedImages.length
      const newImages = this.galleryImages.slice(currentLength, currentLength + this.imagesPerLoad)
      this.displayedImages.push(...newImages)
    },
    openModal(index) {
      this.modalImage = index
    },
    closeModal() {
      this.modalImage = null
    },
    nextImage() {
      if (this.modalImage < this.displayedImages.length - 1) {
        this.modalImage++
      }
    },
    prevImage() {
      if (this.modalImage > 0) {
        this.modalImage--
      }
    },
    setupStatsObserver() {
      const observerOptions = {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px'
      }

      this.statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.statsAnimated) {
            this.statsAnimated = true
            this.animateStats()
            this.statsObserver.unobserve(entry.target) // Stop observing after animation starts
          }
        })
      }, observerOptions)

      // Observe the stats container
      const statsElement = this.$el.querySelector('.about-stats')
      if (statsElement) {
        this.statsObserver.observe(statsElement)
      }
    },
    animateStats() {
      this.animateValue(this.$refs.stat1, 0, 30, 2000, '+')
      this.animateValue(this.$refs.stat2, 0, 10000, 2000, '+')
    },
    animateValue(element, start, end, duration, suffix) {
      if (!element) return

      const startTime = Date.now()
      const range = end - start

      // Easing function for smooth animation
      const easeOutQuad = (t) => t * (2 - t)

      const animate = () => {
        const currentTime = Date.now()
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Apply easing
        const easedProgress = easeOutQuad(progress)
        const current = Math.round(start + range * easedProgress)

        element.textContent = current.toLocaleString() + suffix

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }
}
</script>

<style scoped>
/* Styles specific to HomeView will be here if needed */
</style>