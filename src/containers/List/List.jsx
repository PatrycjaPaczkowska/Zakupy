import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../Context';
import Item from './Item';

const List = () => {
   let listItems;

   const { items, dispatch } = useContext(Context);
   console.log(items);

   const value = items.join("");
   console.log(value);

   const isNawias = value.indexOf("(");
   console.log(isNawias);


   if (isNawias > 0) {
      const list = items[0]?.split(")");
      listItems = list.map((item, id) => <Item key={id} value={item} />);
   } else {
      listItems = items.map((item, id) => <Item key={id} value={item} />);
   }


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