<template>
    <div class="animation">
      <h1>animations</h1>
    </div>
    <h3>sfah</h3>
  </template>

<style scoped>
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
    margin: 40px 0 0;
}
h3:hover {
    color: blue;
    font-size: 45px;
}
</style>