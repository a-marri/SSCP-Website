<template>
  <div class="cars-page">
    <!-- Hero Section -->
    <section class="cars-hero">
      <NuxtImg 
        src="/StanfordSolarCarTeam.jpg" 
        alt="Our Journey"
        class="cars-hero__image"
        format="webp"
        quality="80"
      />
      <div class="cars-hero__overlay"></div>
      <div class="cars-hero__content">
        <h1>Our Journey</h1>
        <p>From 1989 to today — building the future of sustainable transportation</p>
      </div>
    </section>

    <!-- History Timeline -->
    <section class="history-timeline">
      <div class="history-timeline__container">
        
        <!-- 1989 - Founding -->
        <div class="history-card">
          <div class="card-year">1989</div>
          <div class="card-content-wrapper">
            <NuxtImg 
              src="/teamhistory/teamHistoryHero.jpg" 
              alt="Project founding"
              class="card-image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="card-content">
              <h3>Project Founded</h3>
              <p>The Stanford Solar Car Project began in the winter of 1989, when a graduate student and a visiting professor believed Stanford students could take on the challenge of building a solar-powered race car. Inspired by General Motors' victory in Australia's World Solar Challenge, they aimed for Sunrayce '90 in the U.S. With little experience but plenty of determination, the students formed what would become one of the longest-running solar car teams in the world.</p>
            </div>
          </div>
        </div>

        <!-- 1990 - SunSurfer -->
        <div class="history-card">
          <div class="card-year">1990</div>
          <div class="card-content-wrapper">
            <NuxtImg 
              src="/teamhistory/sunsurfer.jpg" 
              alt="SunSurfer"
              class="card-image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="card-content">
              <h3>SunSurfer</h3>
              <div class="race-results">
                <div class="race-result">
                  <span class="race-name">Sunrayce '90</span>
                  <span class="race-position">7th of 32 teams; 2nd in performance-per-cost</span>
                </div>
              </div>
              <p>Our very first car, SunSurfer, was built by an inexperienced but passionate group of undergraduates. Despite the late nights, epoxy fumes, and steep learning curve, the car successfully completed the race, marking Stanford's entry into the global solar racing community.</p>
            </div>
          </div>
        </div>

        <!-- 1993 - Sunburner -->
        <div class="history-card">
          <div class="card-year">1993</div>
          <div class="card-content-wrapper">
            <NuxtImg 
              src="/teamhistory/sunburner.jpg" 
              alt="Sunburner"
              class="card-image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="card-content">
              <h3>Sunburner</h3>
              <div class="race-results">
                <div class="race-result">
                  <span class="race-name">Sunrayce '93</span>
                  <span class="race-position">5th Place</span>
                </div>
                <div class="race-result">
                  <span class="race-name">World Solar Challenge '93</span>
                  <span class="race-position">14th Overall, 2nd in 2-Person Class</span>
                </div>
              </div>
              <p>A bold new design featuring a solar concentrator proved too ambitious, but the team adapted quickly, turning Sunburner into one of the most distinctive cars ever built. After a devastating fire nearly destroyed the vehicle, the team rebuilt it in just six weeks. Against the odds, Sunburner achieved a remarkable 5th place in Sunrayce '93 and went on to a strong showing in Australia.</p>
            </div>
          </div>
        </div>

        <!-- 1995-1997 - Afterburner -->
        <div class="history-card">
          <div class="card-year">1995-1997</div>
          <div class="card-content-wrapper">
            <NuxtImg 
              src="/teamhistory/afterburner.jpg" 
              alt="Afterburner"
              class="card-image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="card-content">
              <h3>Afterburner</h3>
              <div class="race-results">
                <div class="race-result">
                  <span class="race-name">Sunrayce '95</span>
                  <span class="race-position">5th Place</span>
                </div>
                <div class="race-result">
                  <span class="race-name">Suzuka '95</span>
                  <span class="race-position">5th Place</span>
                </div>
                <div class="race-result">
                  <span class="race-name">Suzuka '96</span>
                  <span class="race-position">7th Place</span>
                </div>
                <div class="race-result">
                  <span class="race-name">World Solar Challenge '96</span>
                  <span class="race-position">25th Place (as "Team California")</span>
                </div>
                <div class="race-result">
                  <span class="race-name">Sunrayce '97</span>
                  <span class="race-position">3rd Place Overall</span>
                </div>
                <div class="race-result">
                  <span class="race-name">Suzuka '97</span>
                  <span class="race-position">5th Place</span>
                </div>
              </div>
              <p>With Afterburner, Stanford shifted focus to aerodynamics, cutting drag in half compared to its predecessor. The car matured over three years of racing, overcoming tough weather and fierce competition to earn Stanford's first podium finish — 3rd place at Sunrayce '97.</p>
            </div>
          </div>
        </div>

        <!-- 2001 - Third Degree Burner -->
        <div class="history-card">
          <div class="card-year">2001</div>
          <div class="card-content-wrapper">
            <NuxtImg 
              src="/teamhistory/thirddegreeburner.jpg" 
              alt="Third Degree Burner"
              class="card-image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="card-content">
              <h3>Third Degree Burner</h3>
              <div class="race-results">
                <div class="race-result">
                  <span class="race-name">American Solar Challenge 2001</span>
                  <span class="race-position">2nd in Stock Class, 15th Overall</span>
                </div>
              </div>
              <p>Third Degree Burner marked a new era as Stanford once again raced independently. Despite limited resources, the team's careful preparation paid off with a strong 2nd place in class along historic Route 66.</p>
            </div>
          </div>
        </div>

        <!-- 2003 - Back2Back Burner -->
        <div class="history-card">
          <div class="card-year">2003</div>
          <div class="card-content-wrapper">
            <NuxtImg 
              src="/teamhistory/back2backburner.jpg" 
              alt="Back2Back Burner"
              class="card-image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="card-content">
              <h3>Back2Back Burner</h3>
              <div class="race-results">
                <div class="race-result">
                  <span class="race-name">American Solar Challenge 2003</span>
                  <span class="race-position">2nd in 2-Person Class, 15th Overall</span>
                </div>
              </div>
              <p>Pushing innovation further, Stanford built its first two-seat solar car. Back2Back Burner featured advanced aerodynamics and experimental lithium-polymer batteries. Though reliability issues plagued the race, the team persevered to finish and gained valuable lessons that would shape future designs.</p>
            </div>
          </div>
        </div>

        <!-- 2005 - Solstice -->
        <div class="history-card">
          <div class="card-year">2005</div>
          <div class="card-content-wrapper">
            <NuxtImg 
              src="/teamhistory/solstice.jpg" 
              alt="Solstice"
              class="card-image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="card-content">
              <h3>Solstice</h3>
              <div class="race-results">
                <div class="race-result">
                  <span class="race-name">North American Solar Challenge 2005</span>
                  <span class="race-position">1st in Stock Class</span>
                </div>
              </div>
              <p>Solstice delivered one of the team's proudest moments, winning the Stock Class in a 2,500-mile race from Texas to Canada. This victory showcased not only engineering excellence but also the resilience and spirit of the team.</p>
            </div>
          </div>
        </div>

        <!-- 2009 - Apogee -->
        <div class="history-card">
          <div class="card-year">2009</div>
          <div class="card-content-wrapper">
            <NuxtImg 
              src="/teamhistory/apogee.jpg" 
              alt="Apogee"
              class="card-image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="card-content">
              <h3>Apogee</h3>
              <div class="race-results">
                <div class="race-result">
                  <span class="race-name">World Solar Challenge 2009</span>
                  <span class="race-position">10th in Class</span>
                </div>
              </div>
              <p>Built from carbon fiber with a sleek monocoque body, Apogee carried the team back to Australia. With a 6 m² solar array and lightweight lithium-ion batteries, it was one of Stanford's most reliable cars to date, cruising steadily across the continent to a top-ten class finish.</p>
            </div>
          </div>
        </div>

        <!-- 2011 - Xenith -->
        <div class="history-card">
          <div class="card-year">2011</div>
          <div class="card-content-wrapper">
            <NuxtImg 
              src="/teamhistory/xenith.jpg" 
              alt="Xenith"
              class="card-image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="card-content">
              <h3>Xenith</h3>
              <div class="race-results">
                <div class="race-result">
                  <span class="race-name">World Solar Challenge 2011</span>
                  <span class="race-position">11th Place</span>
                </div>
              </div>
              <p>Unveiled in August 2011, Xenith was Stanford's tenth car and a major leap forward in engineering. Weighing just 375 pounds, it featured a three-wheel steering system, a 4-inch-thin carbon composite chassis, and a custom 98% efficient motor. Xenith pioneered the use of flexible glass encapsulation for SunPower solar cells, with Corning providing prototype glass. In-house strategy software modeled sunlight and shadows in real time, giving the team a new competitive edge. Xenith could cruise at 55–60 mph under solar power alone.</p>
            </div>
          </div>
        </div>

        <!-- 2013 - Luminos -->
        <div class="history-card">
          <div class="card-year">2013</div>
          <div class="card-content-wrapper">
            <NuxtImg 
              src="/teamhistory/luminos.jpg" 
              alt="Luminos"
              class="card-image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="card-content">
              <h3>Luminos</h3>
              <div class="race-results">
                <div class="race-result">
                  <span class="race-name">World Solar Challenge 2013</span>
                  <span class="race-position">4th Overall (Best U.S. Team)</span>
                </div>
              </div>
              <p>Our eleventh car, Luminos, was unveiled in 2013 and went on to deliver the team's best result yet: 4th place in the Challenger Class and the top finish by an undergraduate team. Lightweight and incredibly reliable, Luminos logged over 10,000 safe miles, cementing its reputation as one of SSCP's finest designs.</p>
            </div>
          </div>
        </div>

        <!-- 2015 - Arctan -->
        <div class="history-card">
          <div class="card-year">2015</div>
          <div class="card-content-wrapper">
            <NuxtImg 
              src="/teamhistory/arctan.jpeg" 
              alt="Arctan"
              class="card-image"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div class="card-content">
              <h3>Arctan</h3>
              <div class="race-results">
                <div class="race-result">
                  <span class="race-name">World Solar Challenge 2015</span>
                  <span class="race-position">6th Place</span>
                </div>
              </div>
              <p>Arctan built on Luminos' success with a sleeker, more aerodynamically aggressive design. Extensive testing—more miles than any car before it—proved invaluable, helping the team close the gap to the leaders by 50% compared to 2013.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.cars-page {
  background: #f8f8f8;
}

/* Hero Section */
.cars-hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.cars-hero__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cars-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.cars-hero__content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 2rem;
}

.cars-hero__content h1 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
}

.cars-hero__content p {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  line-height: 1.6;
  opacity: 0.95;
}

/* History Timeline */
.history-timeline {
  padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
  background: #fff;
}

.history-timeline__container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* History Cards */
.history-card {
  position: relative;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 2.5rem;
  align-items: start;
}

.card-year {
  position: sticky;
  top: 100px;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #8C1515;
  line-height: 1;
  text-align: right;
  padding-top: 0.5rem;
}

.card-content-wrapper {
  background: #f8f8f8;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-content-wrapper:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.card-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.card-content {
  padding: 2rem;
}

.card-content h3 {
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.race-results {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.race-result {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.race-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #8C1515;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.race-position {
  font-size: 1rem;
  color: #666;
  font-weight: 600;
}

.card-content p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #333;
  margin: 0;
}

@media (max-width: 768px) {
  .cars-hero {
    padding: 4rem 1.5rem;
  }

  .history-timeline {
    padding: 3rem 1.5rem;
  }

  .history-timeline__container {
    gap: 3rem;
  }

  .history-card {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .card-year {
    position: static;
    text-align: left;
    font-size: 2rem;
    padding-top: 0;
  }

  .card-image {
    height: 250px;
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-content h3 {
    font-size: 1.5rem;
  }

  .card-content p {
    font-size: 1rem;
  }
}
</style>

