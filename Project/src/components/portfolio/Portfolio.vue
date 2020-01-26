<template>
    <div>
        <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue'
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            stocks: 'stockPortolio',
        })
    },
    components: {
        appStock: Stock,
    }
}
</script>