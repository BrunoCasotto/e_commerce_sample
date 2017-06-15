<template>
  <div class="product">
    <div class="product__image">
      <img src="/img/product.png"></img>
    </div>
    <div class="product__details">
      <p class="product__details__title">{{ product.title }}</p>
      <p class="product__details__price" >
        <span class="price__currency">{{product.currencyFormat}}</span>
        <span class="price__value">{{ getInt(product.price)}},</span>
        <span class="price__value--decimal"> {{getDecimal(product.price) }} </span>
      </p>
      <p class="product__details__optional-price">

      </p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      product: {
        type:Object,
        default: {
          "id": 0,
          "sku": 0,
          "title": "",
          "description": "",
          "availableSizes": [],
          "style": "",
          "price": 0,
          "installments": 0,
          "currencyId": "",
          "currencyFormat": "",
          "isFreeShipping": true
        }
      }
    },
    methods: {
      filterPrice( value ) {
        return parseFloat(value).toFixed(2)
      },
      getInt( value ) {
        return Math.floor( this.filterPrice( value ) )
      },
      getDecimal( value ) {
        return ( this.filterPrice( value ) % 1 ).toFixed(2).substring(2)
      }
    }
  }
</script>
<style lang="sass" scoped>
  @import "~_sass/_vars.scss";
  .product {
    padding: 5px;
    margin: 20px;
    width: 200px;
    cursor: pointer;
    transition: .5s all ease;

    &:hover {
      box-shadow: 3px 0px 11px -2px  $color-gray--ligth;

      .product__details__price {
        &:before {
          background-color: $color-red;
        }
      }
    }

      &__image {
        padding: 10px;
        max-width: 180px;
        margin: 0 auto;

        img {
          width: 100%;
        }
      }

      &__details {
        &__title {
          text-align: center;
          min-height: 40px;
          line-height: 20px;
        }

        &__price {
          text-align: center;

          &:before {
            content: '';
            width: 15px;
            height: 2px;
            background: $color-yellow;
            display: block;
            margin: 5px auto;
            margin-bottom: 0;
            transition: .5s all ease;
          }

          .price__value {
            font-weight: bold;
            font-size: 1.71rem;

            &--decimal {
              font-size: 0.85rem;
              font-weight: normal;
            }
          }
        }
      }
  }
</style>