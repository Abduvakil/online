// Локальное хранилище для корзины
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Добавление товара в корзину
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Товар добавлен в корзину!");
}

// Отображение корзины
function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    
    if (!cartItems || !totalPrice) return;

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `<p>${item.name} - ${item.price} руб. <button onclick="removeFromCart(${index})">Удалить</button></p>`;
    });

    totalPrice.textContent = total;
}

// Удаление товара из корзины
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Оформление заказа
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("order-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Заказ оформлен! Спасибо!");
            localStorage.removeItem("cart");
            window.location.href = "index.html";
        });
    }
});

// При загрузке страницы отображаем корзину
document.addEventListener("DOMContentLoaded", displayCart);
