<template>
  <div class="container">
    <h1>Filters & Mixins</h1>
    <hr />
    <input v-model="filterText" />
    <ul>
      <li v-for="fruit in filteredFruits" v-bind:key="fruit">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
    import { fruitMixin } from './fuitMixin'

// The component always have the last word in terms of mixins with functions
    export default {
        mixins: [fruitMixin],
        created() {
            // eslint-disable-next-line no-console
            console.log('This is executed after mixin');
        }
    }
</script>

<style>

</style>
