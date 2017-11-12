<template>
  <div id="menu">
    <div class="container">
      <div class="logo">
        <span class="title">pdfbuilder</span>
      </div>
      <div class="version">
        <span>version 0.1.0</span>
      </div>
      <div class="actions">
        <button>Render</button>
        <button>Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  #menu {
    display: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: black;

    .container {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;

      .logo {
        .title {
          font-size: 2em;
        }
      }

      .version {

      }

      .actions {
        
      }

      & > * {
        margin-left: 3em;
      }
    }
  }
</style>
