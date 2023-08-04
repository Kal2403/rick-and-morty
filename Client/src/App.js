import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Details from './components/Details/Details';
import Form from './components/Form/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';

const App = () => {

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  // const EMAIL = 'kal2403199255@gmail.com';
  // const PASSWORD = 'google2403';

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
      } else {
          window.alert('¡No hay personajes con este ID!');
      }
    });
  }

  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onClose = (id) => {
    const updateCharacters = characters.filter((character) => parseInt(character.id) !== id);
    setCharacters(updateCharacters);
  }

  return (
    <div className="App">
      { pathname !== '/' && <Nav onSearch={onSearch}/>}
      <Routes>
   
        <Route path='/' element={<Form login={login} />} />

        <Route path='/home' element={
          <Cards characters={characters} onClose={onClose}/>
        }
        />

        <Route path='/about' element={<About />} />

        <Route path='/details/:id' element={<Details/>} />

        <Route path='/favorites' element={<Favorites/>} />

      </Routes>
    </div>
  );
}

export default App;
