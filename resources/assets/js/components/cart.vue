<template>
  <div class="cart">

  </div>
</template>
<script>
  import productService from '_js/service'
  import cartItem from '_components/cart-item.vue'

  export default {
    data() {
      return {
        products: []
      }
    },
    mounted() {
      this.fetchCart()
    },
    methods: {
      fetchCart() {
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
      cartItem
    }
  }

</script>
<style lang="sass" scoped>
  @import "~_sass/_vars.scss";

  .cart {
    
  }
</style>