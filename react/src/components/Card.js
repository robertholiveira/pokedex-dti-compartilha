import React from 'react';

const Card = ({photo, name, type}) => (
  <div className="column">
    <div className="cardPokemon">
        <img className="photo" src={photo} alt={`Foto do pokemon ${name}`} />
        <h1 className="name">{name}</h1>
        <p className="type">{type}</p>
    </div>
  </div>
);

export default Card;