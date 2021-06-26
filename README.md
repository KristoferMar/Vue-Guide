<h1> Vue-Guide </h1>
This project takes you through the basics of Vue and it also provides you with reusable components and Modules. <br>

<br>
<h2>Get started</h2>
The vue cli can be installed with the floowing command <br>
<i>npm install -g @vue/cli</i>
or<br>
<i>yarn global add @vue/cli</i>

Using the vue cli we create our project with the following command: <br>
<i>vue create projectname</i> <br>

<h2>Vue core information</h2>

Vue in it's core consits of multipe parts but the fundementals are.

- Template: View
- Script: Vue logic
- Style: View Design

<br>
<h2>Vue Components</h2>
<h3>props</h3>
Props can be used to create generical components. <br>
Below is an example of how we can parse props between components. <br>
https://github.com/KristoferMar/Vue-Guide/blob/master/vue-basics/src/reusableComponents/Component.vue<br>

<br>
<h3>Computed Properties</h3>
A computed property is used to declaratively describe a value that depends on other values. When you data-bind a computed property inside the template, Vue knows when to update the DOM when any of the values depended upon by the computed property has changed. This can be very powerful and makes your code more declarative, data-driven and thus easier to maintain.<br>

<br>
<h2> Vue functionalities </h2>
{{ someData }} = How we load and display variables or function returns in the html. We bind code this way <br>
{{ counter * 2 > 10 ? "greater than 10" : 'Smaller than 10 }} = You are able to write javascript in template code like this <br>
v-bind = Enables us to load dynamic links like google and such into the html <br>
v-once = all content inside a "v-once" element will only be loaded once. <br>
v-html = allows us to acctually render html code and not escape it <br>
v-on = listen to something to receive something from an event. We use this on buttons. We can use it in multiple ways like v-on:click="something" or v-on:mousemove="someVariable" <br>
v-model = Setup <b>twoway databinding</b> like v-model="name". this means that whenever the name changes it changes dynamically in the html code. <br>
@click = Is a way to execute logic without having to create a function in the Methods dataproperty. Example could be @click="attachRed =  !attachRed" where attachRed is simply a data variable. <br> 
<h4>Dynamic styling</h4>
Vue enables you to create dynamic styling with the following elements: <br>
:class = Is a way to set the class dynamically. We are able to add css classes to e.g a div. <br>
:style = Is a way to create dynamic styling with css elements inside the html. <br>
Example: <br>
https://github.com/KristoferMar/Vue-Guide/blob/master/vue-basics/src/components/Styling.vue <br>

<h4>Conditionals & Lists</h4>

- v-if="show" lets you bind to condition or property in this case 'show'. You can also attach if to a <'template which can wrap multiple elements inside. <br>
- v-else lets you bind an else on the if statement. <br>
- v-else-if lets you bind elseIf statements on your if statement. <br>
- v-show="show" allows us to just hide dom elements instead of detaching elements with if statement. <br>
<h3>for loop: v-for</h3>
- v-for="ingredient in ingredients" allows us to loop through an array and pull out the content for use. In this case ingredients is an array of strings stored in the dataproperty in vue. We are able to get index of all elements by just calling {{ i }}. We are also able o call v-for="" on a '<'template which will render all content in template multiple times. You can also loop through properties of objects by looping inside a loop. The second loop would look like v-for="value iningredient". <br>
- v-for="n in 10" will loop through the range of integers and list all numbers with {{ n }}. this is how you can loop through numbers. <br><br>
  Example:<br>
  https://github.com/KristoferMar/Vue-Guide/blob/master/vue-basics/src/components/ForLoop.vue <br><br>
- You can add elements to an loop like e.g <'button @click="ingredients.push('spices')" but it's a good idea to add :key="ingredient" in the v-for element to make sure new added elements don't overwrite old once. <br>

<h2>Vue Components</h2>
Vue 'components' start with new Vue({ dataproperties }) and consists of different data properties which include functions mand methods inside them. <br> <br>

Properties:

- "el" - is the dataproperty which binds vue template to our html code. if we want to execute js code on a div with id="app" el will be = '#app'. <br>
- "Data: {}" - is a dataproperty but is NOT reactive, becuase the data property does not include methods. <br>
- "components: {}" - this option is used to register a component logically in a view or in another component. <br>
- "props: {}" - Properties used for assignment in the component when being used. <br>
- The Methods property is used to create methods to interact with data in the data property. Method properties are executed every time the dom is updated. <br>
- The Computed property lets us store properties and it is not directly data. Data in the computed property can be used just like you use a property in a data object. You dont have to use if as functions. Computed properties are only executed when needed. Computed properties ALWAYS need to run synchronously. <br>
- Watch is a data properties which we use to run async functions. We are able to store local variables in the watch properties. <br>

events are well used in vue and they have some default implementation posibilities. $event is the reserved variable name for an event. We can trigger event functions directly in the html like v-on:mousemove.stop <br>

We aso have key modifiers they looke like v-on:keyup.enter.space="something", which will trigger if you press space or enter <br>

<h3> Vue Lifecycle hooks </h3>
All lifecycle hooks are registered directly in the root of the vue constroctor and not inside the method property.

- beforeCreate: function() --> Code is executed before everything else. <br>

- created: function() --> Code is executed after the component has finished it's creation <br>

- beforeMount: function() --> Executed after it's created but before it's mounted to the DOM <br>

- mounted: function() --> Created, mounted and visible in the browser <br>

- beforeUpdate: function() --> Executed on data change and before the change is finished and dispalyer <br>

- updated: function() --> Executed right after the DOM has updated <br>

- beforeDestroy: function() --> Executed before an instance is destroyed / removed <br>

- destroyed: function() --> When component is destroyed (good for cleanup) <br>

<h3> Parsing of data </h3>

Between parrent and child component

- You can prase data thorugh props and make use of events to handle the changes of the props which where made.
- You can prase props and handle changes in the same parrent component which you parsed with.

Between sibling component

1. Event bus : Central part which holds information like angular services. An example of this can be found in main.js in the cli project and in userDetails.vue and UserEdit.vue.

2. Parent / Chidld chains with custom events and props like in REACT.

<br> 
<h2>Vuex - State management</h2>
Section includes: <br>
- State <br>
- Mutations <br>
- Actions <br>
<br>
Details:<br>
https://github.com/KristoferMar/Vue-Guide/tree/master/vuex 


<br><br>
<h2>Vue Router</h2>
Vue Router is a the default tool of use in terms of how we handle routing in Vue.js. <br>

Vue router section:<br>
<i>https://github.com/KristoferMar/Vue-Guide/tree/master/Vue_Router</i>

<h4> Parse html data via slots </h4>
We can reserve and parse html code via sloths between components.

- You can also create dynamic component which parses data. This can be seen in the advanced project in the app.vue file.

<h2> Good to know </h2>

- You are able to add and make use of special plugins by calling "vue add" on the special plugins which start with "vue-cli-plugin" and then a plugin name. Besides that you can always also use the npm install and install plugins this way but "vue add" provides you with much more logic.

- You can make use of environment variables by creating a new file called ".env" in the src folder and then create variables in that file like VUE_APP_URL=www.webey.dk. You can then create a .env.development file and put the url in both of them, and you can then toggle between production and development. You are ofc also able to create .env.production
