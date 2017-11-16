<template>
  <editor :id="editorId" :content="content" :lang="this.lang" :theme="this.theme" :height="'700px'" :sync="true" :options="options"></editor>
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
        fontSize: '14pt',
      }
    }
  },
  components: {
    editor
  },
  mounted() {
    var vm = this;
    vm.$on('editor-update', this.update);
  },
  methods: {
    start: function() {
      console.log(this.content)
    },
    update: function(editorText) {
      let data = {
        lang: this.lang,
        text: editorText
      }

      this.$emit('update-content', data)
    }
  }
}
</script>

<style lang="scss">

</style>
