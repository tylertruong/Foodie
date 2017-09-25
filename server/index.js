const express = require('express');
const bodyParser = require('body-parser');
const yelpSearch = require('./yelpSearch');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let foods = [];

app.get('/foods', (req, res, next) => {
  res.status(200).send(foods);
})

app.post('/foods', (req, res, next) => {

  yelpSearch(req.body.name, (data) => {
    let result = JSON.parse(data);
    //console.log(result.businesses);
    foods = result.businesses;
    res.status(200).send();
  });
  
})


app.listen(3000, () => {
  console.log('listening on port 3000!');
})