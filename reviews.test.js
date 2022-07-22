const {getReviewByProductId} = require('./queries.js');
let id1 = 12345;
let id2 = 'hello';

describe('Testing db query "getReviewByProductId"', () => {
  it('should return an array of reviews for valid product id', () => {
    jest.setTimeout(10000);
    return getReviewByProductId(id1)
      .then(data => {
        expect(Array.isArray(data.rows)).toBe(true);
      });
  });
});

///test is running, not passing due to timeout