import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'

// Vue.prototype.$http = axios

// app = new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

createApp(App).use(router).mount('#app')
