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
    <>
      <Router>
      <Link to='/' className='btn btn-dark'>Inicio</Link>
      <Link to='/nosotros' className='btn btn-primary'>Nosotros</Link>
      <Navbar brand='Rick and Morty App' />
          

        <Routes>
            <Route path='/nosotros' element={ <Personaje /> } />
            <Route path='/' element={ <Characters characters={characters} info={info} fetchCharacters={fetchCharacters} /> } />
        </Routes>
          
      </Router>
        
    </>
  );
}

export default App;
