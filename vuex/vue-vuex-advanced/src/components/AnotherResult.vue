<template>
<div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../store/types'

    export default {
        // mapGetters is a nice feature from vuex.
        computed: 
            mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                stringCounter: types.CLICK_COUNTER,
            })
    }
</script>