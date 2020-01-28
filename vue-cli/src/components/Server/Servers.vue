<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="index in 5" :key="index">Server #{{ index }}</li>
    </ul>
  </div>
</template>

<script></script>

<!-- scoped means css focused and applyed only to one component. --> 
<style scoped>
div {
  border: 1px solid blue;
}
</style>
