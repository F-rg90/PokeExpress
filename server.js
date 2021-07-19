const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require('./models/pokemon');

app.get('/', function (req, res) {
      res.send( 'Welcome to the pokemon app! ' );
});




app.listen(PORT, () => {
console.log('we outside', PORT)
})
