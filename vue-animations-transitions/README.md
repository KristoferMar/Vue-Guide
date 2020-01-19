# vue-animations-transitions

We can use the <-transition-> component to animate anything which is between the oppening and closing brackets of a transition. This is a default component in VUE created for anomations.

You can ONLY animate one element with a transition! 

You can not anymate a list or something like that.. you can have multiple elements inside a transition but you can only animate one at a time.

We use the v-if and v-show to animate elements in the DOM.

You can find all useable animation classes and functions on the related github. 

<a>https://github.com/daneden/animate.css</a>

## Animate.css

Is a library which enables us to do epic CSS animations.

## JS Animations 

You are able to use JS aswell as CSS to animate your HTML elements. An example of this can be found in APP.vue. 

- It is often smart to create JS animations within a folder which is callable for components. This way you seperate animation logic and make your component code a little more lean.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
