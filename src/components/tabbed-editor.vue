<template>
<div id="editor">
  <div class="tabs">
    <div @click="changeEditor('html')" :class="['tab', currentWindow === 'html' ? activeClass : '']">
      <span>html</span>
    </div>
    <div @click="changeEditor('css')" :class="['tab', currentWindow === 'css' ? activeClass : '']">
      <span>css</span>
    </div>
  </div>
  <Editor v-show="currentWindow === 'html'" id="html" :content="html" lang="html" theme="solarized_dark"></Editor>
  <Editor v-show="currentWindow === 'css'" id="css" :content="css" lang="css" theme="solarized_dark"></Editor>
</div>
</template>

<script>
import Editor from './Editor.vue'

export default {
  name: 'tabbed-editor',
  props: ['content'],
  data () {
    return {
      currentWindow: 'html',
      html: '',
      css: '',
      activeClass: 'active'
    }
  },
  components: {
    Editor
  },
  methods: {
    changeEditor: function(language) {
      this.currentWindow = language
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

    .tabs {
      position: relative;
      width: 100%;
      height: 30px;
      background-color: black;
      border: none;

      .tab {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: blue;
        height: 100%;
        padding-left: 20px;
        padding-right: 20px;
        float: left;
        font-size: 1em;
        color: white;
        text-transform: uppercase;
      }

      .tab.active {
        border-top: 2px solid black;
        border-left: 2px solid black;
        border-right: 2px solid black;
      }
    }
  }
</style>
