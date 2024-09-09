import React from 'react'
import './Fooditem.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'
const FoodItem = ({ id, name, price, description, image }) => {
    const [itemCount, setItemCount] = useState(0); // Set initial value to 0
  
    return (
      <div className='food-item'>
        <div className="food-item-img-container">
          <img src={image} alt="" className="classname" />
          
          {/* If itemCount is 0, show the 'add' icon */}
          {!itemCount ? (
            <img
              className='add'
              onClick={() => setItemCount(prev => prev + 1)}
              src={assets.add_icon_white}
              alt=''
            />
          ) : (
            <div className='food-item-counter'>
              <img
                onClick={() => setItemCount(prev => prev + 1)}
                src={assets.add_icon_green}
                alt=""
              />
              <div>{itemCount}</div>
              <img
                onClick={() => setItemCount(prev => (prev > 0 ? prev - 1 : 0))} // Ensure count doesn't go below 0
                src={assets.remove_icon_red}
                alt=""
              />
            </div>
          )}
        </div>

        <div className="foof-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />

            </div>
            <p className="food-item-des">{description}</p>
            <p className="food-item-price">${price}</p>

        </div>
      
    </div>
  )
}

export default FoodItem
