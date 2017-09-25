import React from 'react';

const FoodListEntry = (props) => {
    return (
    <div>
      <div>{props.food.name}</div>
      <img src={props.food.image_url} width="300" height="300"></img>
    </div>
    )
}

export default FoodListEntry;