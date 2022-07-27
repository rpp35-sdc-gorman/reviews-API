const {Router} = require('express');
const bodyParser = require('body-parser');
const getReviewByProductId = require('./queries.js').getReviewByProductId;
const markReviewHelpful = require('./queries.js').markReviewHelpful;
const addReview = require('./queries.js').addReview;

const router = new Router();

router.get('/reviews', (request, response) => {
  const id = parseInt(request.query.product_id);
  getReviewByProductId(id)
  //implement caching here
    .then((reviews) =>
      // console.log(reviews.rows);
      response.status(200).send(reviews.rows))
    .catch((err) => console.error(err))
});

router.put('/reviews/:review_id/helpful', (request, response) => {
  markReviewHelpful(request, response);
});

router.post('/reviews', (request, response) => {
  console.log(request.body);
  addReview(request, response);
});

module.exports = router;