import React from 'react';
import FoodListEntry from './FoodListEntry.jsx';

const FoodList = (props) => {
  return (
  <div>
    {props.foods.map(food => {
      return <FoodListEntry key={food.id} food={food}/>
    })}
  </div>
  )
}



export default FoodList;