/* ============================
   BlueWave Development
   script.js - Deel 1
============================ */

// =============================
// Donkere / Lichte modus
// =============================

const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeButton.textContent = "☀️";

    }else{

        themeButton.textContent = "🌙";

    }

});

// =============================
// Winkelwagen
// =============================

let cart = [];

const cartItems = document.getElementById("cart-items");

const totalPrice = document.getElementById("total-price");

// Alle koopknoppen

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product = {

            name: button.dataset.name,

            price: Number(button.dataset.price)

        };

        cart.push(product);

        updateCart();

    });

});

// =============================
// Winkelwagen updaten
// =============================

function updateCart(){

    cartItems.innerHTML = "";

    let total = 0;

    if(cart.length === 0){

        cartItems.innerHTML = "<p>Je winkelwagen is leeg.</p>";

    }else{

        cart.forEach((item,index)=>{

            total += item.price;

            const div = document.createElement("div");

            div.classList.add("cart-item");

            div.innerHTML = `

                <h3>${item.name}</h3>

                <p>€${item.price}</p>

                <button class="remove-btn" data-index="${index}">

                    Verwijderen

                </button>

            `;

            cartItems.appendChild(div);

        });

    }

    totalPrice.textContent = total;

}
// =============================
// Product verwijderen
// =============================

cartItems.addEventListener("click", (event) => {

    if (event.target.classList.contains("remove-btn")) {

        const index = event.target.dataset.index;

        cart.splice(index, 1);

        saveCart();

        updateCart();

    }

});

// =============================
// Winkelwagen opslaan
// =============================

function saveCart() {

    localStorage.setItem("bluewave_cart", JSON.stringify(cart));

}

// =============================
// Winkelwagen laden
// =============================

function loadCart() {

    const savedCart = localStorage.getItem("bluewave_cart");

    if (savedCart) {

        cart = JSON.parse(savedCart);

    }

    updateCart();

}

// =============================
// updateCart aanpassen
// =============================

const oldUpdateCart = updateCart;

updateCart = function () {

    oldUpdateCart();

    saveCart();

};

// =============================
// Pagina geladen
// =============================

window.addEventListener("load", () => {

    loadCart();

});
// =============================
// Afrekenen
// =============================

const checkoutButton = document.getElementById("checkout-btn");

if (checkoutButton) {

    checkoutButton.addEventListener("click", () => {

        if (cart.length === 0) {

            alert("Je winkelwagen is leeg!");

            return;

        }

        document.getElementById("checkout").scrollIntoView({

            behavior: "smooth"

        });

    });

}

// =============================
// Bestelformulier
// =============================

const orderForm = document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", function(event){

        event.preventDefault();

        alert("✅ Je bestelling is verzonden! We nemen zo snel mogelijk contact met je op.");

        cart = [];

        saveCart();

        updateCart();

        orderForm.reset();

    });

}

// =============================
// Contactformulier
// =============================

const contactForm = document.querySelector(".contact form");

if(contactForm){

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        alert("📩 Je bericht is succesvol verzonden!");

        contactForm.reset();

    });

}

// =============================
// Thema onthouden
// =============================

const savedTheme = localStorage.getItem("bluewave_theme");

if(savedTheme === "light"){

    document.body.classList.add("light");

    if(themeButton){

        themeButton.textContent = "☀️";

    }

}

if(themeButton){

    themeButton.addEventListener("click", ()=>{

        if(document.body.classList.contains("light")){

            localStorage.setItem("bluewave_theme","light");

        }else{

            localStorage.setItem("bluewave_theme","dark");

        }

    });

}

// =============================
// Scroll Animatie
// =============================

const animatedElements = document.querySelectorAll(

".card, .member, .product, .review, .faq-item, .stat"

);

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0px)";

        }

    });

},{
    threshold:0.15
});

animatedElements.forEach(element=>{

    element.style.opacity="0";

    element.style.transform="translateY(40px)";

    element.style.transition=".6s ease";

    observer.observe(element);

});

// =============================
// Welkomstbericht
// =============================

window.addEventListener("load", ()=>{

    console.log("BlueWave Development succesvol geladen.");

});