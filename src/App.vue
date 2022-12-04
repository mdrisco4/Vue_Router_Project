<template>
  <nav>
    ____ <router-link to="/">Home</router-link> ____
    <router-link to="/about">About</router-link> ____
    <router-link to="/animations">Animations</router-link>
  </nav>
  <!-- <ul class="grid">
    <li v-for="content in contents" :key="content.id">
      <div class="image">
        <img :src="content.imageSrc" />
      </div>
    </li>
  </ul>
  <ul class="list">
    <li v-for="content in contents" :key="content.id">
      <img :src="content.imageSrc" />
      <div class="listcontent">
        <h2>{{content.title}}</h2>
        <p>{{content.description}}</p>
      </div>
  </li>
  </ul> -->
  <router-view />
</template>

<script>
import axios from "axios";


// export default {
//   name: "App",
//   data()
//   {
//     return {
//       list:[]
//     }
//   },

//   async  mounted() {
//     let result = await axios.get("https://reqres.in/api/users?page=1");
//     console.log(result.data.data)
//     this.list=result.data.data
//   },
// };


// export default {
//     data() {
//         return {
//             res: [],
//         };
//     },
//     name: "App",
//     methods: {
//         // The get method called by the function
//         onGet() {
//             axios
//                 .get("https://jsonplaceholder.typicode.com/todos")
//                 .then((response) => {
//                     console.log(response);
//                     console.log("hello")
//                     // using stringify to beautify the output
//                     this.res = JSON.stringify(response.data);
//                 })
//                 .catch((errors) => {
//                     console.log(errors); // Errors
//                 });
//         },
//     },
// };


export default {
    data() {
        return {
          contents: null,
            res: [],
        };
    },
    mounted () {
      axios
      // .get('https//api.coindesk.com/v1/bpi/currentprice.json')
      .get('https//bibekshakya.com/demo/vue/switchable-grid/api/products/json')
      .then(response => (this.contents = response))
    }
    
};



</script>

<style>
/* .item {
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
} */

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
