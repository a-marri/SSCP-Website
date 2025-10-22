<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">
        <router-link to="/" class="logo-text">Stanford Solar Car Project</router-link>
        <span class="team-number">16</span>
      </div>
      <div class="nav-menu">
        <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">Home</router-link>
        <router-link to="/team" class="nav-link" :class="{ active: $route.path === '/team' }">Team</router-link>
        <router-link to="/faculty" class="nav-link" :class="{ active: $route.path === '/faculty' }">Advisory Boards</router-link>
        <router-link to="/sponsors" class="nav-link" :class="{ active: $route.path === '/sponsors' }">Sponsors</router-link>
        <router-link to="/join" class="nav-link" :class="{ active: $route.path === '/join' }">How to Join</router-link>
        <router-link to="/contact" class="nav-link" :class="{ active: $route.path === '/contact' }">Contact Us</router-link>
      </div>
      <div class="mobile-menu-toggle" @click="toggleMobileMenu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </div>
    </div>
    <transition name="slide">
      <div class="mobile-nav-menu" v-show="mobileMenuOpen">
        <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">Home</router-link>
        <router-link to="/team" class="mobile-nav-link" @click="closeMobileMenu">Team</router-link>
        <router-link to="/faculty" class="mobile-nav-link" @click="closeMobileMenu">Advisory Boards</router-link>
        <router-link to="/sponsors" class="mobile-nav-link" @click="closeMobileMenu">Sponsors</router-link>
        <router-link to="/join" class="mobile-nav-link" @click="closeMobileMenu">How to Join</router-link>
        <router-link to="/contact" class="mobile-nav-link" @click="closeMobileMenu">Contact Us</router-link>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  },
  watch: {
    $route() {
      this.closeMobileMenu()
    }
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}

.nav-link.active {
  opacity: 1;
  font-weight: 600;
}
</style>