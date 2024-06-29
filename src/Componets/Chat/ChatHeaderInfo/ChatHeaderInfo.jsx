import React from 'react'
import './ChatHeaderInfo.css'
import fotoPerfil from './asset/messiPerfil.jpg'

export const ChatHeaderInfo = () => {
    return (
        <div className='header'>
            <img src={fotoPerfil} alt="" className='img'/>
            <h2 className='nombre'>Leo</h2>
        </div>
    )
}
