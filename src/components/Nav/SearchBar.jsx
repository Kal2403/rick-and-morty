import React from 'react';
import style from './searchBar.module.css';

const SearchBar = () => {
  return (
    <div className={style.searchContainer}>
      <input className={style.searchInput} type="text" placeholder='Ingrese su personaje'/>
      <button className={style.searchButton}>Agregar</button>
    </div>
  )
}

export default SearchBar;