<template>
  <div @click="toggleCart" :class="['cart-icon', cart.active? 'cart-icon--active': '']">
    <div class="icon" :total="cart.data.quantity"></div>
  </div>
</template>
<script>
  import productService from '_js/service'
  import cartItem from '_components/cart-item.vue'

  export default {
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
  position: fixed;
  top: 20px;
  right: 20px;
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

   &--active {
    z-index: 10;

    .icon {
      background-image: url('/img/close.png');

      &:before {
        display: none;
      }
    }
  }
}

</style>