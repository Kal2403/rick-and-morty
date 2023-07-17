import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';

const App = () => {

  const [characters, setCharacters] = useState([]);

 const onSearch = (id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
     if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
     } else {
        window.alert('¡No hay personajes con este ID!');
     }
  });
}

  const onClose = (id) => {
    const updateCharacters = characters.filter((character) => parseInt(character.id) !== id);
    setCharacters(updateCharacters);
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards characters={characters} onClose={onClose}/>
    </div>
  );
}

export default App;
