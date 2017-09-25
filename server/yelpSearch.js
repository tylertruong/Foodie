const request = require('request');

const searchYelp = (query, callback) => {
  let options = {
    url: `https://api.yelp.com/v3/businesses/search?term=${query}&location=San+Francisco`,
    auth: {
      'bearer': 'QVmIrlCkkcN6_0UG5_R_j5vTOfEPgOLX7lZc6_jNv7XslicNBGA6O9IP8XdBWBb8WQKOW1jEDoZ47g-lizd-chHdYVKx69TOmBofNvJjEYa86vKbMcMygxpFzGDJWXYx'
    },
    // options: {
    //   term: query,
    //   location: 'San Francisco'
  }
  request.get(options, (error, response, body) => {
    if (error) {
      console.log('nooooooo', error);
    }
    callback(body);
  });
}

module.exports = searchYelp;