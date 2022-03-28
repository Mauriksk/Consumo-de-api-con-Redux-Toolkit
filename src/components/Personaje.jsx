import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/context'

import usePersonaje from '../hooks/usePersonaje'

export const Personaje = () => {

    const {personaje, setpersonaje} = useContext(UserContext)

  return (
      <>
        <div>{personaje}</div>
            <Link to='/' className='btn btn-dark'>Inicio</Link>
      </>
    
  )
}
