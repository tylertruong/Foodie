import React from 'react';


const FoodListEntry = (props) => {
    return (
    <div className="card" style={{width:'350px', display: 'inline-block', margin: '10px'}}>
      <img className="card-img-top" src={props.food.imageUrl} style={{height: '300px', width: '350px'}}></img>
      <div className="card-block" style={{height: '300px', width: '350px', padding: '10px'}}>
        <h4 className="card-title">{props.food.name}</h4>
        <p className="card-text" style={{height: '250px', width: '350px'}}>
          <b>Address:</b> <br></br>
          {props.food.address1} <br></br>
          {props.food.address2} <br></br>
        
          <b>Phone:</b> <br></br>
          {props.food.phone} <br></br>
      
          <b>Rating:</b> <br></br>
          {props.food.rating}/5
          <br></br>
          <br></br>


          <button href="#" className="btn btn-primary" onClick={() => props.bookmarkFood(props.food)}>{props.food.bookmarked ? 'Bookmarked' : 'Bookmark'}</button>
        </p>
 
       </div>
    </div>


    )
}

export default FoodListEntry;