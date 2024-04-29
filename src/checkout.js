import React from 'react';
import './checkout.css'
const Checkout = () => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to backend)
  };

  return (

    <div className="checkout-container">
        
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea id="address" name="address" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="card-number">Card Number:</label>
          <input type="text" id="card-number" name="card-number" required />
        </div>
        <div className="form-group">
          <label htmlFor="expiry-date">Expiry Date:</label>
          <input type="text" id="expiry-date" name="expiry-date" required />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default Checkout;
