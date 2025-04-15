import React, { createContext, useReducer } from 'react'
// import AppReducer from './AppReducer'
// import  {createContext } from "react"
export const initialState={
    transitions:[
        // {id:1,text:"flower",amount:-20},
        // {id:2,text:"books",amount:-200},
        // {id:3,text:"income",amount:+300}
    ]
}

function AppReducer(state,action){
switch(action.type){
  case 'transition':
 return {
  transitions:state.transitions
 } 
 case 'deleteTransaction':
  return{
    ...state,
    transitions: state.transitions.filter(transition=> transition.id != action.payload)
  }
  case 'addTransaction' :
    return{
      ...state,
      transitions: [action.payload, ...state.transitions]
      
    }
 default:
  return state; // Always add a default case
}
}

// actions
function transition(){
  dispatch({type:transition});
}
export const DataContext=createContext(initialState);
export const UserContext = (props) => {
    const[state,dispatch]=useReducer(AppReducer,initialState)

    // Actions
function deleteTransaction(id){
  dispatch({
    type: 'deleteTransaction',
    payload: id
  })
}

function addTransaction(transaction){
  dispatch({
    type: 'addTransaction',
    payload: transaction
  })
}
    const userName="komal";
     //we want every component to access username
     

  return (
    <div>
   <DataContext.Provider value={{transitions:state.transitions,name:"komal",deleteTransaction,addTransaction}}>
    {props.children}
   </DataContext.Provider>
      
    </div>
  )
}


