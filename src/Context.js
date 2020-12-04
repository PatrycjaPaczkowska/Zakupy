//In this section I used Context and other Hooks
import React, { createContext, useEffect, useReducer } from 'react';

export const Context = createContext();

const ADD = 'ADD';
const FETCH = 'FETCH';

//Init value
let itemsDef;

const changeStatus = (items, action) => {
   console.log(action.items);
   return itemsDef = action.items;
}

const AppProvider = ({ children }) => {
   //Reducer
   const dataReducer = (items, action) => {

      switch (action.type) {
         case ADD:
            return changeStatus(items, action);
         case FETCH:
            return action.data;
         default:
            throw new Error("No action was found in moneyReducer")
      }
   }

   const [items, dispatch] = useReducer(dataReducer, [], () => {
      const localData = localStorage.getItem('items');
      return localData ? JSON.parse(localData) : [];
   });

   //Download value
     useEffect(() => {
      localStorage.setItem("items", JSON.stringify(items))
   }, [items]);

   return (
      <Context.Provider value={{ items, dispatch }} >
         {children}
      </Context.Provider>
   )
}

export default AppProvider;