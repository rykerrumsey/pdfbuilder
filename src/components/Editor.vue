<template>
  <div id="editor">
    <edit v-model="content" @init="editorInit();" lang="html" theme="solarized_dark" width="100%" height="500"></edit>
  </div>
</template>

<script>


export default {
  name: 'editor',
  data () {
    return {
      content: ''
    }
  },
  components: {
    edit: require('vue2-ace-editor'),
  },
  methods: {
    editorInit: function () {
      require('brace/mode/html')
      require('brace/mode/javascript')
      require('brace/mode/less')
      require('brace/theme/solarized_dark')
    }
  }
}
</script>

<style lang="scss">
  #editor {
    position: relative;
    float: left;
    width: 50%;
    height: 100%;
    background-color: black;
    text-align: left;

  }
</style>
