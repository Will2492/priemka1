document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const order = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        brand: document.getElementById('brand').value,
        model: document.getElementById('model').value,
        problem: document.getElementById('problem').value,
        price: document.getElementById('price').value,
        status: "Принят"
    };
    
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    this.reset();
    renderOrders();
    showThankYouMessage();
});

function renderOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const ordersList = document.getElementById('orders');
    ordersList.innerHTML = '';

    orders.forEach((order, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${order.name} (${order.phone}) — ${order.brand} ${order.model} — ${order.problem} — ${order.price}₽ — <b>${order.status}</b>
        `;
        ordersList.appendChild(li);
    });
}

function showThankYouMessage() {
    const container = document.querySelector('.container');
    const message = document.createElement('div');
    message.className = 'thank-you';
    message.innerHTML = `
        <h2>Спасибо!</h2>
        <p>Ваша заявка успешно принята.</p>
    `;
    container.prepend(message);

    setTimeout(() => {
        message.remove();
    }, 4000); // сообщение исчезнет через 4 секунды
}

document.addEventListener('DOMContentLoaded', renderOrders);
