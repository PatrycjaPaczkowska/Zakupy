import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { Context } from '../../Context';
import ButtonWhite from './ButtonWhite';

const Form = () => {
   // eslint-disable-next-line
   const { items, dispatch } = useContext(Context);
   const ref = useRef("usual");

   const [text, setText] = useState();

   const handleText = (e) => setText(e.target.value);

   const sendData = (e) => {
      e.preventDefault();
      if (!ref.current) return;

      const typeOfList = ref.current.typeOfList

      let operator;

      if (typeOfList === 'usual') operator = ',';
      if (typeOfList === 'diet') operator = ')';

      const notCleanTab = text.split(operator);
      const listItems = notCleanTab.filter(item => item.length > 0);

   
      dispatch({
         items: listItems,
         type: 'ADD'
      })

      setText("");
   }

   const resetLocalStorage = (e) => {
      e.preventDefault();

      dispatch({
         type: 'DELETE',
      })

   }

   const setOption = e => {
      ref.current = { typeOfList: e.target.value };
   }

   return (
      <FormStyle onSubmit={sendData}>

         <TextareaStyle placeholder="Wklej listę po przecinku" value={text} onChange={handleText}></TextareaStyle>
         <RadioStyle onChange={setOption}>
            <label>
               <input
                  name="typeOfList"
                  type="radio"
                  value="diet"
               /> Od motywatora
        </label>
            <label>
               <input
                  name="typeOfList"
                  type="radio"
                  value="usual"
               /> Zwykła lista
        </label>
         </RadioStyle>
         <ButtonWhite type="submit">Dodaj</ButtonWhite>
         <ButtonWhite onClick={resetLocalStorage}>Wyczyść wszystko</ButtonWhite>

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

const RadioStyle = styled.section`
   display: flex;
   flex-direction: column;

   font-size: 1rem;
   margin: 10px 0;

   & > label {
      margin: 5px 0;
   }
`;
export default Form;