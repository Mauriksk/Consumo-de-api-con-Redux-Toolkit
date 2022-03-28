import React from 'react'
import { Link } from 'react-router-dom'
import { ListarUsuariosAdorno } from './ListarUsuariosAdorno'

export const Personaje = () => {

   

  return (
      <>
        <div>Hola hellow</div>
            <Link to='/' className='btn btn-dark'>Inicio</Link>
            <ListarUsuariosAdorno />
      </>
    
  )
}
