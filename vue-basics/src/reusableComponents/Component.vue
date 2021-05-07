<!-- This component would be called like this -->
<!--<Component :name="'MyVariable'" :age="'25'" /> -->

<template>
  <div class="plan">
    <div class="description">
      <span class="title">
        {{ name }}
      </span>
      <p>age: {{ age }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: () => "this is default",
    },
    age: Number,
  },
};
</script>

<style>
</style>