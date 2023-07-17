import React from 'react';
import SearchBar from './SearchBar';
import style from './nav.module.css';
import { Link } from 'react-router-dom'; 

const Nav = (props) => {
  return (
    <div className={style.navContainer}>
      <SearchBar onSearch={props.onSearch}/>
      <Link to='/About'>
        <button>About</button>
      </Link>
      <Link to='/Home'>
        <button>Home</button>
      </Link>
    </div>
  )
}

export default Nav;