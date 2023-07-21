import React, { useState } from 'react';
import { connectm, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { removeFav, orderCards, filterCards } from '../../redux/actions';

const Favorites = ({ myFavorites, removeFav }) => {

  const [ favorites, setFavorites ] = useState(myFavorites);

  const handleRemoveFavorite = (id) => {
    const updateFav = favorites.filter((character) => character.id !== id)
    setFavorites(updateFav);
    removeFav(id.toString());
  }

  return (
    <div>
      <h1>Mis Personajes Favoritos</h1>
      {favorites.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          onClose={() => handleRemoveFavorite(character.id)}
          image={character.image}
          origin={character.origin.name}
          id={character.id}
        />
      ))}
      <select>
        <option value="A">Ascendente</option>
        <option value="D">Descedente</option>
      </select>
      <select>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (id) => dispatch(removeFav(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
