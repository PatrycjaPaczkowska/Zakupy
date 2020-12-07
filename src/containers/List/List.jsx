import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../Context';
import Item from './Item';

const List = () => {
   // eslint-disable-next-line
   const { items, dispatch } = useContext(Context);

   const listItems = items.map((item, id) => {
      const isParenthesis = item.indexOf('(');
      let newText;
      if(isParenthesis > 0){
         newText =`${item})`;
      } else {
         newText = item;
      }
      
      return item && <Item key={id} value={item} textToShow={newText} handlerDelButton={dispatch} />
   });

   return (
      <ListItemsStyle>
         <p>Pozostało: {listItems.length} </p>
         {listItems}
      </ListItemsStyle>
   );
}

const ListItemsStyle = styled.section`
   width: 80%;
   & > p {
      margin: 20px 0;
   }
`;

export default List;