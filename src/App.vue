<template>
  <div id="app">
    <AppNavbar />
    <div class="container margin-top-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppNavbar from "./components/shared/Nabar.vue";
export default {
  components: {
    AppNavbar,
  },
  computed: {
    theme() {
      return this.$store.state.appConfig.themeMode;
    },
  },
  created() {
    if (this.theme === "dark") {
      document.body.classList.add("dark-layout");
    }
  },
};
</script>

<style lang="scss">
.main-container {
  margin-top: 4rem;
}
</style>
