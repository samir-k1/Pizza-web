import React, { useContext } from 'react'
import './Fooditem.css'
// import { useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Pages/Context/StoreContext'
const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  
    console.log(`Rendering FoodItem with id: ${id}`);  // Log id to check uniqueness
  
    return (
      <div className='food-item'>
        <div className="food-item-img-container">
          <img src={image} alt={name} className="classname" />
          
          {!cartItems[id] ? (
            <img
              className='add'
              onClick={() => {
                console.log(`Add clicked for id: ${id}`);
                addToCart(id);
              }}
              src={assets.add_icon_white}
              alt='Add item'
            />
          ) : (
            <div className='food-item-counter'>
              <img
                onClick={() => {
                  console.log(`Increment clicked for id: ${id}`);
                  addToCart(id);
                }}
                src={assets.add_icon_green}
                alt="Increment item"
              />
              <div>{cartItems[id]}</div>
              <img
                onClick={() => {
                  console.log(`Decrement clicked for id: ${id}`);
                  removeFromCart(id);
                }}
                src={assets.remove_icon_red}
                alt="Decrement item"
              />
            </div>
          )}
        </div>
  
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_stars} alt="" />
          </div>
          <p className="food-item-des">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    );
  };
  export default FoodItem
  
