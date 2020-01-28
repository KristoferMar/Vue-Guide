import Vue from "vue";
import App from "./App.vue";

//Exporting a public constant which is a VUE object.
export const eventBus = new Vue();

// or

export const eventBus2 = new Vue({
  data: {
    // Some data which can be accesed form everywhere.
  },
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});


new Vue({
  el: "#app",
  render: h => h(App)
});

