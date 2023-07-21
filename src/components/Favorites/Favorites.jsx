import React, { useState } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { removeFav } from '../../redux/actions';

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
