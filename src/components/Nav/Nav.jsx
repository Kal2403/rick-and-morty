import React from 'react';
import SearchBar from './SearchBar';
import style from './nav.module.css';

const Nav = (props) => {
  return (
    <div className={style.navContainer}>
      <SearchBar onSearch={props.onSearch}/>
    </div>
  )
}

export default Nav;