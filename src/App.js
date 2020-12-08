import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Form from './containers/Form/Form';
import List from './containers/List/List';
import AppProvider from './Context';

const App = () => {
   let [toggleVisibility, setToggleVisibility] = useState(true);

   const handleToggleVisibility = () => {
      setToggleVisibility(prev => !prev);
   }

   const text = toggleVisibility ? 'Schowaj' : 'Pokaż';

   return (
      <AppProvider>
         <AppStyle className="App">
               <TitleStyle>Lista zakupów</TitleStyle>
               <ButtonToggle onClick={handleToggleVisibility}>{text}</ButtonToggle>
               {toggleVisibility ? <Form /> : null}
               <List />
            
         </AppStyle>
      </AppProvider>
   );
}

const ButtonToggle = styled.button`
   outline: none;
	align-self: baseline;
	text-align: left;
	border: none;
	background-color: transparent;
	color: #fff9f9a3;
	cursor: pointer;
	width: 80%;
	margin: 0 auto 10px auto;
   text-shadow: 0 0 5px black;
`;

const AppStyle = styled.main`
   text-align: center;
   background-color: #282c34;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 5%;
   font-size: calc(10px + 2vmin);
   color: white;
   min-height: 100vh;
   overflow: hidden;
`;

const TitleStyle = styled.h1`
   padding: 15px 0 35px;
   font-weight: 400;
`;

export default App;
