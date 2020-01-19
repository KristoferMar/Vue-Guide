# filter-mixins-guide

## Information

Filter & mixes transforms data which the user sees.

Mixers are most often used to avoid code dublications. You merge code which is reusable in different components.

1. Global mixins come first
2. Then external mixins come
3. Last the mixin from a component internaly is runned. 

This means that the final component always have the last word. The component is able to control the data as wanted. 

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

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
