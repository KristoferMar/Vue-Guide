<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- This is how we can execute a filter on a piece of text with the pipe syntax -->
        <p>{{ text | toUppercase | to-lowercase }}</p>
        <hr />
        <button @click="fruits.push('Berries')">Add new Item</button>
        <input v-model="filterText" />
        <ul>
          <li v-for="fruit in filteredFruits" v-bind:key="fruit">{{ fruit }}</li>
        </ul>
        <hr />
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
  import List from './components/List.vue';
import { fruitMixin } from './components/fuitMixin';

    export default {
      mixins: [fruitMixin],
      data() {
        return {
          text: 'Hello there',
          fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
          filterText: ''
        }
      },
      //This is a local filter function. 
      filters: {
        toUppercase(value) {
          return value.toUpperCase();
        }
      },
      //These are computed properties which are very well preforming when we have to filter stuff.
      computed: {
        filteredFruits() {
          return this.fruits.fitler((element) => {
            return element.match(this.filterText);
          });
        }
      },
      components: {
        appList: List,
      }
    }
</script>

<style>

</style>
