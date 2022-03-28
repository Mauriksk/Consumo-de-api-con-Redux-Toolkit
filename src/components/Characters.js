import React, { useState, createContext, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/context'
import usePersonaje from '../hooks/usePersonaje'
import { Pagination } from './Pagination'

export const Characters = ({characters = [], info, fetchCharacters}) => {

    

    

    const onPrevious = () => {
        fetchCharacters(info.prev)
    }

    const onNext = () => {
        fetchCharacters(info.next)
    }

    console.log(characters)

    const {personaje, setpersonaje} = useContext(UserContext)

    return (

    <div className='container mt-5'>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <div className='row'>
        {
            characters.map((item, index) => {
                return (
                    <Link to='/Personaje' onClick={ ()=> setpersonaje(item) } key={index} className='my-card'>
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
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
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