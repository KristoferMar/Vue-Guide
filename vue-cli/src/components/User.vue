<template>
  <div class="component">
    <h1>The user Component</h1>
    <p>I'm the user component</p>
    <button @click="changeName">Change my name</button>
    <p>name is {{ name }}</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-details :name="name" @nameWasReset="name = $event" :userAge="age"></app-user-details>
      </div>
      <div>
        <app-user-edit :userAge="age"
          @ageWasEdited="age = $event"
        ></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: "Max"
    };
  },
  methods: {
    changeName: function() {
      this.name = "Dauda";
    },
    resetName() {
      this.name = "Max";
    }
  }
};
</script>