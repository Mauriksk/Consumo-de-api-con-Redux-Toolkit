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
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
          
        <Routes>
            <Route path='/' element={ <Characters  /> } />
            <Route path='/Personaje' element={ <Personaje /> } />
        </Routes>
          
      </Router>
    </Provider>
  );
}

export default App;
