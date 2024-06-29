import React from 'react'
import { ListaMensajes, MensajeFrom } from '../Componets/Chat'
import './ChatScreenStyle.css'
import { ChatHeaderInfo } from '../Componets/Chat/ChatHeaderInfo/ChatHeaderInfo'


export const ChatScreen = () => {
const MOOK_MENSAJES = [
        {
            author: 'yo',
            text: 'texto de mensaje',
            estado: 'visto',
            day: 'hoy',
            hour: '13:15',
            id: '1'
        },
        {
            author: 'Leo',
            text: 'Hola que tal?',
            estado: 'visto',
            day: 'hoy',
            hour: '13:16',
            id: '2'
        },
        {
            author: 'yo',
            text: 'Sos real? OMG',
            estado: 'visto',
            day: 'hoy',
            hour: '13:17',
            id: '3'
        }
    ]


    return (
        <div className='screen'>
            <div className='mensajes'>
                <ChatHeaderInfo/>
                <ListaMensajes MOOK={MOOK_MENSAJES}/>
                <MensajeFrom/>
            </div>
        </div>
    )
}
