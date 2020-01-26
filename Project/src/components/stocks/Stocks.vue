<template>
    <div>
        <app-stock v-for="stock in stocks" :key="stock" :stock="stock"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue'

export default {
    data() {
        return {
            stocks: [
                { id: 1, name: 'BMW', price: 110 },
                { id: 2, name: 'Audi', price: 200 },
                { id: 3, name: 'Google', price: 40 },
                { id: 4, name: 'Komfy', price: 300 },
            ]
        }
    },
    components: {
        appStock: Stock
    }
}
</script>

<style scoped>

</style>