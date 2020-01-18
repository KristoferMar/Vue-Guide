# directives-guide

## Hooks
Dont change anything inside your directives becuase it's controled by vue

1. Bind(el, binding, vnode) --> Once Directives is Attached (THE IMPORTANT ONE)
2. inserted(el, binding, vnode) --> As soon as it is inserted into the DOM.
3. update(el, binding, vnode, oldVnode) --> Once Component is Updated (without children)
4. componentUpdated(el, binding, vnode, oldVnode) --> Once Component is Updated (with Children)
5. unbind(el, binding, vnode) --> Once Directive is Removed.

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
