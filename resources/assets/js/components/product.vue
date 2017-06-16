<template>
  <div @click="callModal" :class="['product', 'product--'+appearance]">
    <!-- product image-->
    <div class="product__image">
      <img src="/img/product.png"></img>
    </div>
    <!-- product details-->
    <div class="product__details">
      <p class="product__details__title">{{ product.title }}</p>
      <p class="product__details__price" >
        <span class="price__currency">{{ product.currencyFormat }}</span>
        <span class="price__value">{{ getInt(product.price) }},</span>
        <span class="price__value--decimal"> {{ getDecimal(product.price) }} </span>
      </p>
      <p class="product__details__pay" v-if="product.installments > 0" >
        <span class="pay__conditions">ou {{product.installments}} x</span>
        <span class="pay__currency">{{product.currencyFormat}}</span>
        <span class="pay__value">
          {{ getInt( product.price / product.installments ) }},{{ getDecimal( product.price / product.installments ) }}
        </span>
      </p>
      <!-- product variations-->
      <div v-if="appearance=='modal'" class="product__details__options">
        <label>Quantidade</label>
        <input v-model="quantity" type="number" class="options__quantity"/>

        <div class="options__size">
          <label>Tamanhos</label>

          <template v-for="( size, key ) in product.availableSizes">
            <div 
              :class="['options__size__item', selectedSize == key ? 'options__size__item--active' : '' ]"
              @click="selectSize(key)"
            >
              <label class="options__size__item__select" :for="'inputSize'+key">{{ size }}</label>
            </div>
          </template>
        </div>

        <div class="options__controller">
          <button @click="addCart" class="btn btn--add-cart">Adicionar ao carrinho</button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import growl from "growl-alert"
  import cartService from '_js/service'

  export default {
    data() {
      return {
        selectedSize: 0,
        quantity: 1
      }
    },
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
      },
      appearance: {
        type: String,
        default: 'default'
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
      },
      callModal() {
        this.$store.dispatch('callModal', {
          active: true,
          product: this.product
        })
      },
      selectSize( key ) {
        this.selectedSize = key
      },
      addCart() {
        cartService.insertProduct( 
          this.product,
          this.quantity,
          this.product.availableSizes[this.selectedSize]
        )
        .then(result => {
          this.$store.dispatch('setCart',result.data)
          growl.success("Item inserido no carrinho")
          //close modal
          this.$store.dispatch('callModal', {
            active: false,
            product: {}
          })
        }).catch(error=>{
          console.log(error)
        })
      }
    },
    watch: {
      'quantity': function() {
        if( this.quantity <= 0) {
          this.quantity = 1
          growl.warning("Ops, você deve ter no mínimo 1 produto.")
        }
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
    transition: .5s all ease;

    &--default {
      cursor: pointer;

      &:hover {
        box-shadow: 3px 0px 11px -2px  $color-gray--light;

        .product__details__price {
          &:before {
            background-color: $color-red;
          }
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
          margin: 0;

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

        &__pay {
          color: $color-gray;
          text-align: center;
        }
      }

      //modal style

      &--modal {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin: 0;

        .product__image {
          width: 200px;
          margin: 10px;

          @media screen and(max-width: $screen-sm) {
            margin: 0 auto;
          } 
        }

        .product__details {
          width: 200px;
          padding: 10px;

          @media screen and(max-width: $screen-sm) {
            width: 100%;
          }
          
          &__options {
            padding-top: 10px;

            .options__quantity {
              width: 60px;
              text-align: center;
              padding: 3px;
            }

            .options__size {
              margin-top: 10px;
              border-top: 1px solid $color-gray--light;
              display: flex;
              flex-wrap: wrap;

              label {
                width: 100%;
              }

              .options__size__item {
                width: 50px;
                padding: 3px;
                margin: 5px;
                border: 1px solid $color-gray--light;
                text-align: center;
                cursor: pointer;

                &--active {
                  background: $color-gray--light;
                  border: 1px solid;
                }

                &__select {
                  font-weight: bold;
                  cursor: pointer;
                }
              }
            }

            .options__controller {
              
              .btn {
                font-weight: bold;
                margin: 20px 5px 0 5px;
                min-width: 100px;

                @media screen and (max-width: $screen-sm) {
                  width: 100%;
                  margin-top: 10px;
                }

                &--add-cart {
                  color: white;
                  background-color: $color-green;

                  &:hover {
                    background-color: lighten( $color-green ,20);
                  }
                }
              }
            }
          }
        }
      }
  }
</style>