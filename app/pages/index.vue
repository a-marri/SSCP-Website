<template>
  <div class="landing">
    <section class="hero">
      <div class="hero__media" role="presentation">
        <div class="hero__iframe-wrapper">
          <div class="video-loading-overlay"></div>
          <iframe
            id="bunny-stream-embed"
            src="https://iframe.mediadelivery.net/embed/516805/1a8364a3-5a57-4b12-b162-7ec444bf91ed?autoplay=true&loop=true&muted=true&preload=true&responsive=true&controls=false"
            title="Stanford Solar Car in action"
            loading="eager"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="hero__overlay"></div>
      </div>
      <div class="hero__content">
        <!-- <p class="eyebrow">Stanford Solar Car Project</p> -->
        <h1 class="hero-title">Pushing the limits of solar-powered racing.</h1>
        <p class="hero-description">
          Join the student-led team designing, building, and racing world-class
          solar vehicles across the globe. Innovation, teamwork, and relentless
          pursuit of a sustainable future drive everything we do.
        </p>
        <div class="hero__actions hero-actions">
          <NuxtLink to="/team" class="btn primary">Meet the Team</NuxtLink>
          <NuxtLink to="/donate" class="btn ghost">Support the Mission</NuxtLink>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="about__container">
        <h2 class="about__title">Driven by Innovation</h2>
        <div class="about__content">
          <p>
            Founded in 1989, the Stanford Solar Car Project is an entirely student-run, non-profit organization fueled by its members' passion for environmentally sustainable technology. We provide a unique opportunity for Stanford students to gain valuable hands-on engineering and business experience while raising community awareness of clean energy vehicles. Every two years, the team designs, builds and races a solar car across the Australian Outback in the Bridgestone World Solar Challenge.
          </p>
          <p>
            In 2013, our team finished 4th overall and we were North America's No. 1 team. In 2015 and 2017 we finished 6th and 9th respectively. Building off this string of top-10 finishes, we are pushing ourselves to be more creative, innovative, and competitive than ever going into the next race.
          </p>
        </div>
      </div>
    </section>

    <section class="cards">
      <div class="cards__container">
        <div class="card">
          <NuxtImg 
            src="/card1.jpg" 
            alt="Team members"
            class="card__image"
            loading="lazy"
            format="webp"
            quality="80"
          />
          <div class="card__overlay"></div>
          <div class="card__content">
            <h3 class="card__title">OUR TEAM</h3>
            <div class="card__hover-content">
              <p class="card__description">Our team is composed of an amazing group of engineers, innovators and problem solvers.</p>
              <NuxtLink to="/team" class="card__link">Learn More →</NuxtLink>
            </div>
          </div>
        </div>

        <div class="card">
          <NuxtImg 
            src="/card2.jpg" 
            alt="Solar car"
            class="card__image"
            loading="lazy"
            format="webp"
            quality="80"
          />
          <div class="card__overlay"></div>
          <div class="card__content">
            <h3 class="card__title">OUR CARS</h3>
            <div class="card__hover-content">
              <p class="card__description">From Black Mamba to Xenith and before, our project has produced a number of unique and impressive vehicles. Take a closer look!</p>
              <NuxtLink to="/cars" class="card__link">Learn More →</NuxtLink>
            </div>
          </div>
        </div>

        <div class="card">
          <NuxtImg 
            src="/card3.jpg" 
            alt="Workshop with sparks"
            class="card__image"
            loading="lazy"
            format="webp"
            quality="80"
          />
          <div class="card__overlay"></div>
          <div class="card__content">
            <h3 class="card__title">OUR SPONSORS</h3>
            <div class="card__hover-content">
              <p class="card__description">Our sponsors make everything we do possible, while acting as leaders in industry, sustainability, and support of the next generation.</p>
              <NuxtLink to="/sponsors" class="card__link">Learn More →</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="stats__container">
        <div class="stat">
          <div class="stat__number" data-target="36">
            <span class="stat__digit" ref="stat1">0</span>
          </div>
          <div class="stat__label">Years Since Founding</div>
        </div>

        <div class="stat">
          <div class="stat__number" data-target="100000">
            <span class="stat__digit" ref="stat2">0</span>
            <span class="stat__suffix">+</span>
          </div>
          <div class="stat__label">Solar Powered Miles</div>
        </div>

        <div class="stat">
          <div class="stat__number" data-target="14">
            <span class="stat__digit" ref="stat3">0</span>
          </div>
          <div class="stat__label">Cars Built</div>
        </div>

        <div class="stat">
          <div class="stat__number">
            <span class="stat__text" ref="countlessText">XXXXXXXXX</span>
          </div>
          <div class="stat__label">Memories Made</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const stat1 = ref(null);
const stat2 = ref(null);
const stat3 = ref(null);
const countlessText = ref(null);

const animateValue = (element, start, end, duration) => {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      element.textContent = end.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
};

const animateCountless = () => {
  const text = 'Countless';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const element = countlessText.value;
  
  if (!element) return;
  
  let resolved = 0;
  const letters = text.split('');
  let iterations = 0;
  const maxIterations = 15; // More iterations for more letter cycling
  
  const animate = () => {
    let display = letters.map((letter, index) => {
      if (index < resolved) {
        return letter;
      }
      return chars[Math.floor(Math.random() * chars.length)];
    }).join('');
    
    element.textContent = display;
    
    iterations++;
    
    // Resolve a letter every few iterations
    if (iterations % 3 === 0 && resolved < letters.length) {
      resolved++;
    }
    
    if (iterations < maxIterations || resolved < letters.length) {
      setTimeout(() => animate(), 30); // Faster cycling - 30ms
    } else {
      element.textContent = text; // Ensure final text is correct
    }
  };
  
  // Start immediately without delay
  animate();
};

const observeStats = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const target = parseInt(element.dataset.target);
        const digit = element.querySelector('.stat__digit');
        
        if (digit && !element.classList.contains('animated')) {
          element.classList.add('animated');
          animateValue(digit, 0, target, 2000);
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat__number[data-target]').forEach(stat => {
    observer.observe(stat);
  });

  // Observe the countless text
  const countlessObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && countlessText.value && !countlessText.value.classList.contains('animated')) {
        countlessText.value.classList.add('animated');
        animateCountless();
      }
    });
  }, { threshold: 0.5 });

  if (countlessText.value) {
    countlessObserver.observe(countlessText.value.parentElement);
  }
};

onMounted(() => {
  // Load Player.js script
  const script = document.createElement('script');
  script.src = 'https://assets.mediadelivery.net/playerjs/player-0.1.0.min.js';
  script.onload = () => {
    // Initialize Player.js after script loads
    const player = new window.playerjs.Player('bunny-stream-embed');
    
    player.on('ready', () => {
      // Hide controls and ensure autoplay
      player.play();
      player.mute();
    });

    // Hide loading overlay once video starts playing
    player.on('play', () => {
      const overlay = document.querySelector('.video-loading-overlay');
      if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 500);
      }
    });
  };
  document.head.appendChild(script);

  // Initialize stats animation observer
  observeStats();
});
</script>

<style scoped>
.landing {
  display: flex;
  flex-direction: column;
  gap: 0;
  background: #f8f8f8;
}

.hero {
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero__media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 1;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.15) 50%,
    rgba(0, 0, 0, 0.35) 100%
  );
  z-index: 1;
  pointer-events: none;
}

.hero__iframe-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.video-loading-overlay {
  position: absolute;
  inset: 0;
  background: #000;
  z-index: 10;
  transition: opacity 0.5s ease;
}

.hero__iframe-wrapper iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: 177.77vh;
  height: 56.25vw;
  transform: translate(-50%, -50%);
  border: none;
  pointer-events: none;
}

.hero__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  text-align: center;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 600;
  font-size: 0.875rem;
  color: #fff;
  margin: 0;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.hero-title {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.75rem, 6vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0;
  color: #fff;
  max-width: 850px;
  text-shadow: 0 4px 40px rgba(0, 0, 0, 0.8);
  line-height: 1.1;
  opacity: 0;
  animation: fadeInUp 1s ease forwards 0.3s;
}

.hero-description {
  font-family: 'Inter', sans-serif;
  margin: 0;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.95);
  max-width: 650px;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.7);
  opacity: 0;
  animation: fadeInUp 1s ease forwards 0.6s;
}

.hero-actions {
  opacity: 0;
  animation: fadeInUp 1s ease forwards 0.9s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn.primary {
  background: #8C1515;
  color: #fff;
  box-shadow: 0 12px 25px rgba(140, 21, 21, 0.5);
}

.btn.ghost {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
}

.btn.ghost:hover,
.btn.ghost:focus-visible {
  background: rgba(255, 255, 255, 0.25);
  border-color: #fff;
}

.about {
  padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
  background: #ffffff;
}

.about__container {
  max-width: 900px;
  margin: 0 auto;
}

.about__title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #1a1a1a;
  margin-bottom: 2.5rem;
  text-align: center;
}

.about__content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

.about__content p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #333;
  margin: 0;
  text-align: center;
}

@media (max-width: 768px) {
  .hero__content {
    padding: 1.5rem;
  }

  .eyebrow {
    font-size: 0.8rem;
    letter-spacing: 0.12em;
  }

  .hero__content p {
    font-size: 1rem;
  }

  .btn {
    padding: 0.875rem 1.5rem;
    font-size: 0.8rem;
  }

  .about {
    padding: 3rem 1.5rem;
  }

  .about__title {
    margin-bottom: 2rem;
  }

  .about__content p {
    font-size: 1rem;
  }
}

.cards {
  padding: clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem);
  background: #f8f8f8;
}

.cards__container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.card {
  position: relative;
  aspect-ratio: 4/3;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  z-index: 1;
}

.card__content {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  color: #fff;
}

.card__title {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.card:hover .card__title {
  opacity: 0;
  transform: translateY(-10px);
}

.card__hover-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.card:hover .card__hover-content {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.card__description {
  font-size: 1.125rem;
  line-height: 1.6;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
  max-width: 350px;
  margin-bottom: 1.5rem;
}

.card__link {
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  transition: transform 0.2s ease;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
}

.card__link:hover {
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .cards__container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .card:last-child {
    grid-column: 1 / -1;
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }
}

@media (max-width: 640px) {
  .cards {
    padding: 3rem 1.5rem;
  }

  .cards__container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card:last-child {
    grid-column: auto;
    max-width: none;
  }

  .card__description {
    font-size: 1rem;
  }

  .card__title {
    font-size: 1.5rem;
  }
  
  .card__link {
    font-size: 1rem;
  }
}

/* Stats Section */
.stats {
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem);
  background: linear-gradient(135deg, #8C1515 0%, #a01f1f 100%);
  position: relative;
  overflow: hidden;
}

.stats::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.4;
}

.stats__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  position: relative;
  z-index: 1;
}

.stat {
  text-align: center;
  color: #fff;
}

.stat__number {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.25rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  min-height: auto;
}

.stat__digit {
  display: inline-block;
  transition: transform 0.3s ease;
}

.stat__suffix {
  font-size: 0.7em;
  opacity: 0.9;
}

.stat__text {
  font-family: ui-monospace, 'SF Mono', 'Roboto Mono', 'Menlo', 'Consolas', monospace;
  font-weight: 800;
  letter-spacing: 0;
}

.stat__label {
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.95;
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .stats__container {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

@media (max-width: 640px) {
  .stats {
    padding: 3rem 1.5rem;
  }

  .stats__container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .stat__number {
    font-size: clamp(2rem, 8vw, 2.5rem);
    margin-bottom: 0.5rem;
  }

  .stat__label {
    font-size: 0.875rem;
  }
}
</style>
