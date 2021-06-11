  
import "./App.css";
import React, { useState } from "react";

import Form from "./components/Form.jsx";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const handleForm = (userInput) => {
    setTodoItems([...todoItems, userInput]);
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <Form handleForm={handleForm} />
      <ul>
        {todoItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;