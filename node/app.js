const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const pokemonsMock = require('./mock_pokemon');

app.use(cors());
app.use(bodyParser.json());

app.get('/api/v1/pokemons/types', function(req, res) {
  let mock = pokemonsMock;

  mock = mock.map(pokemon => {
    return pokemon.type;
  })

  mock = [...new Set(mock)];

  res.status(200).json({
    types: mock
  })
})

app.get('/api/v1/pokemons/:type', function(req, res) {

  let type = req.params.type
  let mock = pokemonsMock;

  mock = mock.filter(pokemon => {
    return pokemon.type === type.toString()
  })

  res.status(200).json({
    pokemons: mock
  })
})

app.get('/api/v1/trainer/:trainer/pokemons', function(req, res) {
  let trainer = req.params.trainer
  let mock = pokemonsMock;

  mock = mock.filter(pokemon => {
    return pokemon.trainer === trainer.toString()
  })

  res.status(200).json({
    pokemons: mock
  })

})


app.get('/api/v1/pokemons', function(req, res) {
  res.status(200).json({
    pokemons: pokemonsMock
  })
})



app.listen(8000, function() {
  console.log('Servidor rodando na porta 8000.');
});


