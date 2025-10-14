<template>
  <div class="join">
    <!-- Join Hero Section -->
    <section class="join-hero">
      <div class="join-hero-background">
        <img src="/src/assets/images/race-photos/fsgp19.jpg" alt="Join Our Team" class="join-hero-bg-image">
        <div class="join-hero-overlay"></div>
      </div>
      <div class="join-hero-content">
        <h1 class="join-hero-title">Join our TEAM</h1>
        <p class="join-hero-subtitle">Join the Stanford Solar Car Project and be part of the future</p>
      </div>
    </section>

    <!-- Membership Requirements Section -->
    <section class="membership-requirements " v-motion-fade-up>
      <div class="container">
        <div class="section-header">
          <h2>Membership Requirements</h2>
        </div>

        <div class="requirements-list">
          <div class="requirement-item">
            <div class="requirement-number">1.</div>
            <div class="requirement-text">Currently matriculated Stanford students.</div>
          </div>

          <div class="requirement-item">
            <div class="requirement-number">2.</div>
            <div class="requirement-text">Respectful and caring of others.</div>
          </div>

          <div class="requirement-item">
            <div class="requirement-number">3.</div>
            <div class="requirement-text">Excited and willing to learn!</div>
          </div>
        </div>

        <div class="application-cta-simple">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc839PzDu1kbfQXJCucLl1iy2lUjgSx7Cp1YgHADFqEoVlgHA/viewform?usp=dialog" class="btn-primary large" target="_blank">Click here</a>
          <p class="application-note">Make sure you are logged in with your Stanford account. If you are still having troubles, message us through the Contact Us page.</p>
        </div>
      </div>
    </section>

    <!-- Team Structure Section -->
    <section class="team-structure " v-motion-fade-up>
      <div class="container">
        <div class="section-header">
          <h2>Team Structure</h2>
          <p>Our diverse team is organized into specialized subteams, each contributing unique expertise to our solar car project.</p>
        </div>

        <div class="team-roles-grid">
          <div v-for="role in teamRoles" :key="role.title" class="team-role-card">
            <div class="role-icon">{{ role.icon }}</div>
            <h3>{{ role.title }}</h3>
            <p>{{ role.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonial-section " v-motion-fade-up>
      <div class="container">
        <div class="testimonial-content">
          <blockquote class="testimonial-quote">
            "Participating in the Stanford Solar Car Project was a wonderful experience for me that really taught me how to make an engineering design function in the real world in a way that classes never could. For me, this was one of the best ways to learn these hands-on lessons that I am still using today."
          </blockquote>
          <div class="testimonial-author">
            <p class="author-name">JB Straubel</p>
            <p class="author-title">Tesla co-founder and former CTO, CEO Redwood Materials</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Application CTA -->
    <section class="application-cta " v-motion-fade-up>
      <div class="application-cta-background">
        <img src="/src/assets/images/race-photos/fsgp20.jpg" alt="Team Working" class="application-cta-bg-image">
        <div class="application-cta-overlay"></div>
      </div>
      <div class="application-cta-content">
        <h2>Ready to Join?</h2>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc839PzDu1kbfQXJCucLl1iy2lUjgSx7Cp1YgHADFqEoVlgHA/viewform?usp=dialog" class="btn-primary large" target="_blank">Join Now</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'JoinView',
  data() {
    return {
      teamRoles: [
        {
          icon: 'ARRAY',
          title: 'Array',
          description: 'Design and optimize the solar panel systems for maximum energy capture.'
        },
        {
          icon: 'BATT',
          title: 'Battery',
          description: 'Develop and manage the energy storage systems that power our solar car.'
        },
        {
          icon: 'BIZ',
          title: 'Business',
          description: 'Handle sponsorships, outreach, and the business side of our operations.'
        },
        {
          icon: 'ELEC',
          title: 'Electrical',
          description: 'Develop the electrical systems, wiring, and power management.'
        },
        {
          icon: 'MECH',
          title: 'Mechanical',
          description: 'Design and build the mechanical systems, aerodynamic profile, and composite structures of the car.'
        },
        {
          icon: 'OPS',
          title: 'Operations',
          description: 'Coordinate logistics, planning, and day-to-day team operations.'
        },
        {
          icon: 'CODE',
          title: 'Software',
          description: 'Develop software for data logging, telemetry, car control systems, and race strategy optimization.'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Join view specific styles */
.requirement-item {
  display: flex;
  margin-bottom: 1rem;
  align-items: flex-start;
}

.requirement-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: #8c1515;
  margin-right: 1rem;
  min-width: 30px;
}

.requirement-text {
  flex: 1;
  font-size: 1.1rem;
}

.application-cta-simple {
  text-align: center;
  margin-top: 2rem;
}

.application-note {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;
}

.testimonial-quote {
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.8;
  margin: 0;
  padding: 2rem;
  background: #f8f8f8;
  border-left: 4px solid #8c1515;
}

.testimonial-author {
  margin-top: 1rem;
  text-align: right;
}

.author-name {
  font-weight: bold;
  margin: 0;
}

.author-title {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}
</style>