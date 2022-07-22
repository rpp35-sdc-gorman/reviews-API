const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

const getReviewByProductId = require('./queries.js').getReviewByProductId;
const markReviewHelpful = require('./queries.js').markReviewHelpful;
const addReview = require('./queries.js').addReview;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

///// ROUTES /////


app.get('/reviews', (request, response) => {
  const id = parseInt(request.query.product_id);
  getReviewByProductId(id)
  //implement caching here
    .then((reviews) =>
      // console.log(reviews.rows);
      response.status(200).send(reviews.rows))
    .catch((err) => console.error(err))
});

app.put('/reviews/:review_id/helpful', (request, response) => {
  markReviewHelpful(request, response);
});

app.post('/reviews', (request, response) => {
  console.log(request.body);
  addReview(request, response);
})




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



