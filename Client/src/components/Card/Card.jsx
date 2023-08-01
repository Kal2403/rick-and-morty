import React, { useState, useEffect } from 'react';
import style from './card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';

const Card = ({ name, species, gender, onClose, image, origin, id, myFavorites, addFav, removeFav }) => {

   const [ isFav, setIsFav ] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(id.toString());
      } else {
         setIsFav(true);
         addFav({ id, name, species, gender, image, origin })
      }
   }

   useEffect(() => {
      for (let i = 0; i < myFavorites.length; i++) {
         if (myFavorites[i].id === id) {
            setIsFav(true);
            break;
         }
      }
   }, [myFavorites, id]);

   return (
      <div className={style.cardContainer}>
         <div className={style.imageContainer}>
            <img className={style.cardImg} src={image} alt={name} />
            <div className={style.cardNameContainer}>
               <Link className={style.cardLinkName} to={`/details/${id}`}>
                  <h2 className={style.cardName}>{name}</h2>
               </Link>
            </div>
            <button className={style.cardButton} onClick={() => onClose(id)}>X</button>
         </div>
         <div className={style.cardSpecieGenderContainer}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
         </div>
         { isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
         }
      </div>
  )
}

export const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (favorite) => dispatch(addFav(favorite)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);