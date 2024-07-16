import React from 'react'
import './HeaderContacStyle.css'
import BuscadorHeader from './BuscadorHeader/BuscadorHeader'


const HeaderContac = () => {
    return (
        <div className='container_header_home'>
            <h1 className='header_home'>WhatsApp
            <BuscadorHeader/>
            </h1>
        </div>
    )
}

export default HeaderContac