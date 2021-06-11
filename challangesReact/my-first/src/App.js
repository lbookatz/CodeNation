import "./App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [todoItems, setTodoItems] = useState([
    { value: "Milk", completed: false },
    { value: "Butter", completed: false },
  ]);
  const [darkMode, setDarkMode] = useState(true);

  const handleForm = (userInput) => {
    const newTodo = {
      value: userInput,
      completed: false,
    };
    setTodoItems([...todoItems, newTodo]);
  };

  const handleEdit = (index) => {
    let tempItems = [...todoItems];
    tempItems[index].completed = !tempItems[index].completed;
    setTodoItems(tempItems);
    // console.log(todoItems[index]);
  };

  return (
    <StyledWrapper darkMode={darkMode}>
      <Title>To-Do App</Title>
      <Form handleForm={handleForm} />
      <List handleEdit={handleEdit} items={todoItems} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Odibee", Tahoma, Geneva, Verdana, sans-serif;
  color: blueviolet;
  font-size: 3em;
`;

export default App;