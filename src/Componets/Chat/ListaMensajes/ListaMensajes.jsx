import React from 'react'
import { Mensaje } from '../Mensajes/Mensaje'

export const ListaMensajes = ({MOOK}) => {
    return (
        <>
        {
            MOOK.map(MOOK=> <Mensaje mensaje={MOOK} key={MOOK.id}/>)
        }
        </>
    )
}
