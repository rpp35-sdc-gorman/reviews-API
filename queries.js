const Pool = require('pg').Pool;

const pool  = new Pool({
  user: 'josh',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: '5432'
});

//need to index queries possibly...
const getReviewByProductId = (id) => {
  console.log(id);
  return pool.query('SELECT * FROM reviews WHERE product_id = $1', [id]);
}

const markReviewHelpful = (request, response) => {
  const id = parseInt(request.query.id);
  pool.query('UPDATE reviews SET helpfulness = helpfulness + 1 WHERE review_id = $1', [id], (err, results) => {
    if (err) {
      throw err;
    }
    response.sendStatus(204);
  })
}

const addReview = (request, response) => {
  const id = parseInt(request.query.id);
  const {rating, date, summary, body, name, email} = req.body;

  pool.query('INSERT INTO reviews (product_id, rating, date, summary, body, name, email) VALUES ($1, $2, $3, $4, $5, $6, $7)',
  [id, rating, date, summary, body, name, email], (err, results) => {
    if (err) {
      throw err;
    }
    response.sendStatus(201);
  });
}


module.exports = {getReviewByProductId, markReviewHelpful, addReview};