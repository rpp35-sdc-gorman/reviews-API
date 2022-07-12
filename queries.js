const Pool = require('pg').Pool;

const pool  = new Pool({
  user: 'josh',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: '5432'
});

const getReviewByProductId = (request, response) => {
  pool.query('SELECT * FROM reviews WHERE product_id = $1', [request.params.id], (err, results) => {
    if (err) {
      throw error;
    }
    response.send(results.rows);
  });
}

const markReviewHelpful = (request, response) => {
  pool.query('UPDATE reviews SET helpfulness = helpfulness + 1 WHERE review_id = $1', [request.params.id], (err, results) => {
    if (err) {
      throw error;
    }
    response.sendStatus(200);
  })
}

const addReview = (request, response) => {
  const id = req.params.id;
  const {rating, date, summary, body, name, email} = req.body;

  pool.query('INSERT INTO reviews (product_id, rating, date, summary, body, name, email) VALUES ($1, $2, $3, $4, $5, $6, $7)',
  [id, rating, date, summary, body, name, email], (err, results) => {
    if (err) {
      throw error;
    }
    response.sendStatus(201);
  });
}


module.exports = {getReviewByProductId, markReviewHelpful, addReview};