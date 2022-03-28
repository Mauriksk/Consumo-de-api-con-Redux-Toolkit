import React,{useEffect, useState, createContext} from 'react';
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
import {UserContext} from './context/context';




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
  

  const initialState = {
    persona : "hola"
  }

 const [personaje, setpersonaje] = useState(initialState)

  return (
    <UserContext.Provider value={{personaje, setpersonaje}}>
      <Router>
        <Navbar brand='Rick and Morty App' />
          
        <Routes>
            <Route path='/Personaje' element={ <Personaje /> } />
            <Route path='/' element={ <Characters characters={characters} info={info} fetchCharacters={fetchCharacters} /> } />
        </Routes>
          
      </Router>
    </UserContext.Provider>
      
  );
}

export default App;
