import React from 'react'
import './ChatHeaderInfo.css'
import { Link, useParams } from 'react-router-dom'
import { MOOK_MENSAJES } from '../../../Screen/data'

export const ChatHeaderInfo = () => {
    const {contacId} = useParams()
    const mensaje = MOOK_MENSAJES.find(mensaje=> mensaje.id === Number(contacId))
    
    return (
        <div className='header'>
            <img src={mensaje.thumbnail} alt="" className='img'/>
            <div className="nombre_container">
                <h2 className='nombre'>{mensaje.nombre}</h2>
                <span className='ultima_conexion'>{mensaje.ultima_conexion}</span>
            </div>
        </div>
    )
}
