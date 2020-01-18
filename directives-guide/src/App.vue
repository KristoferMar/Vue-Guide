<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Some Text'"></p>
        <!-- remember to sanatize for corss site scripting -->
        <p v-html="'<strong>Some Text</strong>'"></p>
      </div>
    </div>
    <hr />
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Custom Directives</h1>
      <p v-highlight:background.delayed="'red'">Color this</p>
      <!-- down below we find a local created directive -->
      <p
        v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}"
      >Color this</p>
    </div>
  </div>
</template>

<!-- local directives are implemented below -->
<script>
    export default {
      components: {

      },
      directives: {
        'local-highlight': {
          bind(el, binding) {
                var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    if(binding.modifiers['blink']) {
      let mainColor = binding.value.mainColor;
      let secondColor = binding.value.secondColor;
      let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
    }, delay);
    } else {
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value.mainColor;
      } else {
        el.style.color = binding.value.mainColor;
      }
    }, delay);
    }
          }
        }
      }
    }
</script>

<style>

</style>
