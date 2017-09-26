const express = require('express');
const bodyParser = require('body-parser');
const yelpSearch = require('./yelpSearch');
const db = require('../db/index')

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/foods', (req, res, next) => {
  if (req.query.bookmarks === 'bookmarks') {
    db.Food.find({bookmarked: true})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('Error', err);
    })
    ;
  } else {
    db.Food.find({query: req.query.query})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('Error', err);
    });
  }
  
})

app.post('/foods', (req, res, next) => {
  
  yelpSearch(req.body.name, (data) => {
    let result = JSON.parse(data);
    let foods = result.businesses;
    
    let newFoods = foods.map(food => {
      return db.newFoodEntry(food, req.body.name);
    });

    Promise.all(newFoods)
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      console.log(err);
      res.status(200).send();
    });
    
  });
  
})

app.put('/foods', (req, res, next) => {
  let bool = (req.body.bookmarked === 'true');
  db.Food.findOneAndUpdate({id: req.body.id}, {bookmarked: !bool}, {upsert: true})
  .then((data) => {
    res.status(200).send();
  })
  .catch((err) => {
    console.log(err);
  });
})

app.listen(3000, () => {
  console.log('listening on port 3000!');
})