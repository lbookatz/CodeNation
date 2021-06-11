  
import styled from "styled-components";
import Item from "./ListItem";

const List = ({ items, handleEdit }) => {
  return (
    <StyledList>
      {items.map((item, index) => {
        return (
          <Item item={item} index={index} handleEdit={handleEdit} key={index} />
        );
      })}
    </StyledList>
  );
};

const StyledList = styled.ul`
  /* margin: 0; */
  padding: 0;
  list-style: none;
`;

export default List;