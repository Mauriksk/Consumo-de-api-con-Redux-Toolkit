import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'


//Redux
import { fetchAllUsers } from '../store/slices/users'
import {  useSelector, useDispatch } from 'react-redux'

export const Characters = () => {

    const state = useSelector(state => state.users)
    const { list } = state;

    console.log(list)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])


    return (

    <div className='container mt-5'>
        <div className='row'>
        {
            list.map((item) => {
                return (
                    <Link to='/Personaje' key={item.id} className='my-card'>
                        <img src={item.image} className="img img-responsive"/>
                        <div className="profile-position "><h3 className=''>{item.name}</h3></div>
                            <div className="profile-overview">
                            <div className="profile-overview">
                                <div className="row">
                                    <div className="col-ms-4">
                                    <p>Status: {item.status}</p>
                                    <p>Especie: {item.species}</p>
                                    <p>Origen: {item.origin.name}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Link>
                )
                })
        }
        </div>
    </div>
  )
}


/* 
<div key={index} className='col mb-4'>
                    <div className='card' style={{
                        minWidth: '200px'
                    }}>
                            <img src={item.image} alt="" />
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <hr/>
                                <p>Location: {item.location.name}</p>
                                <p>Especie: {item.species}</p>
                            </div>
                        </div>
                    </div>

                    */