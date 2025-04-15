import React, { useContext } from 'react'
import {DataContext} from '../context/userContext.jsx'
const Balance = () => {
   const context=useContext(DataContext);
   // console.log(context.transitions);
   const trans=context.transitions
 console.log(trans);
  
 const amounts=trans.map((transaction)=>(
  transaction.amount
 ));

 const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)

console.log(amounts);





  return (
    <div className='balance'> 
      <h3>YOUR BALANCE</h3>
      <h2>
        {total<0? '-' : '+'}${Math.abs(total)}</h2>
    </div>
  )
}

export default Balance
