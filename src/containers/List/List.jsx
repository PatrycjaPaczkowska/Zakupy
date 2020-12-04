import React, { useContext } from 'react';
import Item from './Item';
import { Context } from '../../Context';
import styled from 'styled-components';

const List = () => {

   const {items, dispatch} = useContext(Context);

   const list = items[0]?.split(")");

   const listItems = list?.map((item, id) => <Item key={id} value={item} />)

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