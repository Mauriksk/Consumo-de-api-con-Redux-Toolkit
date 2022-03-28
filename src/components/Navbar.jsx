import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand text-uppercase" to='/'>Rick and Morty </Link>
          <Link className="navbar-brand " to='/'>Con Imagenes</Link>
          <Link className="navbar-brand text-uppercase" to='/Personaje'>Solo Informacion </Link>
        </div>
      </nav>
  )
}
