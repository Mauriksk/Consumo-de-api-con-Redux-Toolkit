import React,{useEffect, useState} from 'react';
import { Characters } from './components/Characters';
import { Navbar } from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { Personaje } from './components/Personaje';
//Redux
import { Provider } from 'react-redux'
import store from './store';


function App() {

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})

  const fetchCharacters = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setCharacters(data.results)
      setInfo(data.info)
    })
    .catch(error => console.log(error))
  }

  

  useEffect(() => {
    fetchCharacters(initialUrl)
  }, [])
  

  return (
    <Provider store={store}>
      <Router>
        <Navbar brand='Rick and Morty App' />
          
        <Routes>
            <Route path='/Personaje' element={ <Personaje /> } />
            <Route path='/' element={ <Characters characters={characters} info={info} fetchCharacters={fetchCharacters} /> } />
        </Routes>
          
      </Router>
    </Provider>
  );
}

export default App;
