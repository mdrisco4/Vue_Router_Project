<template>
    <div class="animation">
      <h1>This is an animation page</h1>
    </div>
    <h3>sfah</h3>
  </template>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h1 {
  color: red;
  transition: transform .7s ease-in-out;
}
h1:hover {
    color: greenyellow;
    transform: rotate(360deg);
}
h3 {
    font-size: 60px;
}
h3:hover {
    color: blue;
    font-size: 45px;
}
</style>