const { getReviewByProductId } = require('./queries.js');
const express = require('express');
const routes = require('./routes.js');
const request = require('supertest');
const assert = require('assert');

const app = express();
let id1 = 12345;
let id2 = 'hello';
app.use('/reviews', routes);


describe('Testing db query "getReviewByProductId"', () => {

  it('should return an array of reviews for valid product id', () => {
    return getReviewByProductId(id1)
      .then(data => {
        expect(Array.isArray(data.rows)).toBe(true);
      });
  });

  it('should pass a product id to the query function with a string query', () => {
    request(app)
      .get('/reviews')
      .query({ product_id: 12345 })
      .expect(function (res) {
        // console.log(res.body.rows);
        assert(res.body.hasOwnProperty('status'));
        assert(res.body.hasOwnProperty('rows'));
      })
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});
