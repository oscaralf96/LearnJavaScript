<template>
  <!-- <MyHome age-number="25" soccer-team="Real Madrid" otro="algo"></MyHome> -->
  <MyHome age-number="25" soccer-team="Real Madrid"></MyHome>
</template>

<script>
import MyHome from "./components/MyHome.vue";
import { provide } from "vue";
export default {
  name: "App",
  components: {
    MyHome,
  },
  setup() {
    provide("username", "Oscarin");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
