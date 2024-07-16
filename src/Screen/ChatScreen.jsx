import React, { useState } from 'react'
import { ListaMensajes } from '../Componets/Chat'
import './ChatScreenStyle.css'
import { ChatHeaderInfo } from '../Componets/Chat/ChatHeaderInfo/ChatHeaderInfo'
import { MensajeFrom } from '../Componets/Chat/MensajeForm/MensajeFrom'
import { MOOK_MENSAJES } from './data'
import { useParams } from 'react-router-dom'




export const ChatScreen = () => {
    const { contacId } = useParams()
    const mensaje = MOOK_MENSAJES.find(mensaje => mensaje.id === Number(contacId))
    const mensajes = mensaje.mensajes
    
    const [men, setMensajes] = useState(mensajes)
    const handleSubmit =(e)=>{
        e.preventDefault()
        const mensajeValue={
            author: 'yo',
            text:[],
            estado: '',
            day: 'hoy',
            hour: '13:16',
            id: '5'
        }
        mensajeValue.text.push(e.target.text.value)
        setMensajes([...men, mensajeValue])
    }

    return (
        <div className='screen'>
            <div className='mensajes'>
                <ChatHeaderInfo/>
                <ListaMensajes data={men}/>
                <MensajeFrom handleSubmit={handleSubmit}/>
            </div>
        </div>
    )
}
