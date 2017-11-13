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
        <div class="button">
          render
        </div>
        <div class="button">
          export
        </div>
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
  },
  sockets: {
    
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
    background-color: #002B36;

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
        height: 70%;

        .button {
          display: flex;
          flex-direction: row;
          align-items: center;
          background-color: #073642;
          height: 100%;
          padding-left: 20px;
          padding-right: 20px;
          float: left;
          font-size: 1em;
          color: #E0E2E4;
          text-transform: uppercase;

          &:first-child {
            margin-right: 10px;
          }
        }
      }

      & > * {
        margin-left: 3em;
      }
    }
  }
</style>
