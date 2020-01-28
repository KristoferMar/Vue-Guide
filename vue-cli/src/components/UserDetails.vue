<template>
  <div class="component">
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName">Reset name</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
  //We use props to pass data between components
  props: {
    name: [string, Array], //Type specification.

    //You can also make properties required.
    someProperty: {
      type: String,
      required: true
      //default: null you can also have a default value.
    },
    userAge: Number
  },
  methods: {
    //Method executed on props
    //All props are like normal property.
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.myName = "Max";
      this.$emit("nameWasReset", this.myName); //Emit changes to the parrent component to tell about changes
    }
  },
  created() {
    eventBus.$on('ageWasEdited', (data) => {
      this.userAge = data;
    } ); //Second argument is the incoming data.
  }
};
</script>

<style scoped>
</style>