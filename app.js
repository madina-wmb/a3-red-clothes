let cart = [];

const buttons = document.querySelectorAll(".add-btn");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const card = this.closest(".card");

        const id = card.dataset.id;
        const name = card.dataset.name;
        const price = parseInt(card.dataset.price);

        cart.push({id, name, price});
        updateCart();
    });
});

function updateCart(){
    const cartItems = document.getElementById("cart-items");
    const count = document.getElementById("cart-count");
    const total = document.getElementById("total-price");

    cartItems.innerHTML="";
    let sum=0;

    cart.forEach((item,index)=>{
        sum+=item.price;
        cartItems.innerHTML += `
            <div class="cart-item">
                ${item.name} - ${item.price} ₽
                <button onclick="removeFromCart(${index})">x</button>
            </div>
        `;
    });

    count.innerText = cart.length;
    total.innerText = sum;
}

function removeFromCart(index){
    cart.splice(index,1);
    updateCart();
}

function toggleCart(){
    document.getElementById("cart").classList.toggle("active");
}

document.getElementById("search").addEventListener("input", function(){
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(value) ? "flex" : "none";
    });
});
