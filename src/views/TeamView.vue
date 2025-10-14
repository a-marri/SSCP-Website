<template>
  <div class="team">
    <!-- Team Hero Section -->
    <section class="team-hero">
      <div class="team-hero-background">
        <img src="/src/assets/images/race-photos/13.jpg" alt="Team Photo" class="team-hero-bg-image">
        <div class="team-hero-overlay"></div>
      </div>
      <div class="team-hero-content">
        <h1 class="team-hero-title">About Our Team</h1>
        <p class="team-hero-subtitle">Students building, learning, and racing toward a sustainable future</p>
      </div>
    </section>

    <!-- About Stanford Solar Car Project Section -->
    <section class="about-section" v-motion-fade-up>
      <div class="container">
        <div class="section-header">
          <h2>About Stanford Solar Car Project</h2>
        </div>

        <div class="about-content">
          <p>The Stanford Solar Car Project is one of America's top solar car teams, and among the best undergraduate teams in the world. The project began in 1989 as an entirely student-run, non-profit organization fueled by its members' passion for environmental sustainability and innovative technology. The team designs, builds, and races its solar-powered vehicles in solar endurance races across the globe.</p>

          <p>As an academic effort, the project provides a unique opportunity for Stanford students to gain valuable hands-on engineering and business experience. The team typically operates on a two-year project cycle that becomes more than an extracurricular activity. Students on the team balance their involvement with work and academics, but always remain dedicated to the collective effort of building from the conceptual to the racing phase of one of the world's most efficient and innovative vehicles.</p>

          <p>Members usually join the team with little to no engineering background and gradually build their knowledge from working on a vehicle. Coordinating an engineering project of this scale requires considerable management and planning, allowing students to develop these vital business skills in an engineering environment. With this approach, the team has fostered nine generations of award-winning vehicles, proving that a hands-on education in creative design and execution produces impressive results.</p>

          <p>Solar car alumni often work on some of the most cutting-edge technologies today. From electric vehicles to even cancer therapeutics research and software marketing, former members leverage the many skills they first developed with solar car in their future.</p>
        </div>
      </div>
    </section>

    <!-- Team Members Section -->
    <section class="team-members" v-motion-fade-up>
      <div class="container">
        <div class="section-header">
          <h2>Meet Our Members</h2>
          <p>Our team consists of dedicated students from various majors, united by our passion.</p>
        </div>

        <div class="members-grid">
          <div v-for="member in teamMembers" :key="member.name" class="member-card">
            <div class="member-photo">
              <img :src="member.photo" :alt="member.name" class="member-img">
            </div>
            <div class="member-info">
              <p class="member-name">{{ member.name }}</p>
              <h3>{{ member.position }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TeamView',
  data() {
    return {
      teamMembers: [
        { name: 'Akhil Marri', position: 'President', photo: '/src/assets/images/team/akhil.jpg' },
        { name: 'Panos Papanastasiou', position: 'Vice President & Mech Lead', photo: '/src/assets/images/team/panos.jpg' },
        { name: 'Josh Koch', position: 'Chief Financial Officer', photo: '/src/assets/images/race-photos/fsgp4.jpeg' },
        { name: 'Joeseph Garcia', position: 'Chief Safety Officer', photo: '/src/assets/images/team/joseph.jpg' },
        { name: 'Edward Mu', position: 'Electrical Lead', photo: '/src/assets/images/race-photos/fsgp7.jpeg' },
        { name: 'Calvin Yeh', position: 'Battery Lead', photo: '/src/assets/images/team/calvin.jpeg' },
        { name: 'Sofie Roux', position: 'Array Lead', photo: '/src/assets/images/team/sofie.jpg' },
        { name: 'Allen Weng', position: 'Code Lead', photo: '/src/assets/images/team/allen.png' }
      ]
    }
  }
}
</script>

<style scoped>
/* Team view specific styles if needed */
</style>