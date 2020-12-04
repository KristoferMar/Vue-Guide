<template>
<div>
    <h3>User details for user: {{ $route.params.id }}</h3>
    <p>This is a very nice user.</p>
    <!-- '/user/' + $route.params.id + '/edit' : This is the old way to setup router link  -->
    <router-link class="btn btn-primary" tag="button"
     :to="link"
    >Edit user</router-link>
</div>
</template>

<script>
export default {
    data() {
        return {
            link: {
                name: 'userEdit',
                params: { 
                    id: this.$route.params.id
                }, 
                query: {
                    locale: 'en', 
                    q: 100
                },
                hash: '#data' //We parase an hash fragment.
             }
        }
    },
    //Life cycle hook for the router
    beforeRouteEnter (to, from, next) {
        // You can implement some kind of kondition here.
        if(true) {
            next();
        } else {
            next(false); 
        }
        // ...
        // next(vm => {
        //     vm.link;
        // });
    }
}
</script>