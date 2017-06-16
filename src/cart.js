
class Cart {

  constructor() {
    this._cart = {
      products: [],
      total: 0,
      quantity: 0
    }
  }

  get cart() {
    return this._cart
  }

  set cart(cart) {
    this._cart.quantity = 0
    this._cart.total = 0
    this._cart.products.forEach( (product, index) =>{
      this._cart.products[index].subtotal = product.price * product.quantity
      this._cart.total = product.price * product.quantity + this._cart.total
      this._cart.quantity = parseInt(this._cart.quantity) + parseInt(product.quantity)
    })

    this._cart = cart
  }

  buildItem(product, variation, quantity) {
    let item = {}

    item['sku'] = product.sku
    item['title'] = product.title
    item['description'] = product.description
    item['price'] = product.price
    item['installments'] = product.installments
    item['currencyFormat'] = product.currencyFormat

    item['quantity'] = quantity
    item['variation'] = variation

    item['subtotal'] = item.price * item.quantity
    item['identifier'] = item.sku + item.variation

    return item
  }

}
module.exports = new Cart()