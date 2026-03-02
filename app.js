const heart = document.querySelector(".heart-icon");
const modal = document.querySelector(".modal");
const cart = document.querySelector("#cart-icon");
const cartItems = document.querySelector(".cart-items");
const addBtn = document.querySelectorAll(".add-btn");
const emptyCart = document.querySelector(".empty-cart");
const totalPrice = document.querySelector("#total-price");
const headerPrice = document.querySelector("#header-price");
const zakazButton = document.querySelector(".zakaz");
const offContainer = document.querySelector(".off-container");
const footer = document.querySelector(".modal-footer");


zakazButton.addEventListener("click", () => {
    offContainer.style.display = "block";
    cartItems.style.display = "none";
    footer.style.display = "none";
    emptyCart.style.display = "none";


})



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
    carts.forEach((item,index) => {const div=
        document.createElement("div");
        div.classList.add("div");
    div.classList.add("modal-cart");
    div.innerHTML=`
<img class="krug" src="${item.img}" alt="">
<div class="info">
<h3>Blacksi</h3>
<h5>${item.name}</h5>
<!--<p>${item.catigori}</p>-->
<h3>${item.price}<h3/>
</div>
<button class="remove">X</button>`
    div.querySelector(".remove")
    .addEventListener("click", (e) => {
    carts.splice(index,1);
    addToCart();

    })
        cartItems.appendChild(div);
})
    }
    let total=0;
    carts.forEach((item,index) => {
        total+=Number(item.price)
        totalPrice.textContent = total + '₽';

        headerPrice.textContent = total + '₽';
    })
}

addBtn.forEach(btn=>{
    btn.addEventListener("click", () => {
        const name=btn.dataset.name;
        const price=btn.dataset.price;
        const img=btn.dataset.img;
        carts.push({name:name,price:price,img:img});
        addToCart()
})
});










