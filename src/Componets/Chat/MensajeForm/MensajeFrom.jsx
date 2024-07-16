import React from 'react'
import './MensajeFormStyle.css'

export const MensajeFrom = ({handleSubmit}) => {
    return (
            <form onSubmit={handleSubmit} className='mensaje_form'>
                <input type="text" id='text' name='text' className='text_formulario' placeholder='Mensaje'/>
                <input className='btn' id='btn' type='submit'/>
            </form>
    )
}
