import React from 'react'

const Child=({changeText}) =>{
  return (
    <div className='child'>
      
        <h3>Child Component</h3>
        <input type='text' onChange={(e)=>{changeText(e.target.value)}} />
    </div>
  )
}
export default Child;