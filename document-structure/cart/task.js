const products = document.querySelectorAll('.product')
const cartProducts = document.querySelector('.cart__products')

const addToCart = (productEl, cardProductsEl) => {
  const quantity = productEl.querySelector('.product__quantity-value').textContent
  const productImageUrl = productEl.querySelector('.product__image').src
  const id = productEl.dataset.id

  const hasProduct = Array.from(cardProductsEl.children).find((product) => product.dataset.id === id)

  if (hasProduct) {
    const currentProductQuantity = hasProduct.querySelector('.cart__product-count')

    currentProductQuantity.textContent = parseInt(currentProductQuantity.textContent) + parseInt(quantity)
  } else {
    const product = `<div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${productImageUrl}">
                <div class="cart__product-count">${quantity}</div>
            </div>`

    cardProductsEl.innerHTML += product
  }
}

const increaseQuantity = (element) => {
  const quantity = parseInt(element.textContent)

  element.textContent = quantity + 1
}

const decreaseQuantity = (element) => {
  const quantity = parseInt(element.textContent)

  if (quantity > 1) {
    element.textContent = quantity - 1
  }
}

products.forEach(product => {
  const addToCartButton = product.querySelector('.product__add')
  const decreaseButton = product.querySelector('.product__quantity-control_dec')
  const increaseButton = product.querySelector('.product__quantity-control_inc')
  const productQuantityElement = product.querySelector('.product__quantity-value')

  increaseButton.addEventListener('click', () => increaseQuantity(productQuantityElement))
  decreaseButton.addEventListener('click', () => decreaseQuantity(productQuantityElement))
  addToCartButton.addEventListener('click', () => addToCart(product, cartProducts))
})