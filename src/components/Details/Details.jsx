import React from 'react';
import axios from 'axios';
import styled from './details.module.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Details = () => {

  const {id} = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

  return (
    <>
      {
         character ? (
            <div className={styled.detailsContainer}>
               <div className={styled.descriptionContainer}>
                  <h1 className={styled.detailsName}>{character.name}</h1>
                  <div className={styled.descriptionContainer2}>
                     <h3>STATUS | {character.status}</h3>
                     <h3>GENDER | {character.gender}</h3>
                     <h3>SPECIE | {character.species}</h3>
                     <h3>ORIGIN | {character.origin?.name}</h3>
                  </div>
               </div>
               <img className={styled.detailsImg} src={character.image} alt={character.name} />
            </div>
         )
         : (
            ""
         )
      }
    </>
  )
}

export default Details;
