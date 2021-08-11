require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const Pokemon = require('./models/pokemon');

app.get('/', function (req, res) {
      res.send( 'Welcome to the pokemon app! ' );
});


//database//
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

mongoose.connection.once('open', () => {
  console.log('Mango Good')
})



app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use((req, res, next) => {
  console.log('**********************')
  console.log('***********Middleware checking in***********')
  console.log('I run before all routes')
  console.log('**********************')
  next()
})


app.use(express.urlencoded({ extended: true }))

/*
INDUCES
*/

app.get('/pokemon/seed', (req, res)=>{
  Pokemon.create([
    {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
  	{name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.jpg"},
  	{name: "charizard", img: "http://img.pokemondb.net/artwork/charizard.jpg"},
  ], (err, data)=>{
    res.redirect('/pokemon')
  })
})





/*INDEX*/
app.get('/pokemon', (req, res) =>{
  Pokemon.find({}, (err, foundPokemon)=>{
    if(err) {
      res.status(404).send({
        msg:err.message
      })
    }else{
      res.render('Index', {pokemon: foundPokemon})
    }
  })
})




/*NEW*/
app.get('/pokemon/new', (req, res) => {
  res.render('New')
})


/*DELETE*/




/*UPDATE*/




/*CREATE*/
app.post('/pokemon', (req, res) => {
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
  Pokemon.findById(req.params.id, (err, foundPokemon)=>{
    if(err){
      res.status(404).send({
        msg: err.message
      })
    }else{
      res.render('Show', {
        pokemon: foundPokemon
      })
    }
  })
})




app.listen(PORT, () => {
console.log('we outside', PORT)
})
