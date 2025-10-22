<template>
  <div class="sponsors-page">
    <!-- Hero Section -->
    <section class="sponsors-hero">
      <NuxtImg 
        src="/sponsors-hero.jpg" 
        alt="Sponsors"
        class="sponsors-hero__image"
        format="webp"
        quality="80"
      />
      <div class="sponsors-hero__overlay"></div>
      <div class="sponsors-hero__content">
        <h1>Our Sponsors</h1>
        <p>Sponsorships that power innovation and sustainable technology</p>
      </div>
    </section>

    <!-- Premier Sponsors -->
    <section class="sponsor-tier premier-tier">
      <div class="sponsor-tier__container">
        <h2 class="tier-title">Premier</h2>
        <p class="tier-subtitle">Our premier sponsors who make our mission possible</p>
        <div class="sponsor-grid premier-grid">
          <div class="sponsor-card premier-card">
            <NuxtImg src="/sponsors/assu.png" alt="Stanford ASSU" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Stanford ASSU</h3>
          </div>
          <div class="sponsor-card premier-card">
            <NuxtImg src="/sponsors/cars.png" alt="Stanford CARS" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Stanford CARS</h3>
          </div>
          <div class="sponsor-card premier-card">
            <NuxtImg src="/sponsors/fictiv.jpg" alt="Fictiv" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Fictiv</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Diamond Sponsors -->
    <section class="sponsor-tier diamond-tier">
      <div class="sponsor-tier__container">
        <h2 class="tier-title">Diamond</h2>
        <div class="sponsor-grid diamond-grid">
          <div class="sponsor-card diamond-card">
            <NuxtImg src="/sponsors/autodesk.png" alt="Autodesk" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Autodesk</h3>
          </div>
          <div class="sponsor-card diamond-card">
            <NuxtImg src="/sponsors/tektronix.png" alt="Tektronix" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Tektronix</h3>
          </div>
          <div class="sponsor-card diamond-card">
            <NuxtImg src="/sponsors/stanfordengineering.png" alt="Stanford Engineering" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Stanford Engineering</h3>
          </div>
          <div class="sponsor-card diamond-card">
            <NuxtImg src="/sponsors/altium.png" alt="Altium" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Altium</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Platinum Sponsors -->
    <section class="sponsor-tier platinum-tier">
      <div class="sponsor-tier__container">
        <h2 class="tier-title">Platinum</h2>
        <div class="sponsor-grid platinum-grid">
          <div class="sponsor-card platinum-card">
            <NuxtImg src="/sponsors/siemens.png" alt="Siemens" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Siemens</h3>
          </div>
          <div class="sponsor-card platinum-card">
            <NuxtImg src="/sponsors/tomkat.png" alt="TomKat Energy Center" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>TomKat Energy Center</h3>
          </div>
          <div class="sponsor-card platinum-card">
            <NuxtImg src="/sponsors/admiral.png" alt="Admiral Instruments" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Admiral Instruments</h3>
          </div>
          <div class="sponsor-card platinum-card">
            <NuxtImg src="/sponsors/amprius.png" alt="Amprius" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Amprius</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Gold Sponsors -->
    <section class="sponsor-tier gold-tier">
      <div class="sponsor-tier__container">
        <h2 class="tier-title">Gold</h2>
        <div class="sponsor-grid gold-grid">
          <div class="sponsor-card gold-card">
            <NuxtImg src="/sponsors/pointwise.jpg" alt="Pointwise" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Pointwise</h3>
          </div>
          <div class="sponsor-card gold-card">
            <NuxtImg src="/sponsors/sierracircuits.png" alt="Sierra Circuits" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Sierra Circuits</h3>
          </div>
          <div class="sponsor-card gold-card">
            <NuxtImg src="/sponsors/airtech.jpg" alt="Airtech" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Airtech</h3>
          </div>
          <div class="sponsor-card gold-card">
            <NuxtImg src="/sponsors/uniformity.jpg" alt="Uniformity Labs" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Uniformity Labs</h3>
          </div>
          <div class="sponsor-card gold-card">
            <NuxtImg src="/sponsors/hakko.png" alt="Hakko" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Hakko</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Silver Sponsors -->
    <section class="sponsor-tier silver-tier">
      <div class="sponsor-tier__container">
        <h2 class="tier-title">Silver</h2>
        <div class="sponsor-grid silver-grid">
          <div class="sponsor-card silver-card">
            <NuxtImg src="/sponsors/3m.png" alt="3M" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>3M</h3>
          </div>
          <div class="sponsor-card silver-card">
            <NuxtImg src="/sponsors/digikey.png" alt="DigiKey" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>DigiKey</h3>
          </div>
          <div class="sponsor-card silver-card">
            <NuxtImg src="/sponsors/evonik.png" alt="Evonik" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Evonik</h3>
          </div>
          <div class="sponsor-card silver-card">
            <NuxtImg src="/sponsors/fibrotech.jpg" alt="FibroTek" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>FibroTek</h3>
          </div>
          <div class="sponsor-card silver-card">
            <NuxtImg src="/sponsors/iar.jpg" alt="IAR Systems" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>IAR Systems</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Bronze Sponsors -->
    <section class="sponsor-tier bronze-tier">
      <div class="sponsor-tier__container">
        <h2 class="tier-title">Bronze</h2>
        <div class="sponsor-grid bronze-grid">
          <div class="sponsor-card bronze-card">
            <NuxtImg src="/sponsors/nrg.png" alt="NRG" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>NRG</h3>
          </div>
          <div class="sponsor-card bronze-card">
            <NuxtImg src="/sponsors/openbuilds.png" alt="OpenBuilds" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>OpenBuilds</h3>
          </div>
          <div class="sponsor-card bronze-card">
            <NuxtImg src="/sponsors/proset.png" alt="ProSet" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>ProSet</h3>
          </div>
          <div class="sponsor-card bronze-card">
            <NuxtImg src="/sponsors/sika.png" alt="Sika" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>Sika</h3>
          </div>
          <div class="sponsor-card bronze-card">
            <NuxtImg src="/sponsors/wattlab.png" alt="WattLab" class="sponsor-card__logo" loading="lazy" format="webp" />
            <h3>WattLab</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Become a Sponsor CTA -->
    <section class="sponsor-cta">
      <NuxtImg 
        src="/sponsor-cta.jpg" 
        alt="Partnership"
        class="sponsor-cta__image"
        format="webp"
        quality="80"
      />
      <div class="sponsor-cta__overlay"></div>
      <div class="sponsor-cta__content">
        <h2>Become a Sponsor</h2>
        <p>Join us in pushing the boundaries of sustainable transportation technology</p>
        <NuxtLink to="/contact" class="cta-button">Sponsor Us</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sponsors-page {
  background: #f8f8f8;
}

/* Hero Section */
.sponsors-hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.sponsors-hero__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sponsors-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.45) 100%
  );
}

.sponsors-hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 2rem;
  max-width: 900px;
}

.sponsors-hero__content h1 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
  text-shadow: 0 4px 40px rgba(0, 0, 0, 0.8);
}

.sponsors-hero__content p {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  line-height: 1.6;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.7);
}

/* Sponsor Tiers */
.sponsor-tier {
  padding: clamp(3.5rem, 7vw, 5rem) clamp(1.5rem, 5vw, 4rem);
}

.premier-tier { background: #fff; }
.diamond-tier { background: #f8f8f8; }
.platinum-tier { background: #fff; }
.gold-tier { background: #f8f8f8; }
.silver-tier { background: #fff; }
.bronze-tier { background: #f8f8f8; }

.sponsor-tier__container {
  max-width: 1200px;
  margin: 0 auto;
}

.tier-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  text-align: center;
}

.tier-subtitle {
  font-size: 1.125rem;
  color: #666;
  text-align: center;
  margin: 0 0 3rem 0;
}

/* Sponsor Grids */
.sponsor-grid {
  display: grid;
  gap: 2rem;
}

.premier-grid {
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;
  margin: 0 auto;
}

.diamond-grid,
.platinum-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.gold-grid,
.silver-grid,
.bronze-grid {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

/* Sponsor Cards */
.sponsor-card {
  background: #fff;
  border-radius: 0.75rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  min-height: 180px;
}

.sponsor-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
}

.premier-card {
  min-height: 220px;
  box-shadow: 0 4px 12px rgba(140, 21, 21, 0.15);
}

.premier-card:hover {
  box-shadow: 0 12px 24px rgba(140, 21, 21, 0.25);
}

.sponsor-card__logo {
  width: 100%;
  max-width: 180px;
  height: auto;
  object-fit: contain;
  margin-bottom: 1rem;
}

.premier-card .sponsor-card__logo {
  max-width: 220px;
}

.sponsor-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.premier-card h3 {
  font-size: 1.25rem;
}

/* CTA Section */
.sponsor-cta {
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.sponsor-cta__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sponsor-cta__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(140, 21, 21, 0.75) 0%,
    rgba(140, 21, 21, 0.65) 100%
  );
}

.sponsor-cta__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 3rem 2rem;
  max-width: 700px;
}

.sponsor-cta__content h2 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.sponsor-cta__content p {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: #fff;
  color: #8C1515;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 999px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
}

@media (max-width: 768px) {
  .sponsors-hero {
    height: 50vh;
  }

  .sponsor-tier {
    padding: 3rem 1.5rem;
  }

  .tier-subtitle {
    margin-bottom: 2rem;
  }

  .sponsor-grid {
    gap: 1.5rem;
  }

  .premier-grid {
    grid-template-columns: 1fr;
  }

  .diamond-grid,
  .platinum-grid,
  .gold-grid,
  .silver-grid,
  .bronze-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }

  .sponsor-card {
    padding: 1.5rem;
    min-height: 150px;
  }

  .premier-card {
    min-height: 180px;
  }

  .sponsor-cta {
    min-height: 400px;
  }

  .sponsor-cta__content {
    padding: 2rem 1.5rem;
  }
}
</style>

