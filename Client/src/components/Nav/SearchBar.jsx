import React, { useState } from 'react';
import style from './searchBar.module.css';

const SearchBar = (props) => {

  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value)
  }

  return (
    <div className={style.searchContainer}>
      <input 
        className={style.searchInput} 
        type="text" 
        placeholder='Ingrese su personaje'
        onChange={handleChange}
        value={id}
        />
      <button className={style.searchButton} onClick={() => {props.onSearch(id)}}>Agregar</button>
    </div>
  )
}

export default SearchBar;