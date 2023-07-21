import React from 'react';
import SearchBar from './SearchBar';
import style from './nav.module.css';
import { Link } from 'react-router-dom'; 

const Nav = (props) => {
  return (
    <div className={style.navContainer}>
      <SearchBar onSearch={props.onSearch}/>
      <div className={style.navButtonsContainer}>
        <Link to='/About'>
          <button className={style.btns}>About</button>
        </Link>
        <Link to='/Home'>
          <button className={style.btns}>Home</button>
        </Link>
        <Link to='/Favorites'>
          <button className={style.btns}>Favorites</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Nav;