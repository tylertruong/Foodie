import React from 'react';

const FoodDisplay = (props) => {
  if (Object.keys(props.bookmark).length !== 0) {
    return (

      <div className="container">
        <div className="row">
          <div className="col">
            <img src={props.bookmark.imageUrl} style={{height: '300px', width: '350px'}}></img>
          </div>
          <div className="col">
            <br></br>
            <b>{props.bookmark.name}</b> <br></br>
            {props.bookmark.category}<br></br><br></br>
            {props.bookmark.address1} <br></br>
            {props.bookmark.address2}  <br></br>
            {props.bookmark.phone} <br></br>
            {props.bookmark.rating} Stars<br></br>
            {props.bookmark.reviewCount} Reviews<br></br>
            {props.bookmark.price}<br></br>
            
          </div>
        </div>
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