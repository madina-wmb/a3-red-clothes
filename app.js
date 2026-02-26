const heart = document.querySelector(".heart-icon");
const cart = document.querySelector("#cart-icon");
const modal = document.querySelector(".modal");
const cartItems = document.querySelector(".cart-items");
const addBtn = document.querySelectorAll(".add-btn");
const emptyCart = document.querySelector(".empty-cart");


heart.addEventListener("click", () => {
    heart.classList.toggle("active");
});

cart.addEventListener("click", () => {
    modal.classList.add("open");
})

let carts = [];

function addToCart() {
    cartItems.innerHTML=""
    if (carts.length===0){
        emptyCart.style.display="block";
    }else {
        emptyCart.style.display="none";
    carts.forEach((item,index) => {const div=document.createElement("div");
    div.classList.add("modal-cart");
    div.innerHTML=`<img src="./images/chel.svg" alt="">
<div class="info">
<h5>${item.name}</h5>
<p>${item.catigori}</p>
<h3>${item.price}<h3/>
</div>
<button class="remove"></button>`
    div.querySelector(".remove")
    .addEventListener("click", (e) => {
    carts.splice(index,1);
    addToCart();

    })
        cartItems.appendChild(div);
})
    }
}

addBtn.forEach(btn=>{
    btn.addEventListener("click", () => {
        const name=btn.dataset.name;
        const price=btn.dataset.price;
        carts.push({name:name,price:price});
        addToCart()


})
});


document.addEventListener("DOMContentLoaded", function () {

    const heart = document.querySelector(".bi-suit-heart-fill");

    heart.addEventListener("click", function () {
        if (heart.style.color === "red") {
            heart.style.color = "black";
        } else {
            heart.style.color = "red";
        }
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const hearts = document.querySelectorAll(".bi-suit-heart-fill");
    const favoritesBlock = document.getElementById("favorites"); // блок избранного

    // Загружаем ранее сохраненные товары
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.forEach(product => {
        addProductToFavorites(product);
    });

    hearts.forEach(heart => {
        heart.addEventListener("click", function() {
            const card = heart.closest(".product"); // находим карточку товара
            const product = {
                name: card.querySelector(".name").textContent,
                price: card.querySelector(".price").textContent,
                img: card.querySelector("img").src
            };

            // Проверка, чтобы не дублировать
            if (!favorites.find(item => item.name === product.name)) {
                favorites.push(product);
                localStorage.setItem("favorites", JSON.stringify(favorites));
                addProductToFavorites(product);
                heart.style.color = "red";
            }
        });
    });

    function addProductToFavorites(product) {
        favoritesBlock.innerHTML += `
            <div class="fav-item">
                <img src="${product.img}" alt="${product.name}" style="width:100px;">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `;
    }
});
