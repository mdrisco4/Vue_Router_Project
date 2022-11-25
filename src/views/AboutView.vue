new Vue({
  el: '#app'
  data () {
    return {
      info:  null
    }
  },
  mounted () {
    axios
    .get(https://api.coindesk.com/v1/bpi/currentprice.json)
    .then(response => (this.info = response))
  }
})

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>creating some tags to start adding content to the site</h2>
  </div>
  <p>Filling out some paragraphs here.</p>
  <P>Here is a second paragraph</P>
  <p>Here is the conclusion</p>
  <div id="app">
    <!-- {{ info }} -->
  </div>
</template>

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
