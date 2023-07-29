import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { removeFav, orderCards, filterCards } from '../../redux/actions';
import styled from './favorites.module.css';

const Favorites = ({ myFavorites, removeFav }) => {

  const [ favorites, setFavorites ] = useState(myFavorites);

  const dispatch = useDispatch();

  const [ aux, setAux ] = useState(false);

  const handleRemoveFavorite = (id) => {
    const updateFav = favorites.filter((character) => character.id !== id)
    setFavorites(updateFav);
    removeFav(id.toString());
  }

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  }

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value))
  }

  return (
    <div>

      <h1>Mis Personajes Favoritos</h1>

      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descedente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <div className={styled.cardContainer}>
        {myFavorites?.map((character) => {
          return (
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
          )
        })}
      </div>
      
      
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
