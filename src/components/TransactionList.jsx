import React, { useContext } from 'react'
import {DataContext} from '../context/userContext.jsx'

const TransactionList = () => {
  const context=useContext(DataContext);
  // console.log(context.transitions);
  const trans=context.transitions
console.log(trans);
  const deletee=context.deleteTransaction;
  console.log(deletee);
  
  return (
    <div className='history'>
      
      <h3>History</h3>
      <div className='signn'>
    
      <div className='transaction'>
      {trans.map(transaction=>(
        
 <div className={transaction.amount<0?'history-cash-minus': 'history-cash-plus'} key={transaction.id}  >
   <button className='btn' onClick={()=> deletee(transaction.id)}>
  x
 </button>
 <div>
  
     {transaction.text}
 </div>

 <div className='hi'>
 { transaction.amount< 0 ? '-' :'+'}${ Math.abs(transaction.amount)}

 </div>
</div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default TransactionList
