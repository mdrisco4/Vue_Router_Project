<template>
  <nav>
    ____ <router-link to="/">Home</router-link> ____
    <router-link to="/about">About</router-link> ____
    <router-link to="/animations">Animations</router-link>
  </nav>
  <h1>Call API</h1>
  <router-view />
</template>

<script>
import axios from "axios";
export default {
  name: "App",

  async  mounted() {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    console.log(result.data.data)
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
