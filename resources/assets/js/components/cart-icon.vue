<template>
  <div @click="toggleCart" class="cart-icon">
    <div class="icon" :total="totalProducts"></div>
  </div>
</template>
<script>
  import productService from '_js/service'
  import cartItem from '_components/cart-item.vue'

  export default {
    data () {
      return {
        totalProducts: 0
      }
    },
    computed: {
      cart: function () {
        return this.$store.state.cart
      }
    },
    methods: {
      toggleCart() {
        this.$store.dispatch('toggleCart')
      }
    }
  }

</script>
<style lang="sass" scoped>
  @import "~_sass/_vars.scss";

.cart-icon {
  background: $color-gray--dark;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;

  .icon {
    background-image: url('/img/bag.png');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    font-size: 1rem;
    width: 30px;
    height: 30px;

    &::before {
      content: attr(total);
      display: block;
      width: 20px;
      height: 20px;
      background: $color-yellow;
      text-align: center;
      border-radius: 50%;
      font-size: 0.85rem;
      line-height: 20px;
      position: absolute;
      bottom: -5px;
      right: -2px;
    }
  }
}

</style>