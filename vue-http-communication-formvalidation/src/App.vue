<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.username" />
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input class="form-control" type="text" v-model="user.email" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <input type="text" class="form-control" v-model="node" />
        <br />
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users" v-bind:key="u">{{u.username}} - {{u.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          user: {
            username: '',
            email: ''
          },
          users: [],
          resource: {},
          node: 'data',
        }
      },
      methods: {
        submit() {
        //   console.log(this.user);
        //   //$http is implemented by vue-recourse
        //   this.$http.post('data.json', this.user)
        //       .then(response => {
        //         console.log(response);                
        //       }, error => {
        //         console.log(error);
        //       });

//This is a how to create POST request with vue-resources
          // this.resource.save({}, this.user);
          this.resource.saveAlt(this.user);
        },
        fetchData() {
        // this.$http.get('data.json')
        //     .then(response => {
        //       return response.json();
        //     })
        //     .then(data => {
        //       const resultArray = [];
        //       for (let key in data) {
        //         resultArray.push(data[key]);
        //       }
        //       this.users = resultArray;
        //     });

        this.resource.getData({node: this.node})
          .then(response => {
              return response.json();
            })
            .then(data => {
              const resultArray = [];
              for (let key in data) {
                resultArray.push(data[key]);
              }
              this.users = resultArray;
            });
        }
      },
      created() {
        //Below we find a custom resource of how to create POST requiest.
        const customActions = {
          saveAlt: {method: 'POST', url: 'alternative.json'},
          getData: {method: 'GET'}
        };
        this.resource = this.$resource('{node}.json', {}, customActions);
      }
    }
</script>

<style>
</style>
