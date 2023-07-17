import React from 'react'
import Card from '../Card/Card'
import style from './cards.module.css'

const Cards = (props) => {
  return (
    <div className={style.cardsContainer}>
      {
        props.characters.map((pj) => (
          <Card 
            key={pj.id}
            name={pj.name}
            species={pj.species}
            onClose={() => window.alert('Emular')}
            gender={pj.gender}
            origin={pj.origin.name}
            status={pj.status}
            image={pj.image}
          />
        ))
      }
    </div>
  )
}

export default Cards;
