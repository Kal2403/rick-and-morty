import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import characters from './data.js'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Cards characters={characters}/>
    </div>
  );
}

export default App;