const heart = document.querySelector(".heart-icon");
const cart = document.querySelector("#cart-icon");
const modal = document.querySelector(".modal");



heart.addEventListener("click", () => {
    heart.classList.toggle("active");
});

cart.addEventListener("click", () => {
    modal.classList.add("open");
})