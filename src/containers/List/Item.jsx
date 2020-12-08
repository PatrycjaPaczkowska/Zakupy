import React from 'react';
import styled from 'styled-components';
const Item = ({ value, textToShow, handlerDelButton }) => {

   const handleDeleteTask = () => {
      handlerDelButton({
         value,
         type: 'DELETE_ONE'
      });
   }

   return (
      <Label>
         <input type="checkbox" /> {textToShow}
         <ButtonSmall onClick={handleDeleteTask}>Usuń</ButtonSmall>
      </Label>
   );
}
const Label = styled.label`
   display: block;
   text-align: left;
   cursor: pointer;
   margin: 15px 0;
`;

const ButtonSmall = styled.button`
   background-color: white;
     border-radius: 3px;
     border: 0;
     color: #2196F3;
     box-shadow: 0 3px 5px 2px #0000002e;
     cursor: pointer;
     font-size: 0.6rem;
     min-height: 10px;
     padding: 5px 10px;
     margin: 0 10px;
`;

export default Item;

