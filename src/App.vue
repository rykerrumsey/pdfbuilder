<template>
  <div id="app">
    <topMenu></topMenu>
    <tabbedEditor></tabbedEditor>
    <viewer></viewer>
    <status></status>
  </div>
</template>

<script>
import topMenu from './components/Menu.vue'
import tabbedEditor from './components/tabbed-editor.vue'
import viewer from './components/Viewer.vue'
import status from './components/Status.vue'

export default {
  name: 'app',
  data() {
    return {
      content: ''
    }
  },
  components: {
    topMenu,
    tabbedEditor,
    viewer,
    status
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
