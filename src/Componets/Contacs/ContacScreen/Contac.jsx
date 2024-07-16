import React from 'react'
import { Link } from 'react-router-dom'
import './Contac.css'

const Contac = ({contac}) => {
    const{nombre, thumbnail, ultima_conexion}= contac
    const mensaje = contac.mensajes
    const ultimo = mensaje[mensaje.length -1]
    
    return (
            <div className='contac_container'>
                <div className='contac'>
                    <h2 className='nombre_contac'>{nombre}</h2>
                    <img src={thumbnail} alt="" className='img_contac' />
                    <div className='container_ultima_conexion'>
                        <span className='mensaje_home'>{ultimo.text}</span>
                        <span className='ultima_conexion_contac'>{ultima_conexion}
                        <Link to={'/ChatScreen/'+ contac.id}>Ver+</Link>
                        </span>
                    </div>
                </div>
            </div>
        )

}

export default Contac