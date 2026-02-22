// // Элементы корзины
// const cartItemsContainer = document.querySelector('.cart-items');
// const emptyCart = document.querySelector('.empty-cart');
// const totalPriceEl = document.querySelector('#totalPrice');
// const headerTotal = document.querySelector('#totalHeader');
//
// // Кнопки добавления товара
// const addButtons = document.querySelectorAll('.add-btn');
//
// // Массив корзины (только в памяти)
// let cart = [];
//
// // Обновление корзины на странице
// function updateCart() {
//     cartItemsContainer.innerHTML = '';
//
//     if (cart.length === 0) {
//         emptyCart.style.display = 'block';
//     } else {
//         emptyCart.style.display = 'none';
//         cart.forEach((item, index) => {
//             const div = document.createElement('div');
//             div.classList.add('blacksi');
//             div.innerHTML = `
//                 <img src="./imager/img_11.png" alt="">
//                 <div class="info">
//                     <h5>${item.name}</h5>
//                     <p class="sport">${item.category || 'Товар'}</p>
//                     <h3 class="rus">${item.price} ₽</h3>
//                 </div>
//                 <button class="remove"></button>
//             `;
//             // Кнопка удаления товара
//             div.querySelector('.remove').addEventListener('click', () => {
//                 cart.splice(index, 1);
//                 updateCart();
//             });
//             cartItemsContainer.appendChild(div);
//         });
//     }
//
//     // Считаем общую цену
//     const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
//     totalPriceEl.textContent = total + ' ₽';
//     headerTotal.textContent = total + ' ₽';
// }
//
// // Добавление товара по кнопке
// addButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const name = btn.dataset.name;
//         const price = btn.dataset.price;
//         cart.push({ name, price });
//         updateCart();
//     });
// });
//
// // Первый рендер корзины при загрузке страницы
// updateCart();








// // Элементы корзины
// const cartItemsContainer = document.querySelector('.cart-items');
// const emptyCart = document.querySelector('.empty-cart');
// const totalPriceEl = document.querySelector('#totalPrice');
// const headerTotal = document.querySelector('#totalHeader');
//
// // Кнопки добавления товара
// const addButtons = document.querySelectorAll('.add-btn');
//
// // Массив корзины из localStorage
// let cart = JSON.parse(localStorage.getItem('cart')) || [];
//
// // Сохранение корзины
// function saveCart() {
//     localStorage.setItem('cart', JSON.stringify(cart));
// }
//
// // Обновление корзины на странице
// function updateCart() {
//     cartItemsContainer.innerHTML = '';
//
//     if (cart.length === 0) {
//         emptyCart.style.display = 'block';
//     } else {
//         emptyCart.style.display = 'none';
//         cart.forEach((item, index) => {
//             const div = document.createElement('div');
//             div.classList.add('blacksi');
//             div.innerHTML = `
//                 <img src="./imager/img_11.png" alt="">
//                 <div class="info">
//                     <h5>${item.name}</h5>
//                     <p class="sport">${item.category || 'Товар'}</p>
//                     <h3 class="rus">${item.price} ₽</h3>
//                 </div>
//                 <button class="remove"></button>
//             `;
//             // Кнопка удаления товара
//             div.querySelector('.remove').addEventListener('click', () => {
//                 cart.splice(index, 1);
//                 saveCart();
//                 updateCart();
//             });
//             cartItemsContainer.appendChild(div);
//         });
//     }
//
//     // Считаем общую цену
//     const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
//     totalPriceEl.textContent = total + ' ₽';
//     headerTotal.textContent = total + ' ₽';
// }
//
// // Добавление товара по кнопке
// addButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const name = btn.dataset.name;
//         const price = btn.dataset.price;
//         cart.push({ name, price });
//         saveCart();
//         updateCart();
//     });
// });
//
// // Первый рендер корзины при загрузке страницы
// updateCart();