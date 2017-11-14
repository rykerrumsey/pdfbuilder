<template>
<div id="tabbed">
  <div class="tabs">
    <div @click="changeEditor('html')" :class="['tab', currentWindow === 'html' ? activeClass : '']">
      <span>html</span>
    </div>
    <div @click="changeEditor('css')" :class="['tab', currentWindow === 'css' ? activeClass : '']">
      <span>css</span>
    </div>
  </div>
  <Editor v-show="currentWindow === 'html'" v-on:update-content="update" id="html" :content="this.content.html" lang="html" theme="solarized_dark"></Editor>
  <Editor v-show="currentWindow === 'css'" v-on:update-content="update" id="css" :content="this.content.css" lang="css" theme="solarized_dark"></Editor>
</div>
</template>

<script>
import Editor from './Editor.vue'

export default {
  name: 'tabbed',
  props: ['content'],
  data () {
    return {
      currentWindow: 'html',
      activeClass: 'active'
    }
  },
  components: {
    Editor
  },
  methods: {
    changeEditor: function(language) {
      this.currentWindow = language
    },
    update: function(data) {
      if(data.lang === 'html') {
        this.$emit('update-html', data.text)
      } else if (data.lang === 'css') {
        this.$emit('update-css', data.text)
      } else {
        console.log("Editor returned an unknown language: " + data.lang)
      }
    }
  }
}
</script>

<style lang="scss">
  #tabbed {
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
        cursor: pointer;
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
