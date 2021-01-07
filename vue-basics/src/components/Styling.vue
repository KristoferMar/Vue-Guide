<template>
  <div id="app">
      <button  @click="darkMode = !darkMode" :style="{backgroundColor: darkMode ? '#813931' : '#558E61'}">Click me!</button>
      <div class="textbox" :class="{'dark': darkMode}">
          This is some text which is cool
      </div>
       
  </div>
</template>

<script>
export default {
    data() {
        return {
            darkMode: false,
        }
    },
}
</script>

<style>

.textbox {
    padding: 20px;
    width: calc(100% - 40px);
    max-width: 480px;
    border: 1px solid #ccc;
    font-size: 1.2rem;
    color: #333;
    background-color: #efefef;
}

</style>