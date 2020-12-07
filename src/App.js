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
         <div className="App">
            <section className="App-header">
               <ButtonToggle onClick={handleToggleVisibility}>{text}</ButtonToggle>
               {toggleVisibility ? <Form /> : null}
               <List />
            </section>
         </div>
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

export default App;
