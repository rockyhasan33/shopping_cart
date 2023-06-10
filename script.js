const cartOverlay = document.querySelector('.cart-overlay');
const cart = document.querySelector('.cart') 
const cartBtn = document.querySelector('.cart-btn');
const closeBtn = document.querySelector('.close-cart');
const productCenter = document.querySelector('.product-center')


cartBtn.addEventListener('click',() => {
    if(cartOverlay.classList.contains('overlay-visible')) {
        cartOverlay.classList.remove('overlay-visible');
    } else {
        cartOverlay.classList.add('overlay-visible')
    }

    if(cart.classList.contains('cart-collapse')) {
        cart.classList.remove('cart-collapse');
    } else {
        cart.classList.add('cart-collapse')
    }
})

closeBtn.addEventListener('click', () => {
    cart.classList.remove('cart-collapse');
    cartOverlay.classList.remove('overlay-visible');
})








