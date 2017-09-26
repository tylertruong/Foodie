import React from 'react';
import FoodListEntry from './FoodListEntry.jsx';

const FoodList = (props) => {
  return (
  <div>
    {props.foods.map(food => {
      return <FoodListEntry key={food.id} food={food} bookmarkFood={props.bookmarkFood}/>
    })}
  </div>
  )
}



export default FoodList;