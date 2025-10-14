<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <span class="logo-text">Stanford Solar Car Project<span class="team-number">16</span></span>
        </div>
        <div class="footer-links">
          <router-link to="/contact" class="footer-link">Contact</router-link>
          <a href="https://www.instagram.com/stanfordsolarcar/?hl=en" class="footer-link" target="_blank">Instagram</a>
          <a href="https://www.linkedin.com/company/stanfordsolarcar/posts/?feedView=all" class="footer-link" target="_blank">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
/* Footer styles are inherited from the main CSS file */
</style>