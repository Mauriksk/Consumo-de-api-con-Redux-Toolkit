import React, {useEffect} from 'react'

//Redux
import { fetchAllUsers } from '../store/slices/users'
import { useDispatch, useSelector } from 'react-redux'

export const ListarUsuariosAdorno = () => {

    const state = useSelector(state => state.users)
    const { list } = state;

    const dispatch = useDispatch()

    const users = []

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])
    

  return (
    <div className='container'>
        <div className='row'>
            {
            list.map(p => (
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
