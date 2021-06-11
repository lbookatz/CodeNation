  
import React, { useState } from "react";
import styled from "styled-components";

const Form = ({ handleForm }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm(userInput);
    setUserInput("");
  };

  const isDisabled = userInput.length === 0;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <StyledButton type="submit" disabled={isDisabled}>
        Submit
      </StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  background-color: pink;
  padding: 5px;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: #ff9faf;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`;

const StyledInput = styled.input`
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  border: none;
`;

export default Form;