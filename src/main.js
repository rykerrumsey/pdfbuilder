import Vue from 'vue'
import App from './App.vue'

//import plugins
import AxiosPlugin from './plugins/axios/axios'
import AcePlugin from './plugins/ace/index'

Vue.use(AcePlugin)
Vue.use(AxiosPlugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
