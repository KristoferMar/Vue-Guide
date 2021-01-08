<template>
  <div class="plan">
    <div class="description">
        <span class="title">
            {{ name }} 
        </span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        name: {
          type: String,
          required: true
        },
        age: Number,
    }
}
</script>

<style>

</style>