import React from 'react'
import Contac from '../ContacScreen/Contac'

const ListaContactos = ({ MOOK }) => {
    return (
        <>
            {MOOK.map(MOOK=> <Contac contac={MOOK} key={MOOK.id}/>)}
        </>
    )
}
export default ListaContactos