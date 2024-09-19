import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../Context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  const [promoCode, setPromoCode] = useState('');

  // Calculate total price
  const calculateTotal = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const item = food_list.find(food => food._id === itemId);
      return total + (item ? item.price * cartItems[itemId] : 0);
    }, 0);
  };

  // Handle promo code submit
  const handlePromoSubmit = (e) => {
    e.preventDefault();
    // Add promo code functionality here
    console.log("Promo Code Submitted: ", promoCode);
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Cart</h2>
      </div>

      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {/* Loop through food_list and display items in cart */}
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className='cart-items-detail'>
                <img src={item.image} alt='' className="cart-image" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <button onClick={() => removeFromCart(item._id)} className="remove-btn">x</button>
              </div>
            );
          }
          return null;
        })}

        <div className="cart-summary">
          <h3>Total: ${calculateTotal()}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>

        {/* Promo Code Section */}
        <div className="promo-code-section">
          <form onSubmit={handlePromoSubmit}>
            <label htmlFor="promo">If you have a promo code, enter it here</label>
            <input
              type="text"
              id="promo"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Promo code"
            />
            <button type="submit" className="promo-submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
