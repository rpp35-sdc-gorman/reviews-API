const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

///// ROUTES /////

app.get('/reviews', (req, res) => {
  //parse values for query
  //run db query
    //success: send results
    //error: console.log and send results
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  //parse review id into query
  //run db query
    //success: send success message/status code
    //error: log and send error
});

app.post('/reviews', (req, res) => {
  //parse review id into query
  //run db query
    //success: send success message/status code
    //error: log and send error
})




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



