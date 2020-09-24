<template>
<div id="app">
    <h1>Vuex state application</h1>
    <home></home>
</div>
</template>

<script>
import {
    mapActions
} from "vuex";
import Home from './components/Home.vue'

export default {
    name: 'App',
    components: {
        Home,
    },
    methods: {
        ...mapActions(["setCurrentJoke"])
    },
    mounted() {
        this.setCurrentJoke();
    }
}
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
