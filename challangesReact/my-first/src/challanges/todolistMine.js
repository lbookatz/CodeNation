import React, { useState } from 'react'

const ToDoList = () => {
    
    const [items, setItems] = useState(["try","or"]);
    const [itemValue, SetItemValue] = useState("");
    

    const onChange =(e) =>{    
        SetItemValue(e.target.value)
    }

    const addItem = () => {
        let storedItems = [...items]
        storedItems.push(itemValue)
        setItems(storedItems)        
    }

    const removeItem = (index) => {
      let storedNums = [...items]
      storedNums.splice(index,1)
      setItems(storedNums)
    }

    return (
        <div>
            <>
                <input type="text" value={itemValue} onChange={onChange}/> 
                <p>{itemValue}</p>
                <button onClick={addItem}>add to list</button>
            </>
        
       {items.map((item, index) => {
            return  (
                <>
                    <h1>{item}</h1>
                    <button onClick={() => removeItem(index)}>hope</button>
                </>
            )
            })
       }
       </div>
    )
  };

export default ToDoList;