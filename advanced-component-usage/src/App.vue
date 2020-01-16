<template>
  <div id="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr />
        <p>{{ selectedComponent }}</p>
        <!-- keep-alive makes sure a component is kept alive -->
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default content</p>
          </component>
        </keep-alive>
        <!-- We could put this in as prop to display in another component : quote="A wonderful quote!" -->
        <app-quote>
          <!-- this only renderes a slot with the name "title" -->
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A wonderful Quote</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Quote from './components/Quote.vue';
import Author from './components/Author.vue';
import New from './components/New.vue';


export default {
  data: function() {
    return {
      quoteTitle: 'The Quote',
      selectedComponent: 'appQuote'
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New,
  }
}
</script>

<style scoped>

</style>
