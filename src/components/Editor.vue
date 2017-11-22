<template>
  <editor :id="editorId" :content="editorContent" :lang="this.lang" :theme="this.theme" :height="'700px'" :sync="true" :options="options"></editor>
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
      editorContent: this.content,
      options: {
        fontSize: '14pt',
        useWorker: false
      }
    }
  },
  components: {
    editor
  },
  created() {

  },
  mounted() {
    var vm = this;
    vm.$on('editor-update', this.update);
  },
  methods: {
    update: function(editorText) {
      let data = {
        lang: this.lang,
        text: editorText
      }

      this.$emit('update-content', data)
    }
  },
  sockets: {
    loadfiles: function(data) {
      if(this.lang === 'html') {
        this.editorContent = data.html
      } else if(this.lang === 'css') {
        this.editorContent = data.css
      }
    }
  }
}
</script>

<style lang="scss">

</style>
