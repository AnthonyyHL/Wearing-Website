document.addEventListener("DOMContentLoaded", function () {
    let cartIcon = document.querySelector(".shop-bag");
    let cartContainer = document.querySelector(".cart-container");
    let cartOverlay = document.querySelector(".cart-overlay");

    let x = document.querySelector("#x");

    const body = document.body;








    /*----------------OPEN/CLOSE CART CONTAINER----------------*/
    cartIcon.addEventListener('click', function () {
        cartContainer.classList.add('active');
        cartOverlay.classList.add('active');
        body.style.overflowY = 'hidden';
    });

    x.addEventListener('click', function () {
        body.style.overflowY = 'auto';
        cartContainer.classList.remove('active');
        cartOverlay.classList.remove('active');
    });

    document.addEventListener('click', function (event) {
        if (!cartContainer.contains(event.target) && !cartIcon.contains(event.target)) {
            body.style.overflowY = 'auto';
            cartContainer.classList.remove('active');
            cartOverlay.classList.remove('active');
        }
    });








    /*---------------- REMOVE PRODUCT OF THE CART ----------------*/
    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready);
    } else {
        ready();
    }

    function ready() {
        var removeCartItemButtons = document.getElementsByClassName('cart-product-remove');
        console.log(removeCartItemButtons);
        for (var i = 0; i < removeCartItemButtons.length; i++) {
            var button = removeCartItemButtons[i];
            button.addEventListener('click', removeCartItem);
        }

        var quantityInputs = document.getElementsByClassName('count');
        for (var i = 0; i < quantityInputs.length; i++) {
            var input = quantityInputs[i];
            input.addEventListener('input', quantityChanged);

            var plusButton = input.parentElement.querySelector('.increment');
            var minusButton = input.parentElement.querySelector('.decrement');

            plusButton.addEventListener('click', function () {
                quantityChanged(input);
            });

            minusButton.addEventListener('click', function () {
                quantityChanged(input);
            });
        }

        var addToCartButtons = document.getElementsByClassName('add-cart-btn');
        for (var i = 0; i < addToCartButtons.length; i++) {
            var button = addToCartButtons[i];
            button.addEventListener('click', addToCartClicked);
        }
    }

    function removeCartItem(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
    }








    /*---------------- CHANGE QUANTITY OF THE PRODUCT ----------------*/
    function quantityChanged(input) {
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updateCartTotal();
    }








    /*---------------- ADD PRODUCT TO THE CART (CLICK FUNCTION) ----------------*/
    function addToCartClicked(event) {
        var button = event.target;
        var shopItem = button.parentElement.parentElement.parentElement;
        console.log(shopItem);
        var brand = shopItem.getElementsByClassName('product-brand')[0].innerText;
        var title = shopItem.getElementsByClassName('product-name')[0].innerText;
        var price = shopItem.getElementsByClassName('product-price')[0].innerText;
        var imageSrc = shopItem.getElementsByClassName('product-img-shop')[0].src;
        addItemToCart(title, brand, price, imageSrc);
        updateCartTotal();
    }








    /*---------------- ADD PRODUCT TO THE CART ----------------*/
    function addItemToCart(title, brand, price, imageSrc) {
        var cartRow = document.createElement('article');
        cartRow.classList.add('cart-product');
        var cartProductsContainer = document.getElementsByClassName('cart-products-container')[0];
        var cartProductsNames = cartProductsContainer.getElementsByClassName('cart-product-name');
        for (var i = 0; i < cartProductsNames.length; i++) {
            if (cartProductsNames[i].innerText == title) {
                alert('Ya has agregado este producto a tu carrito');
                return;
            }
        }
        var cartRowContents = `
            <div class="cart-product-img-container">
                <img class="cart-product-img" src="${imageSrc}" alt="">
            </div>
            <div class="cart-product-info">
                <span class="cart-product-brand">${brand}</span>
                <span class="cart-product-name">${title}</span>
                <span class="cart-product-price">${price}</span>
            </div>
            <div class="cart-product-remove-counter">
                <div class="cart-product-remove"></div>
                <div class="counter">
                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="decrement"><div class="minus"></div></button>
                    <input class="count" type="number" value="1">
                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="increment">
                        <div class="plus1"></div>
                        <div class="plus2"></div>
                    </button>
                </div>
            </div>`;
        cartRow.innerHTML = cartRowContents;
        cartProductsContainer.append(cartRow);
        cartRow.getElementsByClassName('cart-product-remove')[0].addEventListener('click', removeCartItem);
        cartRow.getElementsByClassName('count')[0].addEventListener('input', quantityChanged);
        cartRow.getElementsByClassName('increment')[0].addEventListener('click', function () {
            quantityChanged(cartRow.getElementsByClassName('count')[0]);
        });
        cartRow.getElementsByClassName('decrement')[0].addEventListener('click', function () {
            quantityChanged(cartRow.getElementsByClassName('count')[0]);
        });
    }








    /*---------------- UPDATE CART TOTAL ----------------*/

    function updateCartTotal() {
        var cartItemContainer = document.getElementsByClassName('cart-products-container')[0];
        var cartProducts = cartItemContainer.getElementsByClassName('cart-product');
        var total = 0;
        for (var i = 0; i < cartProducts.length; i++) {
            var cartProduct = cartProducts[i];
            var priceElement = cartProduct.getElementsByClassName('cart-product-price')[0];
            var quantityElement = cartProduct.getElementsByClassName('count')[0];
            var price = parseFloat(priceElement.innerText.replace('$', ''));
            var quantity = quantityElement.value;
            total = total + (price * quantity);
        }

        total = parseFloat(Math.round(total * 100) / 100).toFixed(2);

        var subtotalPriceNumber = document.getElementsByClassName('cart-subtotal-price-number')[0];
        subtotalPriceNumber.innerText = isNaN(total) ? '$0.00' : '$' + total;
    }

});