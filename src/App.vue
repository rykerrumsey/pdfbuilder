<template>
  <div id="app">
    <topMenu></topMenu>
    <editor></editor>
  </div>
</template>

<script>
import topMenu from './components/Menu.vue'
import editor from './components/Editor.vue'

export default {
  name: 'app',
  data () {
    return {
      content: ''
    }
  },
  components: {
    topMenu,
    editor
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
  color: #2c3e50;
}
</style>
