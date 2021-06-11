import React, { useState } from 'react'

const Numbers = () => {
    const [numbers, setNumber] = useState([1, 2, 3, 4, 5,8])
    const addHandler = () => {
      let storedNums = [...numbers]
      console.log(storedNums)
      storedNums.push(storedNums[storedNums.length -1] + 1)
      setNumber(storedNums)
    }
    return (
      <div>
       {numbers.map((number, index) => {
         return <h1 key={index}>{number}</h1>
       })}
       <button onClick={addHandler}>add number</button>
      </div>
    )
  };


export default Numbers;
