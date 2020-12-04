import React from 'react';
import styled from 'styled-components';

const Item = ({ value }) => {
   return (

      <Label>
         <Input type="checkbox" /> {value}
      </Label>
   );
}
const Label = styled.label`
   display: block;
   text-align: left;
   cursor: pointer;
   margin: 15px 0;
`;

const Input = styled.input`
   font-size: 0.4rem;
   text-transform: capitalize;
`;

export default Item;

