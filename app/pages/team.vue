<template>
  <div class="team-page">
    <!-- Hero Section -->
    <section class="team-hero">
      <NuxtImg 
        src="/team-hero.jpg" 
        alt="Team photo"
        class="team-hero__image"
        format="webp"
        quality="80"
      />
      <div class="team-hero__overlay"></div>
      <div class="team-hero__content">
        <h1>About Our Team</h1>
        <p>Students building, learning, and racing toward a sustainable future</p>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-team">
      <div class="about-team__container">
        <h2 class="about-team__title">About Stanford Solar Car Project</h2>
        <div class="about-team__content">
          <p>
            The Stanford Solar Car Project is one of America's top solar car teams, and among the best undergraduate teams in the world. The project began in 1989 as an entirely student-run, non-profit organization fueled by its members' passion for environmental sustainability and innovative technology. The team designs, builds, and races its solar-powered vehicles in solar endurance races across the globe.
          </p>
          <p>
            As an academic effort, the project provides a unique opportunity for Stanford students to gain valuable hands-on engineering and business experience. The team typically operates on a two-year project cycle that becomes more than an extracurricular activity. Students on the team balance their involvement with work and academics, but always remain dedicated to the collective effort of building from the conceptual to the racing phase of one of the world's most efficient and innovative vehicles.
          </p>
          <p>
            Members usually join the team with little to no engineering background and gradually build their knowledge from working on a vehicle. Coordinating an engineering project of this scale requires considerable management and planning, allowing students to develop these vital business skills in an engineering environment. With this approach, the team has fostered nine generations of award-winning vehicles, proving that a hands-on education in creative design and execution produces impressive results.
          </p>
          <p>
            Solar car alumni often work on some of the most cutting-edge technologies today. From electric vehicles to even cancer therapeutics research and software marketing, former members leverage the many skills they first developed with solar car in their future.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Members Section -->
    <section class="team-members">
      <div class="team-members__container">
        <div class="section-header">
          <h2>Meet Our Members</h2>
          <p>Our team consists of dedicated students from various majors, united by our passion.</p>
        </div>
        
        <div class="members-grid">
          <div class="member-card">
            <NuxtImg 
              src="/team/akhil.jpg" 
              alt="Akhil Marri"
              class="member-card__image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="member-card__info">
              <h3 class="member-card__name">Akhil Marri</h3>
              <p class="member-card__role">President</p>
            </div>
          </div>

          <div class="member-card">
            <NuxtImg 
              src="/team/panos.jpg" 
              alt="Panos Papanastasiou"
              class="member-card__image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="member-card__info">
              <h3 class="member-card__name">Panos Papanastasiou</h3>
              <p class="member-card__role">Vice President & Mech Lead</p>
            </div>
          </div>

          <div class="member-card">
            <NuxtImg 
              src="/team/joseph.jpg" 
              alt="Joseph Garcia"
              class="member-card__image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="member-card__info">
              <h3 class="member-card__name">Joseph Garcia</h3>
              <p class="member-card__role">Chief Safety Officer</p>
            </div>
          </div>

          <div class="member-card">
            <NuxtImg 
              src="/team/calvin.jpeg" 
              alt="Calvin Yeh"
              class="member-card__image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="member-card__info">
              <h3 class="member-card__name">Calvin Yeh</h3>
              <p class="member-card__role">Battery Lead</p>
            </div>
          </div>

          <div class="member-card">
            <NuxtImg 
              src="/team/sofie.jpg" 
              alt="Sofie Roux"
              class="member-card__image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="member-card__info">
              <h3 class="member-card__name">Sofie Roux</h3>
              <p class="member-card__role">Array Lead</p>
            </div>
          </div>

          <div class="member-card">
            <NuxtImg 
              src="/team/allen.png" 
              alt="Allen Weng"
              class="member-card__image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="member-card__info">
              <h3 class="member-card__name">Allen Weng</h3>
              <p class="member-card__role">Code Lead</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.team-page {
  background: #f8f8f8;
}

/* Hero Section */
.team-hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.team-hero__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.45) 100%
  );
}

.team-hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 2rem;
  max-width: 800px;
}

.team-hero__content h1 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
  text-shadow: 0 4px 40px rgba(0, 0, 0, 0.8);
}

.team-hero__content p {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  line-height: 1.6;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.7);
}

/* About Team Section */
.about-team {
  padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
  background: #ffffff;
}

.about-team__container {
  max-width: 900px;
  margin: 0 auto;
}

.about-team__title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #1a1a1a;
  margin-bottom: 2.5rem;
  text-align: center;
}

.about-team__content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

.about-team__content p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #333;
  margin: 0;
}

/* Team Members Section */
.team-members {
  padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
  background: #f8f8f8;
}

.team-members__container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.125rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.member-card {
  background: #fff;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.member-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.member-card__image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

.member-card__info {
  padding: 1.5rem;
  text-align: center;
}

.member-card__name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.member-card__role {
  font-size: 1rem;
  color: #8C1515;
  font-weight: 600;
  margin: 0;
}

@media (max-width: 768px) {
  .team-hero {
    height: 50vh;
  }

  .about-team {
    padding: 3rem 1.5rem;
  }

  .about-team__title {
    margin-bottom: 2rem;
  }

  .about-team__content p {
    font-size: 1rem;
  }

  .team-members {
    padding: 3rem 1.5rem;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }

  .members-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
  }
}
</style>

