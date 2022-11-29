<template>
  <div class="home">
    <h1>Users Data</h1>
    <ul class="item" v-for="item in list" :key="item.id">
    <li>{{item.id}}</li>
    <li>{{item.email}}</li>
    <li>{{item.first_name}} {{item.last_name}}</li>
    <li>
      <img :src="item.avatar" />
    </li>
  </ul>
  </div>
</template>

<script>
  import axios from "axios";
export default {
  name: 'HomeView',
  // components: {
  //   // HelloWorld
  // },
  data()
  {
    return {
      list:[]
    }
  },

  async  mounted() {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    console.log(result.data.data)
    this.list=result.data.data
  },
};
</script>

<style>
.item {
  display: flex;
  justify-content: center;
}
 
 .item li {
   display: inline-block;
   border: 1px solid black;
   width: 180px;
   text-align: center;
   padding: 5px;
  }
  
  .item img {
    width: 50px;
  }
  </style>