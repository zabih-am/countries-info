<template>
  <div class="navbar">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="nav-content__title">where in the world?</div>
      <button @click="toggleTheme()" class="nav-content__btn">
        <font-awesome-icon icon="moon"></font-awesome-icon>
        <span>Dark Mode</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {};
  },
  computed: {
    theme: {
      get() {
        return this.$store.state.appConfig.themeMode;
      },
      set(val) {
        this.$store.commit("appConfig/UPDATE_THEME", val);
      },
    },
  },
  methods: {
    toggleTheme() {
      this.theme === "dark" ? (this.theme = "light") : (this.theme = "dark");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/navbar.scss";
</style>
