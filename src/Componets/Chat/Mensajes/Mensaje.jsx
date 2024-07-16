import React from 'react'
import './MensajeStyle.css'



export const Mensaje = ({ lista }) => {
    const { author, day, estado, hour, text } = lista
    let direction
    let color
    if (author === 'yo') {
        direction = 'end'
        color = '#005c4b'
    }
        return (
            <div className='conteiner' style={{justifyContent: direction}}>
                <div className='author' style={{backgroundColor: color}}>{author}
                    <p className='text'>{text}</p>
                    <div className='estado'>
                        <span>{estado}</span>
                        <span>{day}: {hour}</span>
                    </div>
                </div>
            </div>
        )
    }



