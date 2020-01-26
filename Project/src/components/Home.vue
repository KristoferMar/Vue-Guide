<template>
    <div>
        <h1>Trade or view your Portfolio</h1>
        <h6>You may save & Load your Data</h6>
        <h6>Clicl on 'End Day' to begin a New Day!</h6>
        <hr>
        <p>Your Funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>