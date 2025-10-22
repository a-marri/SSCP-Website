<template>
  <div class="faculty-page">
    <!-- Hero Section -->
    <section class="faculty-hero">
      <NuxtImg 
        src="/faculty-hero.jpg" 
        alt="Advisory Boards"
        class="faculty-hero__image"
        format="webp"
        quality="80"
      />
      <div class="faculty-hero__overlay"></div>
      <div class="faculty-hero__content">
        <h1>Advisory Boards</h1>
        <p>Meet our staff and faculty advisors, and technical advisory board members who guide our mission.</p>
      </div>
    </section>

    <!-- Staff and Faculty Advisory Board -->
    <section class="advisory-section">
      <div class="advisory-section__container">
        <h2 class="section-title">Staff and Faculty Advisory Board</h2>
        
        <!-- Co-Faculty Advisors -->
        <div class="co-advisors">
          <a href="https://profiles.stanford.edu/sara-singer" target="_blank" class="faculty-card">
            <NuxtImg 
              src="/faculty/sarasinger.jpg" 
              alt="Sara Singer"
              class="faculty-card__image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="faculty-card__info">
              <h3 class="faculty-card__name">Sara Singer</h3>
              <p class="faculty-card__title">Co-Faculty Advisor</p>
              <p class="faculty-card__department">Professor, Department of Health Policy</p>
            </div>
          </a>

          <a href="https://profiles.stanford.edu/186491" target="_blank" class="faculty-card">
            <NuxtImg 
              src="/faculty/gordonbloom.jpg" 
              alt="Gordon Bloom"
              class="faculty-card__image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="faculty-card__info">
              <h3 class="faculty-card__name">Gordon Bloom</h3>
              <p class="faculty-card__title">Co-Faculty Advisor</p>
              <p class="faculty-card__department">Lecturer, Department of Medicine/Primary Care and Population Health</p>
            </div>
          </a>
        </div>

        <!-- Other Advisory Board Members -->
        <div class="advisory-grid">
          <div class="advisory-member">
            <h4>Thomas Kenny</h4>
            <p>Senior Associate Dean of Engineering for Education and Student Affairs, School of Engineering</p>
          </div>
          <div class="advisory-member">
            <h4>Jeff Gordon</h4>
            <p>Senior Associate Director of Corporate Relations, School of Engineering</p>
          </div>
          <div class="advisory-member">
            <h4>Brooke Groves-Anderson</h4>
            <p>Director, University Corporate and Foundation Relations</p>
          </div>
          <div class="advisory-member">
            <h4>Snehal Naik</h4>
            <p>Senior Director, Office of Student Engagement</p>
          </div>
          <div class="advisory-member">
            <h4>Pete Cerneka</h4>
            <p>Associate Director, OSE</p>
          </div>
          <div class="advisory-member">
            <h4>Ash Chaudhry</h4>
            <p>Senior Research Consultant, Office of the Chief Risk Officer</p>
          </div>
          <div class="advisory-member">
            <h4>Leslie Wagner</h4>
            <p>Health & Safety Specialist, School of Engineering</p>
          </div>
          <div class="advisory-member">
            <h4>Jack Reidy</h4>
            <p>Research Safety Specialist, Environmental Health & Safety</p>
          </div>
          <div class="advisory-member">
            <h4>Jas Espinosa</h4>
            <p>Chief Executive Officer, Stanford Student Enterprises</p>
          </div>
          <div class="advisory-member">
            <h4>J.D. Sassaman</h4>
            <p>Executive Director, SPARC</p>
          </div>
          <div class="advisory-member">
            <h4>Bella Carrera-Newport</h4>
            <p>Program Specialist, SPARC</p>
          </div>
          <div class="advisory-member">
            <h4>Steve Collins</h4>
            <p>Associate Professor, Mechanical Engineering</p>
          </div>
          <div class="advisory-member">
            <h4>Johan Sotelo</h4>
            <p>Managing Director, Capital (Cap) Group</p>
          </div>
          <div class="advisory-member">
            <h4>Holmes Hummel</h4>
            <p>Managing Director, Energy Equity & Just Transitions</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Advisory Board -->
    <section class="advisory-section advisory-section--alt">
      <div class="advisory-section__container">
        <h2 class="section-title">Technical Advisory Board</h2>
        <div class="advisory-grid">
          <div class="advisory-member">
            <h4>John Fox</h4>
            <p>Adjunct Professor, Applied Physics</p>
          </div>
          <div class="advisory-member">
            <h4>Manan Arya</h4>
            <p>Assistant Professor, Aeronautics and Astronautics</p>
          </div>
          <div class="advisory-member">
            <h4>Maria Sakovsky</h4>
            <p>Assistant Professor, Aeronautics and Astronautics</p>
          </div>
          <div class="advisory-member">
            <h4>Vinny Toth</h4>
            <p>Manager, Facilities and Operations, Doerr School of Sustainability</p>
          </div>
          <div class="advisory-member">
            <h4>Juan Rivas-Davila</h4>
            <p>Associate Professor, Electrical Engineering</p>
          </div>
          <div class="advisory-member">
            <h4>Kyle Douglas</h4>
            <p>Research Engineer, Civil and Environmental Engineering</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.faculty-page {
  background: #f8f8f8;
}

/* Hero Section */
.faculty-hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.faculty-hero__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.faculty-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.faculty-hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 2rem;
  max-width: 900px;
}

.faculty-hero__content h1 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
  text-shadow: 0 4px 40px rgba(0, 0, 0, 0.8);
}

.faculty-hero__content p {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  line-height: 1.6;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.7);
}

/* Advisory Sections */
.advisory-section {
  padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
  background: #ffffff;
}

.advisory-section--alt {
  background: #f8f8f8;
}

.advisory-section__container {
  max-width: 1200px;
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

/* Co-Faculty Advisors */
.co-advisors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.faculty-card {
  background: #fff;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  display: block;
}

.faculty-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.faculty-card__image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

.faculty-card__info {
  padding: 1.75rem;
  text-align: center;
}

.faculty-card__name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.faculty-card__title {
  font-size: 1.125rem;
  color: #8C1515;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.faculty-card__department {
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
}

/* Advisory Grid */
.advisory-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.advisory-member {
  background: rgba(140, 21, 21, 0.03);
  padding: 1.75rem;
  border-radius: 0.5rem;
  border-left: 3px solid #8C1515;
  transition: transform 0.2s ease, background 0.2s ease;
}

.advisory-member:hover {
  transform: translateX(4px);
  background: rgba(140, 21, 21, 0.06);
}

.advisory-member h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.advisory-member p {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .faculty-hero {
    height: 50vh;
  }

  .advisory-section {
    padding: 3rem 1.5rem;
  }

  .section-title {
    margin-bottom: 2rem;
  }

  .co-advisors {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .advisory-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .advisory-member {
    padding: 1.5rem;
  }
}
</style>

