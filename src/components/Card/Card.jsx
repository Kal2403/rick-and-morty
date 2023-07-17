import React from 'react';
import style from './card.module.css';

const Card = ({ name, species, gender, onClose, image, origin}) => {
  return (
    <div className={style.cardContainer}>
         <div className={style.imageContainer}>
            <img className={style.cardImg} src={image} alt={name} />
            <div className={style.cardNameContainer}>
               <h2 className={style.cardName}>{name}</h2>
            </div>
            <button className={style.cardButton} onClick={onClose}>X</button>
         </div>
         <div className={style.cardSpecieGenderContainer}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
         </div>
      </div>
  )
}

export default Card;