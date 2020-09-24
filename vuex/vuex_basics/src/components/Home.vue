<template>
<div>
    <p>This is a test joke: </p>
    <p> {{ joke }} </p>
</div>
</template>

<script>
export default {
    name: 'Home',
    data: () => ({
        joke: ""
    }),
    mounted() {
        this.joke = this.$store.getCurrentJoke
        console.log("this joke: " + this.joke)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
