import React from 'react'
import './MensajeStyle.css'


export const Mensaje = ({mensaje}) => {
    const {author, text, estado, day, hour} = mensaje
    let direction 
    let color
    if(author === 'yo'){
        direction = 'end'
        color = '#005c4b'
    }
    return (
        <div className='conteiner'style={{justifyContent: direction}}>
            <div className="author" style={{backgroundColor: color}}>{author}
                <p className="text">{text}</p>
                <div className="estado">
                    <span>{day} {hour}</span>
                    <span>{estado}</span>
                </div>
            </div>
        </div>
    )
}
