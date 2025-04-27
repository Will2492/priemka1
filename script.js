
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

document.addEventListener('DOMContentLoaded', renderOrders);
