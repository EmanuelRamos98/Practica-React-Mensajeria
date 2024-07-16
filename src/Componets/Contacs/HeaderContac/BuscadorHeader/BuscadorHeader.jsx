import React, { useState } from 'react'

const BuscadorHeader = () => {
    const [input, setInput] = useState(false)
    const handleClick = ()=> setInput(!input)
    
    return (
        <div>
            <button onClick={handleClick}>Buscar</button>
            {input &&  <input type="text" />}
        </div>
    )
}

export default BuscadorHeader