<template>
  <div id="viewer">
    <div v-if="hasRendered" class="none">
      No PDF has been rendered.
    </div>
    <object v-else :data="pdf" type="application/pdf" width="100%" height="730px"></object>

  </div>
</template>

<script>
export default {
  name: 'viewer',
  data () {
    return {
      pdf: ''
    }
  },
  computed: {
    hasRendered: function() {
      if(this.pdf === '')
        return true
      else {
        return false
      }
    }
  },
  sockets: {
    generatepdf: function(pdf) {
      this.pdf = `data:application/pdf;base64,${pdf.buffer}`
    }
  }
}
</script>

<style lang="scss">
  #viewer {
    box-sizing: border-box;
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 730px;
    background-color: #002B36;
    color: #E0E2E4;
    font-size: 3em;
    border: 2px solid #111;

    .none {

    }
  }
</style>
