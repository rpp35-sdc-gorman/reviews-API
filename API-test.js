const {getReviewByProductId} = require('queries.js');

let req1.query.product_id = 12345;
let req2.query.product_id = 'hello';

describe('Testing db query "getReviewByProductId"', () => {
  it('should return an array for valid product id', async () => {
    const data = await getReviewByProductId()
  } )
})