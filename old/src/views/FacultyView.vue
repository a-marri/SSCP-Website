<template>
  <div class="faculty">
    <!-- Advisory Board Hero Section -->
    <section class="advisory-hero">
      <div class="advisory-hero-background">
        <img src="/src/assets/images/race-photos/scan0058.jpg" alt="Advisory Boards" class="advisory-hero-bg-image">
        <div class="advisory-hero-overlay"></div>
      </div>
      <div class="advisory-hero-content">
        <h1 class="advisory-hero-title">Advisory Boards</h1>
        <p class="advisory-hero-subtitle">Meet our staff and faculty advisors, and technical advisory board members who guide our mission.</p>
      </div>
    </section>

    <!-- Staff and Faculty Advisory Board Section -->
    <section class="advisory-board" v-motion-fade-up>
      <div class="container">
        <h2 class="section-title">Staff and Faculty Advisory Board</h2>

        <!-- Co-Advisory Board Members -->
        <div class="faculty-grid" style="margin-bottom: 4rem;">
          <a href="https://profiles.stanford.edu/sara-singer" target="_blank" class="faculty-card-link">
            <div class="faculty-card">
              <div class="faculty-photo">
                <img src="/src/assets/images/faculty/sarasinger.jpg" alt="Sara Singer" class="faculty-img">
              </div>
              <div class="faculty-info">
                <h3>Sara Singer</h3>
                <p class="faculty-title">Co-Faculty Advisor</p>
                <p class="faculty-department">Professor, Department of Health Policy</p>
              </div>
            </div>
          </a>

          <a href="https://profiles.stanford.edu/186491" target="_blank" class="faculty-card-link">
            <div class="faculty-card">
              <div class="faculty-photo">
                <img src="/src/assets/images/faculty/gordonbloom.jpg" alt="Gordon Bloom" class="faculty-img">
              </div>
              <div class="faculty-info">
                <h3>Gordon Bloom</h3>
                <p class="faculty-title">Co-Faculty Advisor</p>
                <p class="faculty-department">Lecturer, Department of Medicine/Primary Care and Population Health</p>
              </div>
            </div>
          </a>
        </div>

        <!-- Other Advisory Board Members -->
        <div class="advisory-grid">
          <div v-for="member in staffAdvisors" :key="member.name" class="advisory-member">
            <h4>{{ member.name }}</h4>
            <p>{{ member.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Advisory Board Section -->
    <section class="advisory-board" v-motion-fade-up>
      <div class="container">
        <h2 class="section-title">Technical Advisory Board</h2>
        <div class="advisory-grid">
          <div v-for="member in technicalAdvisors" :key="member.name" class="advisory-member">
            <h4>{{ member.name }}</h4>
            <p>{{ member.title }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FacultyView',
  data() {
    return {
      staffAdvisors: [
        { name: 'Thomas Kenny', title: 'Senior Associate Dean of Engineering for Education and Student Affairs, School of Engineering' },
        { name: 'Jeff Gordon', title: 'Senior Associate Director of Corporate Relations, School of Engineering' },
        { name: 'Brooke Groves-Anderson', title: 'Director, University Corporate and Foundation Relations' },
        { name: 'Snehal Naik', title: 'Senior Director, Office of Student Engagement' },
        { name: 'Pete Cerneka', title: 'Associate Director, OSE' },
        { name: 'Ash Chaudhry', title: 'Senior Research Consultant, Office of the Chief Risk Officer' },
        { name: 'Leslie Wagner', title: 'Health & Safety Specialist, School of Engineering' },
        { name: 'Jack Reidy', title: 'Research Safety Specialist, Environmental Health & Safety' },
        { name: 'Jas Espinosa', title: 'Chief Executive Officer, Stanford Student Enterprises' },
        { name: 'J.D. Sassaman', title: 'Executive Director, SPARC' },
        { name: 'Bella Carrera-Newport', title: 'Program Specialist, SPARC' },
        { name: 'Steve Collins', title: 'Associate Professor, Mechanical Engineering' },
        { name: 'Johan Sotelo', title: 'Managing Director, Capital (Cap) Group' },
        { name: 'Holmes Hummel', title: 'Managing Director, Energy Equity & Just Transitions' }
      ],
      technicalAdvisors: [
        { name: 'John Fox', title: 'Adjunct Professor, Applied Physics' },
        { name: 'Manan Arya', title: 'Assistant Professor, Aeronautics and Astronautics' },
        { name: 'Maria Sakovsky', title: 'Assistant Professor, Aeronautics and Astronautics' },
        { name: 'Vinny Toth', title: 'Manager, Facilities and Operations, Doerr School of Sustainability' },
        { name: 'Juan Rivas-Davila', title: 'Associate Professor, Electrical Engineering' },
        { name: 'Kyle Douglas', title: 'Research Engineer, Civil and Environmental Engineering' }
      ]
    }
  }
}
</script>

<style scoped>
/* Faculty view specific styles */
.faculty {
  min-height: 100vh;
  background: #ffffff;
}

/* Ensure sections have proper spacing and visibility */
.advisory-board {
  padding: 60px 0;
  background: #ffffff;
}

.advisory-board:nth-child(odd) {
  background: #f8f8f8;
}

/* Ensure text is visible */
.section-title {
  color: #333;
  margin-bottom: 2rem;
}

.advisory-member h4 {
  color: #333;
  margin-bottom: 0.5rem;
}

.advisory-member p {
  color: #666;
  margin: 0;
}

/* Ensure grids have proper layout */
.faculty-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.advisory-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Ensure cards are visible */
.faculty-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.advisory-member {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
</style>