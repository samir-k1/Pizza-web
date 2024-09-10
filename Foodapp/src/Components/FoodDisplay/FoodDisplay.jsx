// FoodDisplay.jsx
import React, { useContext } from 'react';
import './Fooddisplay.css';
import { StoreContext } from '../../Pages/Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Check if food_list is defined before using it
  if (!food_list) {
    return <div>Loading...</div>;  // Or handle it in a way appropriate for your app
  }

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-item">
        {food_list.map((item) => {
          if (category == "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;  // Ensure it returns null if the condition is not met
        })}
      </div>
    </div>
  );
};
export default FoodDisplay;
