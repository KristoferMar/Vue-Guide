<template>
  <div>
    <h1>The Home Page</h1>
    <hr />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores, aut autem, blanditiis consequuntur
      dolore excepturi laborum maiores minima nihil non nulla obcaecati quas quibusdam quod sed suscipit vero
      voluptatem.
    </p>
  </div>
</template>

<script>
export default {
  //Life cycle hook for the router
  beforeRouteEnter(to, from, next) {
    // You can implement some kind of kondition here.
    if (true) {
      next();
    } else {
      next(false);
    }
    // ...
    // next(vm => {
    //     vm.link;
    // });
  },
};
</script>