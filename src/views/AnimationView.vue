<template>
  <div class="animation">
    <h1>animations</h1>
  </div>
  <h3>sfah</h3>
</template>

<script>
// import { conditionalExpression } from "@babel/types";
import axios from "axios";

const options = {
  method: "GET",
  url: "http://localhost:8080/v2/coins",
  // axios.defaults.baseURL: "api";

  headers: {
    "x-access-token": "coinranking255ccad42a9431bab909c2bce7776035ddcdfce2cf9306fc",

  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    console.log('ft')
  })
  .catch(function (error) {
    console.error(error);
  });
</script>

<style scoped>
h1 {
  color: red;
  transition: transform 0.7s ease-in-out;
}
h1:hover {
  color: greenyellow;
  transform: rotate(360deg);
}
h3 {
  font-size: 60px;
  margin: 90px 0 0;
}
h3:hover {
  color: blue;
  font-size: 45px;
}
</style>
