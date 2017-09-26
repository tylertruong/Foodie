import React from 'react';

const FoodDisplay = (props) => {
  if (Object.keys(props.bookmark).length !== 0) {
    return (
      <div>
        {props.bookmark.name}!
      </div>
    )
  } else {
    return (
      <div>
      </div>
    )
  }
}

export default FoodDisplay;