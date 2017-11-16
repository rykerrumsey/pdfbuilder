<template>
  <div id="app">
    <topMenu :content="content"></topMenu>
    <tabbed v-on:update-css="updateCSS" v-on:update-html="updateHTML" :content="content"></tabbed>
    <viewer></viewer>
    <status></status>
  </div>
</template>

<script>
import topMenu from './components/Menu.vue'
import tabbed from './components/Tabbed.vue'
import viewer from './components/Viewer.vue'
import status from './components/Status.vue'

export default {
  name: 'app',
  data() {
    return {
      content: {
        html: '',
        css: ''
      }
    }
  },
  created: function() {
    this.$socket.emit('startup')
  },
  components: {
    topMenu,
    tabbed,
    viewer,
    status
  },
  methods: {
    updateHTML: function(html) {
      this.content.html = html
    },
    updateCSS: function(css) {
      this.content.css = css
    }
  },
  sockets: {
    loadfiles: function(data) {
      this.updateHTML(data.html)
      this.updateCSS(data.css)
    }
  }
}
</script>

<style lang="scss">

body {
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #E0E2E4;
}
</style>
