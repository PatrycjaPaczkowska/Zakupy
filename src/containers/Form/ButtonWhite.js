import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
     background-color: white;
     border-radius: 3px;
     border: 0;
     color: #2196F3;
     height: 40px;
     padding: 0 30px;
     margin: 10px;
     box-shadow: 0 3px 5px 2px #0000002e;
     cursor: pointer;
     font-size: 1rem;
     width: 80%;
`;

const ButtonWhite = ({children, onClick}) => {
   return ( 
      <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    );
}
 
export default ButtonWhite;