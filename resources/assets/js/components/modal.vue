<template>
  <div class="grid-wrapper">
   
  </div>
</template>

<script>
  export default {
    computed: {
      state: function () {
        return this.$store.state.modal
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "~_sass/_vars.scss";

  .grid-wrapper {

  }
</style>