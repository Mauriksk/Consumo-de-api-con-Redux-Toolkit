import React, {useEffect} from 'react'

//Redux
import { fetchAllUsers } from '../store/slices/users'
import { useDispatch } from 'react-redux'

export const ListarUsuariosAdorno = () => {


    const dispatch = useDispatch()

    const users = []

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])
    

  return (
    <div className='container'>
        <div className='row'>
            {
            users.map(p => (
                <div key={p.id} className='col-md-3'>
                    <div className='card'>
                        <img src={p.avatar} alt="" />
                        <div className='card-body'>
                            <p>{p.email}</p>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
        
    </div>
  )
}
