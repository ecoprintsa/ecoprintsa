console.log("SCRIPT LOADED");

/*=========================================
 PRODUCT DATABASE
=========================================*/

const products = [

    {
        id: 1,
        name: "HP 305A Black Toner",
        brand: "HP",
        price: 349,
        image: "images/hp305a.jpg",
        stock: true
    },

    {
        id: 2,
        name: "Canon 071 Toner",
        brand: "Canon",
        price: 299,
        image: "images/canon071.jpg",
        stock: true
    },

    {
        id: 3,
        name: "Brother TN2365",
        brand: "Brother",
        price: 329,
        image: "images/brothertn2365.jpg",
        stock: true
    },

    {
        id: 4,
        name: "Pantum TL410",
        brand: "Pantum",
        price: 389,
        image: "images/pantumtl410.jpg",
        stock: true
    }

];
// Animated Counter

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = +counter.getAttribute("data-target");

    let count = 0;

    const speed = target / 100;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target.toLocaleString() + "+";

        }

    };

    update();

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));
/* ==========================
   SHOPPING CART
========================== */

/*=========================================
SHOPPING CART
=========================================*/

let cart = [];

const cartCount = document.getElementById("cartCount");

const cartItems = document.getElementById("cartItems");

const cartTotal = document.getElementById("cartTotal");

const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const productId = Number(button.dataset.id);

        addToCart(productId);

    });

});

function addToCart(productId){

    const existingProduct = cart.find(item => item.id === productId);

    if(existingProduct){

        existingProduct.quantity++;

    } else {

        const product = products.find(p => p.id === productId);

        if(!product) return;

        cart.push({
            ...product,
            quantity: 1
        });

    }

    updateCart();

}

function updateCart(){

    cartCount.innerText = cart.length;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(product => {

        total += product.price * product.quantity;

cartItems.innerHTML += `
    <div class="cart-item">

        <strong>${product.name}</strong><br>

        Quantity: ${product.quantity}<br>

        R${product.price * product.quantity}

    </div>

    <hr>
`;

    });

    if(cart.length === 0){

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

    }

    cartTotal.innerText = `R${total}`;

}
/*==========================
OPEN / CLOSE CART
==========================*/

const shoppingCart = document.getElementById("shoppingCart");

const cartButton = document.getElementById("cartButton");

const closeCart = document.getElementById("closeCart");

cartButton.addEventListener("click", function(e){

    e.preventDefault();

    shoppingCart.classList.add("open");

});

closeCart.addEventListener("click", function(){

    shoppingCart.classList.remove("open");

});
/*=========================================
 PRODUCT RENDERER
=========================================*/

function renderProducts() {

    console.log("Products loaded:", products);

}

renderProducts();