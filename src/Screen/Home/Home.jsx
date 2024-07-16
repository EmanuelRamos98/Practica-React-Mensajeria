import React from 'react'
import { Contac, HeaderContac } from '../../Componets/Contacs'
import { MOOK_MENSAJES } from '../data'
import './HomeStyle.css'
import ListaContactos from '../../Componets/Contacs/ListaContactos/ListaContactos'


const Home = () => {
    return (
        <div className='container_home'>
            <div className='screen_home'>
                <HeaderContac />
                <ListaContactos MOOK={MOOK_MENSAJES} />
            </div>
        </div>
    )
}

export default Home