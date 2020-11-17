<template>
  <div>
    <!-- In terms of syntax {{object.object}} is used directly between the html elements "<div>here</div>" -->
    <!-- Elements in loop can also be used as html parameters as we see in the <li> tag with the use of ":" syntax. -->
    <h2>Vue For-loop</h2>
    <ul v-for="person in persons" :key="person">
      <li :src=person.url>
        name: {{ person.name }} <br />
        age: {{ person.age }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "For-loop",
  data() {
    return {
      persons: [
        {
          name: "Kristofer",
          age: 25,
          url: "This would be some kind of url"
        },
        {
          name: "Henrik",
          age: 25,
        },
        {
          name: "Liam",
          age: 32,
        },
        {
          name: "Sofus",
          age: 24,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
