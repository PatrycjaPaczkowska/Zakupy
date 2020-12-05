import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../Context';
import Item from './Item';

const List = () => {

   const { items, dispatch } = useContext(Context);
   const value = items.join("");

   const isParenthesis = value.indexOf("(");

   const listItems = items.map((item, id) => ( item &&  <Item key={id} value={item} />));

   return (
      <ListItemsStyle>
         {listItems}
      </ListItemsStyle>
   );
}

const ListItemsStyle = styled.section`
   width: 80%;
`;

export default List;