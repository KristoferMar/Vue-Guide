<template>
  <div>
    <h3>New component</h3>
    <button @click="counter++">Increase!</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
    props: ['quote'],
    data: function() {
        return {
            counter: 0
        };
    },
    destroyed() {
        // eslint-disable-next-line no-console
        console.log('destroyed!');
    },
    deactivated() {
        // eslint-disable-next-line no-console
        console.log('destroyed!');
    },
    activated() {
        // eslint-disable-next-line no-console
        console.log('Activated!');
    }
}
</script>

<style>

</style>