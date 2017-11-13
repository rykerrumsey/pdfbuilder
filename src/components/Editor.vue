<template>
  <editor :id="editorId" :content="content" :lang="this.lang" :theme="this.theme" :height="'700px'" :options="options"></editor>
</template>

<script>
import editor from 'vue2-ace'
import 'brace/mode/html'
import 'brace/mode/css'
import 'brace/mode/javascript'
import 'brace/theme/solarized_dark'

export default {
  name: 'Editor',
  props: ['editorId', 'content', 'lang', 'theme'],
  data () {
    return {
      options: {
        fontSize: '16pt',
      }
    }
  },
  components: {
    editor
  },
  mounted() {
    var vm = this;
    //vm.$on('editor-update', vm.function);
  }
}
</script>

<style lang="scss">

</style>
