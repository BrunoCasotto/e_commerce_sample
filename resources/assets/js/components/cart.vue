<template>
  <div v-bind:class="[ 'cart', { 'cart--active': cart.active }]">
    <div class="cart__header">
      <div class="cart__header__content">
        <div class="icon" :total="totalProducts"></div>
        <h4 class="title">Sacola</h4>
      </div>
    </div>

    <div class="cart__footer">
      <div class="cart__footer__content">

          <p class="message">subtotal</p>
          <div class="content__total">
            <p class="total__price" >
              <span class="price__currency">R$</span>
              <span class="price__value">{{ getInt( 500.9) }},</span>
              <span class="price__value--decimal"> {{ getDecimal( 500.9) }}</span>
            </p>
            <p class="total__pay">
              <span class="pay__conditions">ou até {{10}} x</span>
              <span class="pay__currency">{{R$}}</span>
              <span class="pay__value">
                {{getInt(  500.9 / 10 )}},{{ getDecimal( 500.9 / 10 )}}
              </span>
            </p>
          </div>

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
      },
      filterPrice( value ) {
        return parseFloat(value).toFixed(2)
      },
      getInt( value ) {
        return Math.floor( this.filterPrice( value ) )
      },
      getDecimal( value ) {
        return ( this.filterPrice( value ) % 1 ).toFixed(2).substring(2)
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
    }
  }
</style>