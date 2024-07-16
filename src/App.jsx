import React from 'react'
import { ChatScreen } from './Screen'
import { Route, Routes } from 'react-router-dom'
import Home from './Screen/Home/Home'

const App = ()=> {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/ChatScreen/:contacId' element={<ChatScreen/>}/>
        </Routes>
    )
}
export default App