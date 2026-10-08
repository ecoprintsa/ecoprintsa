/* =========================================================
   ECOPRINT SOLUTIONS
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   PRODUCT DATABASE
========================================================= */

const products = [

    /* =====================================================
       HP
    ===================================================== */

    {
        id: 1,
        name: "HP 305 Black Ink Cartridge",
        brand: "HP",
        type: "Ink",
        category: "Ink",
        price: 359,
        oldPrice: 479,
        image: "images/products/hp305xl-black.png",
        condition: "Compatible",
        stock: true,
        description: "Compatible black ink cartridge",
        compatibility: "HP DeskJet 2300, 2700 and 4100 series",
        cartridgeNumbers: [
            "305",
            "3YM61AE"
        ],
        printers: [
            "HP DeskJet 2300",
            "HP DeskJet 2710",
            "HP DeskJet 2720",
            "HP DeskJet 2721",
            "HP DeskJet 4100",
            "HP DeskJet Plus 4120"
        ],
        icon: "fa-droplet"
    },

    {
        id: 2,
        name: "HP 305XL Black Ink Cartridge",
        brand: "HP",
        type: "Ink",
        category: "Ink",
        price: 459,
        oldPrice: 479,
        image: "images/products/hp305xl-black.png",
        condition: "Compatible",
        stock: true,
        description: "High-yield compatible black ink cartridge",
        compatibility: "HP DeskJet 2300, 2700 and 4100 series",
        cartridgeNumbers: [
            "305XL",
            "3YM62AE"
        ],
        printers: [
            "HP DeskJet 2300",
            "HP DeskJet 2710",
            "HP DeskJet 2720",
            "HP DeskJet 2721",
            "HP DeskJet 4100",
            "HP DeskJet Plus 4120",
            "HP DeskJet 4130"
        ],
        icon: "fa-droplet"
    },

    {
        id: 3,
        name: "HP 305XL Tri-Colour Ink Cartridge",
        brand: "HP",
        type: "Ink",
        category: "Ink",
        price: 459,
        oldPrice: 479,
        image: "images/products/hp305xl-colour.png",
        condition: "Compatible",
        stock: true,
        description: "High-yield compatible tri-colour ink cartridge",
        compatibility: "HP DeskJet 2300, 2700 and 4100 series",
        cartridgeNumbers: [
            "305XL",
            "3YM63AE"
        ],
        printers: [
            "HP DeskJet 2300",
            "HP DeskJet 2710",
            "HP DeskJet 2720",
            "HP DeskJet 2721",
            "HP DeskJet 4100",
            "HP DeskJet Plus 4120",
            "HP DeskJet 4130"
        ],
        icon: "fa-droplet"
    },

    {
        id: 4,
        name: "HP 123XL Black Ink Cartridge",
        brand: "HP",
        type: "Ink",
        category: "Ink",
        price: 299,
        oldPrice: 349,
        image: "images/products/hp123xlblack.png",
        condition: "Compatible",
        stock: true,
        description: "High-yield compatible black ink cartridge",
        compatibility: "HP DeskJet 2130, 2620, 2630, 3630 and OfficeJet 3830",
        cartridgeNumbers: [
            "123",
            "123XL",
            "F6V19AE"
        ],
        printers: [
            "HP DeskJet 2130",
            "HP DeskJet 2620",
            "HP DeskJet 2621",
            "HP DeskJet 2630",
            "HP DeskJet 2632",
            "HP DeskJet 3630",
            "HP DeskJet 3639",
            "HP OfficeJet 3830",
            "HP OfficeJet 4655",
            "HP ENVY 4523",
            "HP ENVY 5020"
        ],
        icon: "fa-droplet"
    },

    {
        id: 5,
        name: "HP 123XL Tri-Colour Ink Cartridge",
        brand: "HP",
        type: "Ink",
        category: "Ink",
        price: 299,
        oldPrice: 349,
        image: "images/products/hp123xlcolour.png",
        condition: "Compatible",
        stock: true,
        description: "High-yield compatible tri-colour ink cartridge",
        compatibility: "HP DeskJet 2130, 2620, 2630, 3630 and OfficeJet 3830",
        cartridgeNumbers: [
            "123",
            "123XL",
            "F6V18AE"
        ],
        printers: [
            "HP DeskJet 2130",
            "HP DeskJet 2620",
            "HP DeskJet 2621",
            "HP DeskJet 2630",
            "HP DeskJet 2632",
            "HP DeskJet 3630",
            "HP DeskJet 3639",
            "HP OfficeJet 3830",
            "HP OfficeJet 4655",
            "HP ENVY 4523",
            "HP ENVY 5020"
        ],
        icon: "fa-droplet"
    },


    /* =====================================================
       CANON
    ===================================================== */

    {
        id: 6,
        name: "Canon PG-445 Black Ink Cartridge",
        brand: "Canon",
        type: "Ink",
        category: "Ink",
        price: 380,
        oldPrice: 400,
        image: "images/products/canon445.png",
        condition: "Compatible",
        stock: true,
        description: "Compatible black ink cartridge",
        compatibility: "Canon PIXMA iP2820, MG2450, MG2550 and more",
        cartridgeNumbers: [
            "PG-445",
            "PG445"
        ],
        printers: [
            "Canon PIXMA iP2820",
            "Canon PIXMA iP2840",
            "Canon PIXMA iP2845",
            "Canon PIXMA MG2440",
            "Canon PIXMA MG2450",
            "Canon PIXMA MG2455",
            "Canon PIXMA MG2540",
            "Canon PIXMA MG2545",
            "Canon PIXMA MG2550",
            "Canon PIXMA MG2555",
            "Canon PIXMA MG2570",
            "Canon PIXMA MG2940",
            "Canon PIXMA MG2950",
            "Canon PIXMA MX494",
            "Canon PIXMA MX495",
            "Canon PIXMA TR4540",
            "Canon PIXMA TS204",
            "Canon PIXMA TS304",
            "Canon PIXMA TR4500",
            "Canon PIXMA TR4600",
            "Canon PIXMA TR4645"
        ],
        icon: "fa-droplet"
    },

    {
        id: 7,
        name: "Canon CL-446 Colour Ink Cartridge",
        brand: "Canon",
        type: "Ink",
        category: "Ink",
        price: 390,
        oldPrice: 420,
        image: "images/products/canon446.png",
        condition: "Compatible",
        stock: true,
        description: "Compatible tri-colour ink cartridge",
        compatibility: "Canon PIXMA iP2820, MG2450, MG2550 and more",
        cartridgeNumbers: [
            "CL-446",
            "CL446"
        ],
        printers: [
            "Canon PIXMA iP2820",
            "Canon PIXMA iP2840",
            "Canon PIXMA iP2845",
            "Canon PIXMA MG2440",
            "Canon PIXMA MG2450",
            "Canon PIXMA MG2455",
            "Canon PIXMA MG2540",
            "Canon PIXMA MG2545",
            "Canon PIXMA MG2550",
            "Canon PIXMA MG2555",
            "Canon PIXMA MG2570",
            "Canon PIXMA MG2940",
            "Canon PIXMA MG2950",
            "Canon PIXMA MX494",
            "Canon PIXMA MX495",
            "Canon PIXMA TR4540",
            "Canon PIXMA TS204",
            "Canon PIXMA TS304",
            "Canon PIXMA TR4500",
            "Canon PIXMA TR4600",
            "Canon PIXMA TR4645"
        ],
        icon: "fa-droplet"
    },

    {
        id: 8,
        name: "Canon PG-445 / CL-446 Twin Pack",
        brand: "Canon",
        type: "Ink",
        category: "Ink",
        price: 799,
        oldPrice: 959,
        image: "images/products/canon445-446-pack.png",
        condition: "Compatible",
        stock: true,
        description: "Black and tri-colour compatible ink pack",
        compatibility: "Canon PIXMA iP2820, MG2450, MG2550 and more",
        cartridgeNumbers: [
            "PG-445",
            "CL-446",
            "PG445",
            "CL446"
        ],
        printers: [
            "Canon PIXMA iP2820",
            "Canon PIXMA MG2450",
            "Canon PIXMA MG2550",
            "Canon PIXMA MG2940",
            "Canon PIXMA MG2950",
            "Canon PIXMA MG3040",
            "Canon PIXMA MX494",
            "Canon PIXMA MX495",
            "Canon PIXMA TR4540",
            "Canon PIXMA TS204",
            "Canon PIXMA TS304",
            "Canon PIXMA TS3140",
            "Canon PIXMA TR4500",
            "Canon PIXMA TR4600",
            "Canon PIXMA TR4645"
        ],
        icon: "fa-box"
    },

    {
        id: 9,
        name: "Canon 071 Black Toner",
        brand: "Canon",
        type: "Toner",
        category: "Toner",
        price: 299,
        oldPrice: 349,
        image: "images/products/canon071.png",
        condition: "Compatible",
        stock: true,
        description: "Compatible black toner cartridge",
        compatibility: "Canon imageCLASS laser printers",
        cartridgeNumbers: [
            "071",
            "5645C001"
        ],
        printers: [
            "Canon imageCLASS MF461dw",
            "Canon imageCLASS MF465dw",
            "Canon imageCLASS LBP633Cdw"
        ],
        icon: "fa-print"
    },


    /* =====================================================
       BROTHER
    ===================================================== */

    {
        id: 10,
        name: "Brother TN-1000 Black Toner",
        brand: "Brother",
        type: "Toner",
        category: "Toner",
        price: 279,
        oldPrice: 329,
        image: "images/products/brothertn1000.png",
        condition: "Compatible",
        stock: true,
        description: "Compatible black toner cartridge",
        compatibility: "Brother HL-1110, DCP-1510 and MFC-1810 series",
        cartridgeNumbers: [
            "TN-1000",
            "TN1000"
        ],
        printers: [
            "Brother HL-1110",
            "Brother HL-1210W",
            "Brother DCP-1510",
            "Brother DCP-1610W",
            "Brother MFC-1810",
            "Brother MFC-1815",
            "Brother MFC-1910W"
        ],
        icon: "fa-print"
    },

    {
        id: 11,
        name: "Brother TN-2060 Black Toner",
        brand: "Brother",
        type: "Toner",
        category: "Toner",
        price: 299,
        oldPrice: 349,
        condition: "Compatible",
        stock: true,
        description: "Compatible black toner cartridge",
        compatibility: "Brother HL-2130 and DCP-7055 series",
        cartridgeNumbers: [
            "TN-2060",
            "TN2060"
        ],
        printers: [
            "Brother HL-2130",
            "Brother DCP-7055"
        ],
        icon: "fa-print"
    },

    {
        id: 12,
        name: "Brother TN-2260 Black Toner",
        brand: "Brother",
        type: "Toner",
        category: "Toner",
        price: 319,
        oldPrice: 369,
        condition: "Compatible",
        stock: true,
        description: "Compatible black toner cartridge",
        compatibility: "Brother HL-2240, HL-2250DN, DCP-7060 and MFC-7360 families",
        cartridgeNumbers: [
            "TN-2260",
            "TN2260"
        ],
        printers: [
            "Brother HL-2240D",
            "Brother HL-2250DN",
            "Brother HL-2270DW",
            "Brother DCP-7060D",
            "Brother DCP-7065DN",
            "Brother MFC-7290",
            "Brother MFC-7360",
            "Brother MFC-7470D",
            "Brother MFC-7860DW"
        ],
        icon: "fa-print"
    },

    {
        id: 13,
        name: "Brother TN-2280 Black Toner",
        brand: "Brother",
        type: "Toner",
        category: "Toner",
        price: 329,
        oldPrice: 379,
        image: "images/products/brothertn2280.png",
        condition: "Compatible",
        stock: true,
        description: "Compatible black toner cartridge",
        compatibility: "Brother HL-2240D, HL-2250DN, DCP-7065 and MFC series",
        cartridgeNumbers: [
            "TN-2280",
            "TN2280"
        ],
        printers: [
            "Brother HL-2240D",
            "Brother HL-2250DN",
            "Brother HL-2270DW",
            "Brother DCP-7060D",
            "Brother DCP-7065DN",
            "Brother MFC-7290",
            "Brother MFC-7360",
            "Brother MFC-7470D",
            "Brother MFC-7860DN",
            "Brother MFC-7860DW"
        ],
        icon: "fa-print"
    },

    {
        id: 14,
        name: "Brother TN-2355 Black Toner",
        brand: "Brother",
        type: "Toner",
        category: "Toner",
        price: 329,
        oldPrice: 379,
        image: "images/products/brothertn2355.png",
        condition: "Compatible",
        stock: true,
        description: "High-yield compatible black toner cartridge",
        compatibility: "Brother HL-L2365DW, DCP-L2540DW and MFC-L2700DW",
        cartridgeNumbers: [
            "TN-2355",
            "TN2355"
        ],
        printers: [
            "Brother HL-L2365DW",
            "Brother DCP-L2540DW",
            "Brother MFC-L2700DW"
        ],
        icon: "fa-print"
    },

    {
        id: 15,
        name: "hp 650xl Black",
        brand: "HP",
        type: "Ink",
        category: "Ink",
        price: 329,
        oldPrice: 379,
        image: "images/products/hp650xl.png",
        condition: "Compatible",
        stock: true,
        description: "Compatible black toner cartridge",
        compatibility: "HP DeskJet Ink Advantage printers",
        cartridgeNumbers: [
            "650xl",
            "650"
        ],
        printers: [
            "HP DeskJet Ink Advantage 1015",
            "HP DeskJet Ink Advantage 1510",
            "HP DeskJet Ink Advantage 2515",
            "HP DeskJet Ink Advantage 2645",
            "HP DeskJet Ink Advantage 4645"
        ],
        icon: "fa-print"
    },


    /* =====================================================
       PANTUM
    ===================================================== */

    {
        id: 16,
        name: "Pantum PC-210 Black Toner",
        brand: "Pantum",
        type: "Toner",
        category: "Toner",
        price: 289,
        oldPrice: 339,
        image: "images/products/pantum210.png",
        condition: "Compatible",
        stock: true,
        description: "Compatible black toner cartridge",
        compatibility: "Pantum P2200, P2500 and M6500 series",
        cartridgeNumbers: [
            "PC-210",
            "PC210",
            "PA-210",
            "PT-210"
        ],
        printers: [
            "Pantum P2200",
            "Pantum P2500",
            "Pantum P2500W",
            "Pantum M6500",
            "Pantum M6500N",
            "Pantum M6500NW",
            "Pantum M6550",
            "Pantum M6550N",
            "Pantum M6550NW",
            "Pantum M6600",
            "Pantum M6600N",
            "Pantum M6600NW"
        ],
        icon: "fa-print"
    },

    {
        id: 17,
        name: "Pantum TL-410 Black Toner",
        brand: "Pantum",
        type: "Toner",
        category: "Toner",
        price: 389,
        oldPrice: 449,
        image: "images/products/pantum410.png",
        condition: "Compatible",
        stock: true,
        description: "Compatible black toner cartridge",
        compatibility: "Pantum P3010, P3300, M6700 and M7100 series",
        cartridgeNumbers: [
            "TL-410",
            "TL410"
        ],
        printers: [
            "Pantum P3010D",
            "Pantum P3010DW",
            "Pantum P3300DN",
            "Pantum P3300DW",
            "Pantum M6700D",
            "Pantum M6700DW",
            "Pantum M6800FDW",
            "Pantum M7100DN",
            "Pantum M7100DW",
            "Pantum M7200FDW",
            "Pantum M7300FDW",
            "Pantum M7310DW"
        ],
        icon: "fa-print"
    },


    /* =====================================================
       EPSON
    ===================================================== */

    {
        id: 18,
        name: "Epson 101/103",
        brand: "Epson",
        type: "Ink",
        category: "Ink",
        price: 599,
        oldPrice: 720,
        image: "images/products/epson103.png",
        condition: "Compatible",
        stock: true,
        description: "Compatible Epson ink cartridge",
        compatibility: "Epson printer compatibility to be expanded",
        cartridgeNumbers: [
            "EPSON"
        ],
        printers: [],
        icon: "fa-droplet"
    }

];


/* =========================================================
   CART
========================================================= */

let cart = [];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const productGrid = document.getElementById("productGrid");

const cartCount = document.getElementById("cartCount");

const cartItems = document.getElementById("cartItems");

const cartTotal = document.getElementById("cartTotal");

const cartSidebar = document.getElementById("cartSidebar");

const cartOverlay = document.getElementById("cartOverlay");

const productCount = document.getElementById("productCount");

const brandFilter = document.getElementById("brandFilter");

const typeFilter = document.getElementById("typeFilter");

const conditionFilter = document.getElementById("conditionFilter");

const priceFilter = document.getElementById("priceFilter");

const sortFilter = document.getElementById("sortFilter");

const clearFilters = document.getElementById("clearFilters");

const cartridgeSearch = document.getElementById("cartridgeSearch");

const findCartridge = document.getElementById("findCartridge");

const mobileMenu = document.getElementById("mobileMenu");

const navLinks = document.querySelector(".nav-links");


/* =========================================================
   DISPLAY PRODUCTS
========================================================= */

function displayProducts(productList) {

    productGrid.innerHTML = "";


    /* EMPTY RESULTS */

    if (productList.length === 0) {

        productGrid.innerHTML = `

            <div
                style="
                    grid-column: 1 / -1;
                    text-align: center;
                    padding: 60px 20px;
                "
            >

                <i
                    class="fa-solid fa-magnifying-glass"
                    style="
                        font-size: 45px;
                        color: #c7ced7;
                        margin-bottom: 20px;
                    "
                ></i>

                <h3>
                    No compatible cartridges found
                </h3>

                <p>
                    Try another cartridge number or printer model.
                </p>

            </div>

        `;

        return;
    }


    /* PRODUCT CARDS */

    productList.forEach(product => {

        const productCard =
            document.createElement("div");

        productCard.className =
            "product-card";


        productCard.innerHTML = `

            <div class="product-image">

    <span class="product-badge">
        ${product.condition}
    </span>

    ${
        product.image
            ? `<img src="${product.image}" alt="${product.name}">`
            : `<i class="fa-solid ${product.icon}"></i>`
    }

</div>


            <div class="product-info">

                <div class="product-brand">
                    ${product.brand}
                </div>


                <h3 class="product-name">
                    ${product.name}
                </h3>


                <p class="product-description">
                    ${product.description}
                </p>


                <div class="product-compatibility">

                    <i class="fa-solid fa-circle-check"></i>

                    ${product.compatibility}

                </div>


                <div class="stock-status">

                    <span class="stock-dot"></span>

                    ${product.stock ? "In Stock" : "Out of Stock"}

                </div>


                <div class="product-bottom">

                    <div>

                        <span class="product-old-price">
                            R${product.oldPrice.toFixed(2)}
                        </span>

                        <br>

                        <span class="product-price">
                            R${product.price.toFixed(2)}
                        </span>

                    </div>


                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                        aria-label="Add ${product.name} to cart"
                    >

                        <i class="fa-solid fa-cart-plus"></i>

                    </button>

                </div>

            </div>

        `;


        productGrid.appendChild(productCard);

    });

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(productId) {

    const product =
        products.find(item => item.id === productId);


    if (!product) return;


    const existingItem =
        cart.find(item => item.id === productId);


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    updateCart();

    openCart();

    showCartNotification(product.name);

}


/* =========================================================
   UPDATE CART
========================================================= */

function updateCart() {

    renderCart();

    updateCartCount();

    updateCartTotal();

}


/* =========================================================
   CART COUNT
========================================================= */

function updateCartCount() {

    const totalItems =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    cartCount.textContent =
        totalItems;

}


/* =========================================================
   CART TOTAL
========================================================= */

function updateCartTotal() {

    const total =
        cart.reduce(
            (sum, item) =>
                sum + (item.price * item.quantity),
            0
        );


    cartTotal.textContent =
        `R${total.toFixed(2)}`;

}


/* =========================================================
   RENDER CART
========================================================= */

function renderCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-cart-shopping"></i>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add some cartridges to get started.
                </p>

            </div>

        `;

        return;
    }


    cartItems.innerHTML = "";


    cart.forEach(item => {

        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-image">

                <i class="fa-solid ${item.icon}"></i>

            </div>


            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <p>
                    R${item.price.toFixed(2)}
                </p>


                <div
                    style="
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        margin-top: 8px;
                    "
                >

                    <button
                        onclick="decreaseQuantity(${item.id})"
                        style="
                            width: 25px;
                            height: 25px;
                            border: 1px solid #ddd;
                            background: white;
                            border-radius: 5px;
                            cursor: pointer;
                        "
                    >
                        −
                    </button>


                    <span
                        style="
                            font-size: 12px;
                            font-weight: 600;
                        "
                    >
                        ${item.quantity}
                    </span>


                    <button
                        onclick="increaseQuantity(${item.id})"
                        style="
                            width: 25px;
                            height: 25px;
                            border: 1px solid #ddd;
                            background: white;
                            border-radius: 5px;
                            cursor: pointer;
                        "
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                class="remove-item"
                onclick="removeFromCart(${item.id})"
                aria-label="Remove ${item.name}"
            >

                <i class="fa-solid fa-trash"></i>

            </button>

        `;


        cartItems.appendChild(cartItem);

    });

}


/* =========================================================
   INCREASE QUANTITY
========================================================= */

function increaseQuantity(productId) {

    const item =
        cart.find(item => item.id === productId);


    if (!item) return;


    item.quantity++;

    updateCart();

}


/* =========================================================
   DECREASE QUANTITY
========================================================= */

function decreaseQuantity(productId) {

    const item =
        cart.find(item => item.id === productId);


    if (!item) return;


    if (item.quantity > 1) {

        item.quantity--;

    } else {

        cart =
            cart.filter(item => item.id !== productId);

    }


    updateCart();

}


/* =========================================================
   REMOVE FROM CART
========================================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(item => item.id !== productId);


    updateCart();

}


/* =========================================================
   OPEN CART
========================================================= */

function openCart() {

    cartSidebar.classList.add("active");

    cartOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE CART
========================================================= */

function closeCart() {

    cartSidebar.classList.remove("active");

    cartOverlay.classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================================================
   CART EVENTS
========================================================= */

document
    .getElementById("openCart")
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );


cartOverlay.addEventListener(
    "click",
    closeCart
);


/* =========================================================
   MOBILE MENU
========================================================= */

mobileMenu.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle("active");

    }
);


/* =========================================================
   CLOSE MOBILE MENU AFTER LINK CLICK
========================================================= */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove("active");

            }
        );

    });


/* =========================================================
   CARTRIDGE SEARCH
========================================================= */

function searchProducts() {

    const searchTerm =
        cartridgeSearch.value
            .toLowerCase()
            .trim();


    /* NO SEARCH */

    if (!searchTerm) {

        displayProducts(products);

        productCount.textContent =
            `Showing ${products.length} products`;

        document
            .getElementById("shop")
            .scrollIntoView({
                behavior: "smooth"
            });

        return;
    }


    /* SEARCH */

    const filteredProducts =
        products.filter(product => {

            const productName =
                product.name
                    .toLowerCase()
                    .includes(searchTerm);


            const brand =
                product.brand
                    .toLowerCase()
                    .includes(searchTerm);


            const cartridgeMatch =
                product.cartridgeNumbers.some(number =>
                    number
                        .toLowerCase()
                        .includes(searchTerm)
                );


            const printerMatch =
                product.printers.some(printer =>
                    printer
                        .toLowerCase()
                        .includes(searchTerm)
                );


            return (
                productName ||
                brand ||
                cartridgeMatch ||
                printerMatch
            );

        });


    displayProducts(filteredProducts);


    productCount.textContent =
        `Found ${filteredProducts.length} compatible product${filteredProducts.length === 1 ? "" : "s"}`;


    document
        .getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });

}


findCartridge.addEventListener(
    "click",
    searchProducts
);


cartridgeSearch.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            searchProducts();

        }

    }
);


/* =========================================================
   SEARCH ICON
========================================================= */

document
    .getElementById("openSearch")
    .addEventListener(
        "click",
        () => {

            cartridgeSearch.focus();

            document
                .getElementById("finder")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* =========================================================
   VIEW ALL PRODUCTS
========================================================= */

document
    .getElementById("viewAllProducts")
    .addEventListener(
        "click",
        () => {

            displayProducts(products);

            productCount.textContent =
                `Showing ${products.length} products`;

            document
                .getElementById("shop")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* =========================================================
   CART NOTIFICATION
========================================================= */

function showCartNotification(productName) {

    const notification =
        document.createElement("div");


    notification.innerHTML = `

        <i class="fa-solid fa-circle-check"></i>

        ${productName} added to cart

    `;


    notification.style.position =
        "fixed";

    notification.style.bottom =
        "25px";

    notification.style.right =
        "25px";

    notification.style.zIndex =
        "5000";

    notification.style.background =
        "#111827";

    notification.style.color =
        "#ffffff";

    notification.style.padding =
        "14px 20px";

    notification.style.borderRadius =
        "10px";

    notification.style.fontSize =
        "13px";

    notification.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.2)";


    document.body.appendChild(
        notification
    );


    setTimeout(() => {

        notification.remove();

    }, 2500);

}


/* =========================================================
   SHOP FILTER SYSTEM
========================================================= */

function applyFilters() {

    let filteredProducts =
        [...products];


    /* BRAND */

    if (brandFilter.value !== "all") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.brand ===
                    brandFilter.value
            );

    }


    /* TYPE */

    if (typeFilter.value !== "all") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.type ===
                    typeFilter.value
            );

    }


    /* CONDITION */

    if (conditionFilter.value !== "all") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.condition ===
                    conditionFilter.value
            );

    }


    /* PRICE */

    if (priceFilter.value === "under300") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.price < 300
            );

    }


    if (priceFilter.value === "300to500") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.price >= 300 &&
                    product.price <= 500
            );

    }


    if (priceFilter.value === "over500") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.price > 500
            );

    }


    /* SORT */

    if (sortFilter.value === "low") {

        filteredProducts.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (sortFilter.value === "high") {

        filteredProducts.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    if (sortFilter.value === "name") {

        filteredProducts.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    /* DISPLAY */

    displayProducts(
        filteredProducts
    );


    /* COUNT */

    productCount.textContent =
        `Showing ${filteredProducts.length} product${filteredProducts.length === 1 ? "" : "s"}`;

}


/* =========================================================
   FILTER EVENTS
========================================================= */

brandFilter.addEventListener(
    "change",
    applyFilters
);


typeFilter.addEventListener(
    "change",
    applyFilters
);


conditionFilter.addEventListener(
    "change",
    applyFilters
);


priceFilter.addEventListener(
    "change",
    applyFilters
);


sortFilter.addEventListener(
    "change",
    applyFilters
);


/* =========================================================
   CLEAR FILTERS
========================================================= */

clearFilters.addEventListener(
    "click",
    () => {

        brandFilter.value =
            "all";

        typeFilter.value =
            "all";

        conditionFilter.value =
            "all";

        priceFilter.value =
            "all";

        sortFilter.value =
            "featured";


        displayProducts(
            products
        );


        productCount.textContent =
            `Showing ${products.length} products`;

    }
);


/* =========================================================
   FINDER EXAMPLE BUTTONS
========================================================= */

const finderExamples =
    document.querySelectorAll(
        ".finder-example"
    );


finderExamples.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            const searchValue =
                this.getAttribute(
                    "data-search"
                );


            cartridgeSearch.value =
                searchValue;


            searchProducts();

        }
    );

});


/* =========================================================
   INITIALIZE STORE
========================================================= */

displayProducts(products);

updateCart();

productCount.textContent =
    `Showing ${products.length} products`;