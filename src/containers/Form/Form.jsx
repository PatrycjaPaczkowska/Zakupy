import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Context } from '../../Context';
import ButtonWhite from './ButtonWhite';

const Form = () => {
   const { items, dispatch } = useContext(Context);

   const [text, setText] = useState();
   const handleText = (e) => setText(e.target.value);

   const sendData = (e) => {
      e.preventDefault();

      const przecinek = text.search(',');

      let splitChar = ") ";

      if (przecinek > 0){
         splitChar = ", ";
      }
      
      let items = text.split(splitChar);

      dispatch({
         items,
         type: 'ADD'
      })

      setText("");

   }
   const resetLocalStorage = (e) => {
      e.preventDefault();

      dispatch({
         items: [],
         type: 'ADD'
      })

   }
   return (
      <FormStyle onSubmit={sendData}>
         <TextareaStyle placeholder="Wklej listę po przecinku" value={text} onChange={handleText}></TextareaStyle>
         <ButtonWhite type="submit">Wyślij</ButtonWhite>
         <ButtonWhite onClick={resetLocalStorage}>Wyczyść</ButtonWhite>
      </FormStyle>
   );
}

const FormStyle = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100vw;
   height: auto;
`;

const TextareaStyle = styled.textarea`
   width: 80%;
   min-height: 150px;
   padding: 15px;
   background-color: #978e8e38;
   color: white;
   border: none;
   border-radius: 5px;
   overflow: hidden;
`;

export default Form;