import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
  
      <div className='navbarCustom'>
      <ul>
        <li><Link className="linknav navbar-brand text-uppercase" to='/'>Rick and Morty </Link></li>
        <li><Link className="linknav navbar-brand " to='/'>Con Imagenes</Link></li>
        <li><Link className="linknav navbar-brand" to='/Personaje'> Solo Informacion </Link></li>
      </ul>
      </div>
      
    
    
  )
}


/*

<nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand text-uppercase" to='/'>Rick and Morty </Link>
          <Link className="navbar-brand " to='/'>Con Imagenes</Link>
          <Link className="navbar-brand text-uppercase" to='/Personaje'>Solo Informacion </Link>
        </div>
      </nav>

*/