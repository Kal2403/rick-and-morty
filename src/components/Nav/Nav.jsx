import React from 'react';
import SearchBar from './SearchBar';
import style from './nav.module.css';

const Nav = () => {
  return (
    <div className={style.navContainer}>
      <SearchBar />
    </div>
  )
}

export default Nav;