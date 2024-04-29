import React from 'react';
import './orders.css'
const MyOrders = () => {
  // Sample array of orders
  const orders = [
    { id: 1, product: 'Ticket A', price: 200, status: 'Pending' },
    { id: 2, product: 'Ticket B', price: 300, status: 'Delivered' },
    { id: 3, product: 'Ticket C', price: 250, status: 'Delivered' },
    { id: 4, product: 'Ticket D', price: 400, status: 'Pending' },
    { id: 5, product: 'Ticket E', price: 350, status: 'Delivered' },
  ];

  return (
    <div>
      <h2 className='headi'>My Orders</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>${order.price}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
