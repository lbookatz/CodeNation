  
import styled from "styled-components";

const Item = ({ item, index, handleEdit }) => {
  return (
    <StyledItem completed={item.completed} onClick={() => handleEdit(index)}>
      {item.value}
    </StyledItem>
  );
};

const StyledItem = styled.li`
  border: 2px solid;
  border-color: ${(props) => (props.completed ? "green" : "pink")};
  background-color: ${(props) => props.completed && "#00800031"};
  text-decoration: ${(props) => props.completed && "line-through"};
  border-radius: 5px;
  padding: 5px;
  margin: 5px 0;
  width: 200px;
  cursor: pointer;
`;

export default Item;