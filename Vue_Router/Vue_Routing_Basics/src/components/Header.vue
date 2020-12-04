<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact>
      <a>Home</a>
    </router-link>
    <router-link to="/user" tag="li" active-class="active">
      <a>User</a>
    </router-link>
    <router-link to="/aboutme" tag="li" active-class="active">
      <a>Aboutme</a>
    </router-link>
  </ul>
</template>