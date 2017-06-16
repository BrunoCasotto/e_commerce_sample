<template>
  <div v-bind:class="[ 'cart-base', { 'cart-base--active': cart.active }]">
    <div class="cart">
      <!--cart header-->
      <div class="cart__header">
        <div class="cart__header__content">
          <div class="icon" :total="cart.data.quantity"></div>
          <h4 class="title">Sacola</h4>
        </div>
      </div>

      <!--cart list-->
      <template v-for="product in cart.data.products">
        <cart-item :product="product"></cart-item>
      </template>

      <!--cart footer-->
      <div class="cart__footer">
        <div class="cart__footer__content">
            <p class="message">subtotal</p>
            <div class="content__total">
              <p class="total__price" >
                <span class="price__currency">R$</span>
                <span class="price__value">{{getInt( cart.data.total )}},</span>
                <span class="price__value--decimal">{{getDecimal( cart.data.total )}}</span>
              </p>
              <p v-if="cart.data.quantity > 0" class="total__pay">
                <span class="pay__conditions">ou até {{10}} x</span>
                <span class="pay__currency">R$</span>
                <span class="pay__value">
                  {{getInt(  cart.data.total / 10 )}},{{getDecimal( cart.data.total / 10 )}}
                </span>
              </p>
            </div>
        </div>
        <button class="btn btn--finalize">Comprar</button>
      </div>
    </div>
  </div>
</template>
<script>
  import productService from '_js/service'
  import cartItem from '_components/cart-item.vue'
  import helpers from '_js/helpers'
  import store from '_js/vuex/store'

  export default {
    methods: {
      getInt( value ) {
        return helpers.getInt(value)
      },
      getDecimal(value) {
        return helpers.getDecimal(value)
      }
    },
    components: {
      cartItem
    },
    computed: {
      cart: function () {
        return store.state.cart
      }
    }
  }

</script>
<style lang="sass" scoped>
  @import "~_sass/_vars.scss";

  .cart-base {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    max-width: 515px;
    width: 100%;
    transform: translateX(100%);
    background-color: $color-gray--dark;
    z-index: 7;
    transition: all .5s ease;

    &--active {
      transform: translateX(0);
    }

    .cart {

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
            position: relative;

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

          .title {
            font-weight: bold;
            font-size: 1.71rem;
            color: white;
            text-transform: uppercase;
            margin-left: 20px;
          }
        }

      }

      &__footer {
        height: 150px;
        width: 100%;
        padding: 0 15px;
        text-transform: uppercase;

        &__content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: $color-gray--light;

          .content__total {
            .total__price {
              font-size: 1.71rem;
              color: $color-yellow;

              .price__value {
                font-weight: bold;
              }
            }
          }
        }
 
        .btn--finalize {
          width: 100%;
          color: white;
          font-weight: bold;
          background: black;
          border-radius: 0;
        }
      }
    }
  }
</style>