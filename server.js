//require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require('./models/pokemon');

app.get('/', function (req, res) {
      res.send( 'Welcome to the pokemon app! ' );
});



app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())




/*
INDUCES
*/

/*INDEX*/
app.get('/pokemon', (req, res) =>{
  res.render('Index',)
})


/*NEW*/
app.get('/pokemon/new', (req, res)=> {
  res.render('New')
})


/*DELETE*/




/*UPDATE*/




/*CREATE*/
app.post('/pokemon', (req, res)=> {
  Pokemon.create(req.body, (err, createdPokemon)=>{
    if(err) {
      res.status(404).send({
        msg: err.message
      })
    }else{
      console.log(createdPokemon);
      res.redirect('/pokemon')
    }
  })
})







/*EDIT*/

/*SHOW*/
app.get('/pokemon/:id', (req, res) => {
  res.send(req.params.id);
//   Pokemon.findById(req.params.id, (err, foundPokemon)=>{
//     if(err){
//       res.status(404).send({
//         msg:err.message
//       })
//     }else{
//       res.render('Show', {
//         pokemon: foundPokemon
//       })
//     }
//   })
})




app.listen(PORT, () => {
console.log('we outside', PORT)
})
