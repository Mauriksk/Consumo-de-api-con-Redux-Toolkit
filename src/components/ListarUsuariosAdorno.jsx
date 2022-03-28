import React, {useEffect} from 'react'

//Redux
import { fetchAllUsers } from '../store/slices/users'
import { useDispatch, useSelector } from 'react-redux'

export const ListarUsuariosAdorno = () => {

    const state = useSelector(state => state.users)
    const { list } = state;

    console.log(list)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])
    

  return (
    <div className='container mt-2'>
        <h2> Informacion de cada Personaje </h2>
        <div className='row'>
            {
            list.map(p => (
                <div key={p.id} className=''>
                    <div className='card mb-2'>
                        <div className='card-body '>
                            <h4>Nombre : { p.name }</h4>
                            <p>Genero : { p.gender }</p>
                            <p>Location : { p.location.name }</p>
                            <p>Origen : { p.origin.name }</p>
                            <p>Status : { p.status }</p>
                            <p>Aparece en : { p.episode.length} capitulos</p>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
        
    </div>
  )
}
