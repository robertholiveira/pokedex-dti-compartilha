import React, { useState, useEffect } from 'react';
import axios from "axios";

import Header from './components/Header';
import Card from './components/Card';
import Select from './components/Select';

const App = () => {

  const [pokemons, setPokemons] = useState([]);

  const [types, setTypes] = useState([]);


  const fetchPokemons = async ( url ) => {

    const response = await axios.get( url );
    setPokemons(response.data.pokemons);
    
  }

  const fetchTypes = async () => {
    const response = await axios.get( 'http://localhost:8000/api/v1/pokemons/types' );
    setTypes(response.data.types);
  }

  useEffect(() => {
    fetchPokemons( 'http://localhost:8000/api/v1/pokemons' );
    fetchTypes();
  }, []);

  const handleChange = (event) => {
    fetchPokemons( `http://localhost:8000/api/v1/pokemons/${event.target.value}` )
  }
  
  return (
    <div className="App">

      <Header/>

      <div className="container">

        <Select handleChange={handleChange} options={types} label="Escolha um tipo:" />
        
          {pokemons.map((pokemon, index) => (

            <Card
              name={pokemon.name}
              type={pokemon.type}
              photo={pokemon.photo}
              key={index}
            />

          ))}
       
      </div>

    </div>
  );
}

export default App;
