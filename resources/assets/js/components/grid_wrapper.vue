<template>
  <div class="grid-wrapper">
    <div class="grid-wrapper__content">
      <!-- product list -->
      <template v-for="product in products">
        <product :product="product"></product>
      </template>
    </div>
  </div>
</template>
<script>
  import productService from '_js/service'
  import product from '_components/product.vue'

  export default {
    data() {
      return {
        products: []
      }
    },
    mounted() {
      this.fetchProducts()
    },
    methods: {
      fetchProducts() {
        productService.getProducts().then(result => {
          if(result.status == 200) {
            this.products = result.data.products || []
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    components: {
      product
    }
  }
</script>
<style lang="sass" scoped>
  @import "~_sass/_vars.scss";

  .grid-wrapper {
    padding: 10px;

    &__content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: $screen-sm;
      margin: 0 auto;
    }
  }
</style>