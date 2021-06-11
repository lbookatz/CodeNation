import React, { useState } from 'react'

const RemoveNumbers = () => {
    const [numbers, setNumber] = useState([1, 2, 3, 4, 5,8])

    const removeHandler = (index,num) => {
      let storedNums = [...numbers]
      storedNums.splice(index,num)
      setNumber(storedNums)
    }

    const addHandler = () => {
      let storedNums = [...numbers]
      console.log(storedNums)
      storedNums.push(storedNums[storedNums.length -1] + 1)
      setNumber(storedNums)
    }

    return (
      <div>
       {numbers.map((number, index) => {
         return <h1 key={index} onClick={() => {removeHandler(index,2)}}>{number}</h1>
       })}
       <button onClick={removeHandler}>remove number</button>
       <button onClick={addHandler}>add number</button>
      </div>
    )
  };


export default RemoveNumbers;
