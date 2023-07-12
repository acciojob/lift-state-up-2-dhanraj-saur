import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    let [value, setValue] = useState("")
    
    const handleChange = (text) => {
        setValue(text)
    }
    return (

        <div className='parent'>

            <h1>Parent Component</h1>
            <p> {value}</p>
            <Child changeText={handleChange} />
        </div>
    )
}

export default Parent;