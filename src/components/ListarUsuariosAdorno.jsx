import React from 'react'

export const ListarUsuariosAdorno = () => {

    const users = [
        {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },]

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
