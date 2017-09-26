const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
})

db.once('open', () => {
  console.log('mongoose connected successfully');
})

let foodSchema = mongoose.Schema({
  id: {type: String, unique: true},
  address1: String,
  address2: String,
  imageUrl: String,
  name: String,
  phone: String,
  bookmarked: Boolean,
  query: String,
  long: Number,
  lat: Number,
  rating: Number
})

let Food = mongoose.model('Food', foodSchema);

let newFoodEntry = (food, query) => { 
  let instance = new Food({
    id: food.id, 
    address1: food.location.display_address[0], 
    address2: food.location.display_address[1], 
    imageUrl: food.image_url, 
    name: food.name, 
    phone: food.display_phone, 
    bookmarked: false, 
    query: query,
    long: food.coordinates.longitude,
    lat: food.coordinates.latitude,
    rating: food.rating
  });

  return instance.save();

}


module.exports.Food = Food;
module.exports.newFoodEntry = newFoodEntry;