<template>
  <div id="viewer">
    <embed src="http://www.pdf995.com/samples/pdf.pdf" width="100%" height="730px" type='application/pdf'>
  </div>
</template>

<script>
export default {
  name: 'viewer',
  data () {
    return {

    }
  },
  sockets: {
    connect_me: function() {

    }
  }
}
</script>

<style lang="scss">
  #viewer {
    float: left;
    width: 50%;
    height: 100%;
  }
</style>
