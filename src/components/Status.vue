<template>
  <div id="status">

  </div>
</template>

<script>
export default {
  name: 'status',
  data () {
    return {

    }
  },
  sockets: {

  }
}
</script>

<style lang="scss">
  #status {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #111;
    z-index: 4;
  }
</style>
