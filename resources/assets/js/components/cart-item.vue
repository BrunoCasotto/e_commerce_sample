<template>
  <div :class="['cart-item', disabled ? 'cart-item--disabled': '' ]">

    <div class="cart-item__image">
      <img src="/img/product.png"></img>
    </div>

    <div class="cart-item__description">
      <span class="cart-item__description__title">{{product.title}}</span> 
      <p class="cart-item__description__detail">
        <span> {{product.variation}}|{{product.description}}</span>
      </p>
      <p class="cart-item__description__detail">
        <span>Quantidade: {{product.quantity}}</span>
      </p>
    </div>

    <div class="cart-item__controll">
      <div 
        @click="removeItem()" 
        @mouseover="disabled = true" 
        @mouseleave="disabled = false" 
        class="remove"
      >
        <svg viewBox="0 0 24 24">
          <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
        </svg>
      </div>
      <p class="price" >
        <span class="price__currency">{{ product.currencyFormat }}</span>
        <span class="price__value">{{ getInt(product.subtotal) }},</span>
        <span class="price__value--decimal"> {{ getDecimal(product.price) }} </span>
      </p>
    </div>
  </div>
</template>
<script>
  import productService from '_js/service'
  import cartItem from '_components/cart-item.vue'
  import cartService from '_js/service'
  import helpers from '_js/helpers'

  export default {
    data() {
      return {
        disabled: false
      }
    },
    props:{
      product: {
        type:Object,
        required: true
      }
    },
    methods: {
      removeItem() {
        cartService.removeProduct( this.product.identifier )
        .then(result => {
          this.$store.dispatch('setCart',result.data)
          growl.success("Item removido no carrinho")
        }).catch(error=>{
          console.log(error)
        })
      },
      getInt( value ) {
        return helpers.getInt(value)
      },
      getDecimal(value) {
        return helpers.getDecimal(value)
      }
    },
    components: {
      cartItem
    }
  }

</script>
<style lang="sass" scoped>
  @import "~_sass/_vars.scss";
  .cart-item {
    height: 100px;
    max-width: 470px;
    width: 100%;
    margin: 0 auto;
    border-top: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media screen and(max-width: $screen-sm) {
      padding: 0 10px;
    }

    &__image {
      width: 50px;
      height: 50px;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    &__description {
      flex-basis: 330px;
      flex: 1;
      height: 50px;
      padding: 0 15px;

      &__title {
        font-weight: 500;
        color: white;
      }

      &__detail {
        color: $color-gray;
        margin: 0;
        line-height: 15px;
      }
    }
    &__controll {

      .remove {
        margin-left: auto;
        cursor: pointer;
        width: 15px;
        
        svg {
          width: 100%;
          height: 15px;
        }

        &:hover {
          z-index: 10;

          svg {
            fill: white;
          }
        }
      }
      .price {
        color: $color-yellow;

        .price__value {
          font-weight: 500;
        }
      }
    }

    //cart-item disabled
    &--disabled {
      .cart-item__description > span, p{
        text-decoration: line-through;
        opacity: 0.5;
      }

      .cart-item__image {
        opacity: 0.5;
      }
    }
  }
</style>