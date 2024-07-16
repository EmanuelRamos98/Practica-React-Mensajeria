import React from 'react'
import { Mensaje } from '../Mensajes/Mensaje'


export const ListaMensajes = ({data}) => {
    return (
        <div>
            {data.map(data=><Mensaje lista={data} key={data.id}/>)}
        </div>
    )
}
