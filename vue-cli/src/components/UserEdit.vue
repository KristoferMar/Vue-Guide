<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p></p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
  props: ["userAge"],
  methods: {
    editAge() {
      this.age = 30;
      // this.$emit('ageWasEdited', this.userAge);
      eventbus.$emit('ageWasEdited', this.userAge);
      //or
      eventBus.changeAge(this.userAge);
    }
  }
};
</script>

<style scoped>
</style>