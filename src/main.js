import Vue from 'vue'
import App from './App.vue'

//import plugins
import AxiosPlugin from './plugins/axios/axios'
import VueSocketio from 'vue-socket.io';

Vue.use(AxiosPlugin)
Vue.use(VueSocketio, 'http://localhost:2024')

new Vue({
  el: '#app',
  render: function(h) {
    return h(App)
  },
  sockets: {
    connect_me: function(arg) {
      console.log(arg)
    }
  }
})
