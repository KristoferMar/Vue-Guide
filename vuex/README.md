<h1>Vuex</h1>

Vuex is a statemangement framework for vue. It makes sure that we get an centalized state in our application which let's us store and hold values in an effecient way. This also makes an application much more scalable in the future. 

Install package with the following command: 
<i>npm install --save vuex </i>

Install bable extension to be able to make use of the spread operator: 
<i> npm install --save-dev babel-preset-stage-2 </i>

<h2> State </h2>

- State makes use of getters to get and display state data. <br>

You can view and tap into your current state the following ways: <br>
<pre>
console.log(this.$store.state);
</pre> 
<br>
<pre>
console.log(this.$store.getters);
</pre>

<br>
<h2> Mutations </h2>
Mutations change the state from the store, we use them to kind if "dispatch actions".

- Mutations have to run synchronously. You can't run async functions or anything like that inside a mutation. 
- We can trigger stuff async by making use of actions between our components and our mutations. 

<h2> Actions </h2>

Actions are dispatched and triggered in our components, and whenever a given action task is done, we can communicate directly to a mutation at make it switch / change state.

- It's a good practice to always use actions. 

<h2> Additional information </h2>

It's important that all your getters, mutations, actions and so on has a unique name becuase they are in the end all used in the store.js which is a shared namespace.

<h2> Project setup </h2>
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
