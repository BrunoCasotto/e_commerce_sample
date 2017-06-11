<template>
  <div class="product">
    <div class="product__image">
      <img src="/img/product.png"></img>
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
    }
  }
</script>
<style lang="sass" scoped>
  .product {
    padding: 10px;
  }
</style>