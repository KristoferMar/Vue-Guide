<template>
    <div>
        <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue'

export default {
    components: {
        appStock: Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>

<style scoped>

</style>