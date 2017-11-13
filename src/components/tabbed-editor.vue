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
    background-color: #002B36;
    text-align: left;

    .tabs {
      position: relative;
      width: 100%;
      height: 30px;
      background-color: #111;
      border: none;
      padding-bottom: 1px;

      .tab {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #073642;
        height: 100%;
        padding-left: 20px;
        padding-right: 20px;
        float: left;
        font-size: 1em;
        color: white;
        text-transform: uppercase;
      }

      .tab.active {
        background-color: #002B36;
        border-top: 2px solid #111;
        border-left: 2px solid #111;
        border-right: 2px solid #111;
      }
    }
  }
</style>
