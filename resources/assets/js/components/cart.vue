<template>
  <div v-bind:class="[ 'cart', { 'cart--active': cart.active }]">
    <div class="cart__header">
      <div class="cart__header__content">
        <div class="icon" :total="totalProducts"></div>
        <h4 class="title">Sacola</h4>
      </div>
    </div>
  </div>
</template>
<script>
  import productService from '_js/service'
  import cartItem from '_components/cart-item.vue'

  export default {
    data() {
      return {
        products: [],
        totalProducts: 0
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
    },
    computed: {
      cart: function () {
        return this.$store.state.cart
      }
    }
  }

</script>
<style lang="sass" scoped>
  @import "~_sass/_vars.scss";

  .cart {
    position: fixed;
    right: 0;
    top: 0;
    max-width: 515px;
    height: 100%;
    width: 100%;
    background-color: $color-gray--dark;
    transform: translateX(100%);
    z-index: 7;

    &--active {
      transform: translateX(0);
    }

    &__header {
      height: 140px;
      width: 100%;
      position: relative;

      &__content {
        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;

        .icon {
          background-image: url('/img/bag.png');
          background-repeat: no-repeat;
          background-position: 50%;
          background-size: contain;
          font-size: 1rem;
          width: 40px;
          height: 40px;

          &:before {
            attr: (total);
            display: block;
            width: 15px;
            height: 15px;
            background: $color-yellow;
            text-align: center;
            border-radius: 50%;
          }
        }

        .title {
          font-weight: bold;
          font-size: 1.71rem;
          color: white;
          text-transform: uppercase;
        }
      }

    }
  }
</style>