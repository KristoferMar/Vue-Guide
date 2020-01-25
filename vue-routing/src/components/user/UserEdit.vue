<template>
<!-- This receives query parameters -->
<div>
    <p>editng</p>
    <p>Locale: {{ $route.query.locale}}</p>
    <p>Analytics: {{ $route.query.q}}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed  = true">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some extra data</p>
</div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false,
        }
    },
    // Check before you leave a route.
    beforeRouteLeave (to, from, next) {
        // ...
        if(this.confirmed) {
            next();
        } else {
            if(confirm('Are you sure?')) {
                next();
            } else {
                next(false);
            }
        }
    },
    methods: {

    }
}
</script>