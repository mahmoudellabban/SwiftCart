import React from 'react'
import "./cart.css"
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
  
    const removeItem = (itemId) => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };
  
    const increaseQuantity = (itemId) => {
      dispatch({ type: 'INCREASE_QUANTITY', payload: itemId });
    };
  
    const decreaseQuantity = (itemId) => {
      dispatch({ type: 'DECREASE_QUANTITY', payload: itemId });
    };
  
    const calculateTotal = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };
  return (
    <div className='container'>
      {cartItems.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        <div >
          <div >
            {cartItems.map((item) => (
              <div key={item.id} className='order'>
                <img src={item.image} alt={item.title} />
                <div className="details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="buttons">
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
          <p>Total: ${calculateTotal()}</p>
          <button>Check Out</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart