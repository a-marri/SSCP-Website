<template>
  <div class="sponsors">
    <!-- Sponsors Hero Section -->
    <section class="sponsors-hero">
      <div class="sponsors-hero-background">
        <img src="/src/assets/images/race-photos/fsgp9.jpg" alt="Sponsors" class="sponsors-hero-bg-image">
        <div class="sponsors-hero-overlay"></div>
      </div>
      <div class="sponsors-hero-content">
        <h1 class="sponsors-hero-title">Our Sponsors</h1>
        <p class="sponsors-hero-subtitle">Sponsorships that power innovation and sustainable technology</p>
      </div>
    </section>

    <!-- Premier Sponsors Section -->
    <section class="premier-sponsors " v-motion-fade-up>
      <div class="container">
        <div class="section-header">
          <h2>Premier</h2>
          <p>Our premier sponsors who make our mission possible</p>
        </div>

        <div class="sponsor-grid premier">
          <div v-for="sponsor in premierSponsors" :key="sponsor.name" class="sponsor-card premier">
            <div class="sponsor-logo">
              <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-img">
            </div>
            <div class="sponsor-info">
              <h3>{{ sponsor.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Diamond Sponsors Section -->
    <section class="diamond-sponsors " v-motion-fade-up>
      <div class="container">
        <div class="section-header">
          <h2>Diamond</h2>
        </div>

        <div class="sponsor-grid diamond">
          <div v-for="sponsor in diamondSponsors" :key="sponsor.name" class="sponsor-card diamond">
            <div class="sponsor-logo">
              <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-img">
            </div>
            <div class="sponsor-info">
              <h3>{{ sponsor.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platinum Sponsors Section -->
    <section class="platinum-sponsors " v-motion-fade-up>
      <div class="container">
        <div class="section-header">
          <h2>Platinum</h2>
        </div>

        <div class="sponsor-grid platinum">
          <div v-for="sponsor in platinumSponsors" :key="sponsor.name" class="sponsor-card platinum">
            <div class="sponsor-logo">
              <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-img">
            </div>
            <div class="sponsor-info">
              <h3>{{ sponsor.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gold Sponsors Section -->
    <section class="gold-sponsors " v-motion-fade-up>
      <div class="container">
        <div class="section-header">
          <h2>Gold</h2>
        </div>

        <div class="sponsor-grid gold">
          <div v-for="sponsor in goldSponsors" :key="sponsor.name" class="sponsor-card gold">
            <div class="sponsor-logo">
              <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-img">
            </div>
            <div class="sponsor-info">
              <h3>{{ sponsor.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Silver Sponsors Section -->
    <section class="silver-sponsors " v-motion-fade-up>
      <div class="container">
        <div class="section-header">
          <h2>Silver</h2>
        </div>

        <div class="sponsor-grid silver">
          <div v-for="sponsor in silverSponsors" :key="sponsor.name" class="sponsor-card silver">
            <div class="sponsor-logo">
              <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-img">
            </div>
            <div class="sponsor-info">
              <h3>{{ sponsor.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bronze Sponsors Section -->
    <section class="bronze-sponsors " v-motion-fade-up>
      <div class="container">
        <div class="section-header">
          <h2>Bronze</h2>
        </div>

        <div class="sponsor-grid bronze">
          <div v-for="sponsor in bronzeSponsors" :key="sponsor.name" class="sponsor-card bronze">
            <div class="sponsor-logo">
              <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-img">
            </div>
            <div class="sponsor-info">
              <h3>{{ sponsor.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Become a Sponsor CTA -->
    <section class="become-sponsor-cta " v-motion-fade-up>
      <div class="become-sponsor-background">
        <img src="/src/assets/images/race-photos/fsgp18.jpg" alt="Partnership" class="become-sponsor-bg-image">
        <div class="become-sponsor-overlay"></div>
      </div>
      <div class="become-sponsor-content">
        <h2>Become a Sponsor</h2>
        <p>Join us in pushing the boundaries of sustainable transportation technology</p>
        <router-link to="/contact" class="btn-primary large">Sponsor Us</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SponsorsView',
  data() {
    return {
      premierSponsors: [
        { name: 'Stanford ASSU', logo: '/src/assets/images/sponsors/assu.png' },
        { name: 'Stanford CARS', logo: '/src/assets/images/sponsors/cars.png' },
        { name: 'Fictiv', logo: '/src/assets/images/sponsors/fictiv.jpg' }
      ],
      diamondSponsors: [
        { name: 'Autodesk', logo: '/src/assets/images/sponsors/autodesk.png' },
        { name: 'Tektronix', logo: '/src/assets/images/sponsors/tektronix.png' },
        { name: 'Stanford Engineering', logo: '/src/assets/images/sponsors/stanfordengineering.png' },
        { name: 'Altium', logo: '/src/assets/images/sponsors/altium.png' }
      ],
      platinumSponsors: [
        { name: 'Siemens', logo: '/src/assets/images/sponsors/siemens.png' },
        { name: 'TomKat Energy Center', logo: '/src/assets/images/sponsors/tomkat.png' },
        { name: 'Admiral Instruments', logo: '/src/assets/images/sponsors/admiral.png' },
        { name: 'Aprius', logo: '/src/assets/images/sponsors/amprius.png' }
      ],
      goldSponsors: [
        { name: 'Pointwise', logo: '/src/assets/images/sponsors/pointwise.jpg' },
        { name: 'Sierra Circuits', logo: '/src/assets/images/sponsors/sierracircuits.png' },
        { name: 'Airtech', logo: '/src/assets/images/sponsors/airtech.jpg' },
        { name: 'Uniformity Labs', logo: '/src/assets/images/sponsors/uniformity.jpg' },
        { name: 'Hakko', logo: '/src/assets/images/sponsors/hakko.png' }
      ],
      silverSponsors: [
        { name: '3M', logo: '/src/assets/images/sponsors/3m.png' },
        { name: 'DigiKey', logo: '/src/assets/images/sponsors/digikey.png' },
        { name: 'Evonik', logo: '/src/assets/images/sponsors/evonik.png' },
        { name: 'FibroTek', logo: '/src/assets/images/sponsors/fibrotech.jpg' },
        { name: 'IAR Systems', logo: '/src/assets/images/sponsors/iar.jpg' }
      ],
      bronzeSponsors: [
        { name: 'NRG', logo: '/src/assets/images/sponsors/nrg.png' },
        { name: 'OpenBuilds', logo: '/src/assets/images/sponsors/openbuilds.png' },
        { name: 'ProSet', logo: '/src/assets/images/sponsors/proset.png' },
        { name: 'Sika', logo: '/src/assets/images/sponsors/sika.png' },
        { name: 'WattLab', logo: '/src/assets/images/sponsors/wattlab.png' }
      ]
    }
  }
}
</script>

<style scoped>
/* Sponsors view specific styles */
</style>