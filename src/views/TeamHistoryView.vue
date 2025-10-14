<template>
  <div class="team-history">
    <section class="history-hero">
      <div class="container">
        <h1>Team History</h1>
        <p>Over 30 years of innovation and racing excellence</p>
      </div>
    </section>

    <section class="history-content " v-motion-fade-up>
      <div class="container">
        <div class="section-header">
          <h2>Our Legacy</h2>
          <p>Since 1989, Stanford Solar Car Project has been at the forefront of solar vehicle innovation</p>
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-year">1989</div>
            <div class="timeline-content">
              <h3>Project Founded</h3>
              <p>Stanford Solar Car Project was established as a student-run organization dedicated to sustainable transportation.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">1993</div>
            <div class="timeline-content">
              <h3>First World Solar Challenge</h3>
              <p>Competed in our first international solar car race across Australia.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">2005</div>
            <div class="timeline-content">
              <h3>North American Solar Challenge Victory</h3>
              <p>Won first place in the North American Solar Challenge.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">2015</div>
            <div class="timeline-content">
              <h3>Arctan Development</h3>
              <p>Began development of our latest generation vehicle, Arctan.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">2025</div>
            <div class="timeline-content">
              <h3>FSGP 2nd Place</h3>
              <p>Achieved 2nd place finish at the Formula Sun Grand Prix out of 30+ teams.</p>
            </div>
          </div>
        </div>

        <div class="history-vehicles">
          <h2>Our Vehicles</h2>
          <div class="vehicles-grid">
            <div class="vehicle-card">
              <h3>Arctan (Current)</h3>
              <p>Our latest generation solar vehicle, featuring cutting-edge battery technology and aerodynamic design.</p>
            </div>
            <div class="vehicle-card">
              <h3>Aphelion</h3>
              <p>Previous generation vehicle that competed successfully in multiple international races.</p>
            </div>
            <div class="vehicle-card">
              <h3>Xenith</h3>
              <p>Innovative design that pushed the boundaries of solar efficiency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TeamHistoryView'
}
</script>

<style scoped>
/* Team history specific styles */
.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline-item {
  display: flex;
  margin-bottom: 2rem;
  align-items: flex-start;
}

.timeline-year {
  font-weight: bold;
  font-size: 1.2rem;
  color: #8c1515;
  min-width: 100px;
  margin-right: 2rem;
}

.timeline-content h3 {
  margin-bottom: 0.5rem;
  color: #333;
}

.vehicles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.vehicle-card {
  padding: 1.5rem;
  background: #f8f8f8;
  border-radius: 8px;
}
</style>