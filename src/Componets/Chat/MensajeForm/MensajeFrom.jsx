import React from 'react'
import './MensajeFormStyle.css'

export const MensajeFrom = () => {
    return (
            <div className='mensaje_form'>
                <input type="text" className='text_formulario' placeholder='Mesaje' />
                <button className='btn'><i className="bi bi-mic"></i></button>
            </div>
    )
}
