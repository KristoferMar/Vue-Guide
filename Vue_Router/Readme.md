<h1>Vue Router</h1>

In this section you will learn everything you need to know about the Vue Router. <br>

I will find two projects that take you through the usage of the vue Router<br>

<h2>Content</h2>

<h4>router-view</h4>
The router-view component is a functional component that renders the matched component for the given path. <br>
- router-vue will render all content of all components in our app and make sure the apps functions as a single page application. <br>

<br>
<h4>Lazy loading</h4>
It means that instead of loding all JavaScript of the webpage at the same time you will configure the router to only load the javascript that is related to the individual views that are are opned up and being used. <br>
- This improves performance and makes the application more smouth.<br>
- This is also refered to as "Code Splitting" <br><br>
Link to knowledge:<br>
https://vueschool.io/lessons/how-to-lazy-load-routes-with-vue-router


<br>
<h4>Named routing</h4>
It's highly recommended to make use of named routing like the example below.<br> 
"router-link :to="{ name: 'DestinationDetails', params: { id: destination.id } }">"<br><br>

This enables us to create dynamic routing in an effecient way.<br>


<br>
<h4>Related links</h4>

Vue School:<br>
https://vueschool.io/lessons/vue-router-course-and-resource-overview 