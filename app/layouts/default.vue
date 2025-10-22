<template>
  <div class="page-shell">
    <header class="main-nav">
      <NuxtLink to="/" class="brand" aria-label="Stanford Solar Car Project home">
        <img src="/SSCP-Logo.png" alt="SSCP Logo" class="brand__logo" />
        <span class="brand__text">
          <span class="brand__accent">Stanford</span> Solar Car Project
        </span>
      </NuxtLink>
      <nav aria-label="Primary navigation">
        <ul class="nav-links">
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to" class="nav-link" :class="{ active: isActive(link) }">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const links = [
  { label: "Home", to: "/" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Blog", to: "/blog" },
  { label: "Team", to: "/team" },
  { label: "Cars", to: "/cars" },
  { label: "Contact", to: "/contact" },
  { label: "Media", to: "/media" },
  { label: "Donate", to: "/donate" }
];

const route = useRoute();

const isActive = (link: { to: string }) => route.path === link.to;
</script>

<style scoped>
.page-shell {
  min-height: 100vh;
  background: #f8f8f8;
}

.main-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem clamp(1.5rem, 5vw, 4rem);
  background: #ffffff;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  gap: 1.5rem;
  min-height: 80px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
}

.brand__logo {
  height: 50px;
  width: auto;
}

.brand__text {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #111;
  white-space: nowrap;
}

.brand__accent {
  color: #96151d;
  font-weight: 800;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: clamp(1.5rem, 6vw, 4.5rem);
  margin: 0;
  padding: 0;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #1a1a1a;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  color: #c1121f;
  transform: translateY(-1px);
}

.nav-link.active {
  color: #c1121f;
}

main {
  padding: 0;
}

@media (max-width: 960px) {
  .main-nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    flex-wrap: wrap;
    row-gap: 0.75rem;
    column-gap: 2rem;
  }

  .nav-link {
    font-size: 0.8rem;
    letter-spacing: 0.04em;
  }

  .brand__text {
    font-size: 0.85rem;
  }
}
</style>
