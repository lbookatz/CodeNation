import React, { useState } from 'react'

const Input = () => {
    const [input, setInput] = useState ("")

    const inputHandler = (event) => {
      setInput(event.target.value)
      
    }

    return (
      <>
        <input type="text" onChange={inputHandler} /> 
        <p>{input}</p>
      </>
    )

    return (
      <div>
        <input type="text" onChange={inputHandler} /> 
        <p>{input}</p>
      </div>
    )
  };


export default Input;
