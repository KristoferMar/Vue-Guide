<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <hr>

    <ForLoop />
    <hr>
    <Styling />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ForLoop from "./components/ForLoop.vue";
import Styling from './components/Styling.vue'

export default {
  name: "App",
  components: {
    HelloWorld,
    ForLoop,
    Styling
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
</style>
