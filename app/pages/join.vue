<template>
  <div class="join-page">
    <!-- Hero Section -->
    <section class="join-hero">
      <NuxtImg 
        src="/join-hero.jpg" 
        alt="Join Our Team"
        class="join-hero__image"
        format="webp"
        quality="80"
      />
      <div class="join-hero__overlay"></div>
      <div class="join-hero__content">
        <h1>Join our TEAM</h1>
        <p>Join the Stanford Solar Car Project and be part of the future</p>
      </div>
    </section>

    <!-- Membership Requirements Section -->
    <section class="requirements-section">
      <div class="requirements-section__container">
        <h2 class="section-title">Membership Requirements</h2>
        
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
        
        <div class="application-cta">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc839PzDu1kbfQXJCucLl1iy2lUjgSx7Cp1YgHADFqEoVlgHA/viewform?usp=dialog" 
             class="apply-button" 
             target="_blank">
            Apply Here
          </a>
          <p class="application-note">
            Make sure you are logged in with your Stanford account. If you are still having troubles, message us through the Contact Us page.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Structure Section -->
    <section class="team-structure">
      <div class="team-structure__container">
        <h2 class="section-title">Team Structure</h2>
        <p class="section-subtitle">Our diverse team is organized into specialized subteams, each contributing unique expertise to our solar car project.</p>
        
        <div class="roles-grid">
          <div class="role-card">
            <div class="role-icon">ARRAY</div>
            <h3>Array</h3>
            <p>Design and optimize the solar panel systems for maximum energy capture.</p>
          </div>
          
          <div class="role-card">
            <div class="role-icon">BATT</div>
            <h3>Battery</h3>
            <p>Develop and manage the energy storage systems that power our solar car.</p>
          </div>
          
          <div class="role-card">
            <div class="role-icon">BIZ</div>
            <h3>Business</h3>
            <p>Handle sponsorships, outreach, and the business side of our operations.</p>
          </div>
          
          <div class="role-card">
            <div class="role-icon">ELEC</div>
            <h3>Electrical</h3>
            <p>Develop the electrical systems, wiring, and power management.</p>
          </div>
          
          <div class="role-card">
            <div class="role-icon">MECH</div>
            <h3>Mechanical</h3>
            <p>Design and build the mechanical systems, aerodynamic profile, and composite structures of the car.</p>
          </div>
          
          <div class="role-card">
            <div class="role-icon">OPS</div>
            <h3>Operations</h3>
            <p>Coordinate logistics, planning, and day-to-day team operations.</p>
          </div>
          
          <div class="role-card">
            <div class="role-icon">CODE</div>
            <h3>Software</h3>
            <p>Develop software for data logging, telemetry, car control systems, and race strategy optimization.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonial-section">
      <div class="testimonial-section__container">
        <blockquote class="testimonial-quote">
          "Participating in the Stanford Solar Car Project was a wonderful experience for me that really taught me how to make an engineering design function in the real world in a way that classes never could. For me, this was one of the best ways to learn these hands-on lessons that I am still using today."
        </blockquote>
        <div class="testimonial-author">
          <p class="author-name">JB Straubel</p>
          <p class="author-title">Tesla co-founder and former CTO, CEO Redwood Materials</p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta">
      <NuxtImg 
        src="/join-cta.jpg" 
        alt="Team Working"
        class="final-cta__image"
        format="webp"
        quality="80"
      />
      <div class="final-cta__overlay"></div>
      <div class="final-cta__content">
        <h2>Ready to Join?</h2>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc839PzDu1kbfQXJCucLl1iy2lUjgSx7Cp1YgHADFqEoVlgHA/viewform?usp=dialog" 
           class="cta-button" 
           target="_blank">
          Join Now
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.join-page {
  background: #f8f8f8;
}

/* Hero Section */
.join-hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.join-hero__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.join-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.join-hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 2rem;
  max-width: 800px;
}

.join-hero__content h1 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
  text-shadow: 0 4px 40px rgba(0, 0, 0, 0.8);
}

.join-hero__content p {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  line-height: 1.6;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.7);
}

/* Requirements Section */
.requirements-section {
  padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
  background: #ffffff;
}

.requirements-section__container {
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #1a1a1a;
  margin-bottom: 3rem;
  text-align: center;
}

.requirements-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

.requirement-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.requirement-number {
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #8C1515;
  line-height: 1;
  flex-shrink: 0;
  width: 60px;
}

.requirement-text {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #333;
  padding-top: 0.5rem;
}

.application-cta {
  text-align: center;
  padding: 2rem;
  background: #f8f8f8;
  border-radius: 0.75rem;
}

.apply-button {
  display: inline-block;
  padding: 1rem 3rem;
  background: #8C1515;
  color: #fff;
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 999px;
  transition: background 0.2s ease, transform 0.2s ease;
  box-shadow: 0 8px 20px rgba(140, 21, 21, 0.3);
  margin-bottom: 1.5rem;
}

.apply-button:hover {
  background: #a01f1f;
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(140, 21, 21, 0.4);
}

.application-note {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* Team Structure Section */
.team-structure {
  padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
  background: #f8f8f8;
}

.team-structure__container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #666;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.7;
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.role-card {
  background: #fff;
  padding: 2rem;
  border-radius: 0.75rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.role-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.role-icon {
  display: inline-block;
  padding: 1rem 1.5rem;
  background: #8C1515;
  color: #fff;
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.1em;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}

.role-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.role-card p {
  font-size: 1rem;
  line-height: 1.7;
  color: #666;
  margin: 0;
}

/* Testimonial Section */
.testimonial-section {
  padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
  background: #fff;
}

.testimonial-section__container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.testimonial-quote {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 500;
  font-style: italic;
  line-height: 1.7;
  color: #1a1a1a;
  margin: 0 0 2rem 0;
  padding: 0 2rem;
  position: relative;
}

.testimonial-quote::before {
  content: '"';
  font-size: 4rem;
  color: #8C1515;
  opacity: 0.3;
  position: absolute;
  top: -1rem;
  left: 0;
  font-family: Georgia, serif;
}

.testimonial-author {
  margin-top: 2rem;
}

.author-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #8C1515;
  margin-bottom: 0.5rem;
}

.author-title {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

/* Final CTA */
.final-cta {
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.final-cta__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.final-cta__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(140, 21, 21, 0.75) 0%,
    rgba(140, 21, 21, 0.65) 100%
  );
}

.final-cta__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 3rem 2rem;
}

.final-cta__content h2 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 2rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.cta-button {
  display: inline-block;
  padding: 1.125rem 3rem;
  background: #fff;
  color: #8C1515;
  font-weight: 700;
  font-size: 1.125rem;
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
  .join-hero {
    height: 50vh;
  }

  .requirements-section {
    padding: 3rem 1.5rem;
  }

  .section-title {
    margin-bottom: 2rem;
  }

  .requirements-list {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .requirement-number {
    font-size: 2rem;
    width: 50px;
  }

  .requirement-text {
    font-size: 1.125rem;
  }

  .team-structure {
    padding: 3rem 1.5rem;
  }

  .section-subtitle {
    margin-bottom: 2rem;
  }

  .roles-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .testimonial-section {
    padding: 3rem 1.5rem;
  }

  .testimonial-quote {
    font-size: 1.125rem;
    padding: 0 1rem;
  }

  .final-cta {
    min-height: 400px;
  }

  .final-cta__content {
    padding: 2rem 1.5rem;
  }
}
</style>

