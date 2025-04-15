import React, { useContext, useState } from 'react'
import {DataContext} from '../context/userContext.jsx'
const AddTransaction = () => {
    const[Text,SetText] = useState('');
    const[Amount,SetAmount]=useState('')
const context=useContext(DataContext);
console.log(context);
const addd=context.addTransaction
console.log(addd);

      function Click(e){
e.preventDefault();

const newTransaction = {
  id: Date.now(), // unique ID
  text: Text,
  amount: +Amount
};

console.log("text",SetText);
console.log("amount",SetAmount);
addd(newTransaction)
SetText('')
SetAmount('')

      }
  return (
    <div className='addTransaction'>
      <h3>Add new Transaction</h3>
      <h4 className='text'>Text</h4>
      <input type="text"  placeholder='Enter Text' value={Text} onChange={(e)=>{
        SetText(e.target.value)
        console.log(e.target.value)
      }} />
      <h4>Amount</h4>
      <h4>(negative-expense,positive-income)</h4>
      <input type="number" value={Amount} onChange={(e)=>{
    SetAmount(e.target.value);
    console.log(e.target.value);
    
      }} />
      <br/>
      <button className='btnn'  onClick={Click}>Add Transaction</button>
    </div>
  )
}

export default AddTransaction
