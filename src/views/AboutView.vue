<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>creating some tags to start adding content to the site</h2>
  </div>
  <p>Filling out some paragraphs here.</p>
  <P>Here is a second paragraph</P>
  <p>Here is the conclusion</p>
  <div>{{res}}</div>
  <div id="app">
    <!-- {{ info }} -->
  </div>
</template>

<!-- API Key: coinranking255ccad42a9431bab909c2bce7776035ddcdfce2cf9306fc   -CoinRanking -->
<script>
import axios from "axios";
export default {
    data() {
        return {
            res: [],
        };
    },
    name: "App",
    methods: {
        // The get method called by the function
        onGet() {
            axios
                .get("https://jsonplaceholder.typicode.com/todos")
                .then((response) => {
                    console.log(response);
                    // using stringify to beautify the output
                    this.res = JSON.stringify(response.data);
                })
                .catch((errors) => {
                    console.log(errors); // Errors
                });
        },
    },
};
</script>


<style scoped>
h1 {
  color: red;
  transition: transform .7s ease-in-out;
}
h1:hover {
    color: black;
}
h2 {
    font-size: 30px;
    margin: 40px 0 0;
}
h2:hover {
    color: blue;
    font-size: 45px;
}
</style>
