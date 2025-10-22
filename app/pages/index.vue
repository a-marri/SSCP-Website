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
        <p class="eyebrow">Stanford Solar Car Project</p>
        <h1>Pushing the limits of solar-powered racing.</h1>
        <p>
          Join the student-led team designing, building, and racing world-class
          solar vehicles across the globe. Innovation, teamwork, and relentless
          pursuit of a sustainable future drive everything we do.
        </p>
        <div class="hero__actions">
          <NuxtLink to="/team" class="btn primary">Meet the Team</NuxtLink>
          <NuxtLink to="/donate" class="btn ghost">Support the Mission</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

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
});
</script>

<style scoped>
.landing {
  display: flex;
  flex-direction: column;
  gap: 0;
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
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.5) 100%
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

h1 {
  font-size: clamp(2.75rem, 6vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0;
  color: #fff;
  max-width: 850px;
  text-shadow: 0 4px 40px rgba(0, 0, 0, 0.8);
  line-height: 1.1;
}

.hero__content p {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.95);
  max-width: 650px;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.7);
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
  background: linear-gradient(135deg, #c1121f, #f15b2a);
  color: #fff;
  box-shadow: 0 12px 25px rgba(193, 18, 31, 0.5);
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
}
</style>
