<h1> vue-routing </h1>

Install vue router with the following command:<br>
npm install --save vue-router

<h2> Information </h2>

- Default mode is /#/ for routing. /#/ Enables the frontend to handle routing on it's own without sending requests to the server. Part in front of the hashtag is sent to the server... the part after the hashtag is handled by the application on it's own.
- The hashtag is called history mode.
- Learn more about this on: <a>www.router.vuejs.org</a>

- :id is a flexible element inside our url, this is how we create dynamic urls.

<h2> Explanation </h2>

Routing is setup and handled in the "routes.js" and "main.js" files. Specially the router.js file keeps track of your routes and strucuter. In there you will also find two constants which are created to implement "lazy loading". <br>

The best way to learn about vue routing is by analyzing the code and play around with this simple setup: <br>

Routing setup <br>
https://github.com/KristoferMar/Vue-Guide/blob/master/vue-routing/src/routes.js

<h2> Project setup </h2>

```
yarn install
```

<h3> Compiles and hot-reloads for development </h3>

```
yarn serve
```

<h3> Compiles and minifies for production </h3>

```
yarn build
```

<h3> Customize configuration </h3>

See [Configuration Reference](https://cli.vuejs.org/config/).
