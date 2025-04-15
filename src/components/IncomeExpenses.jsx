import React, { useContext } from 'react'
import { DataContext } from '../context/userContext'

const IncomeExpenses = () => {
  const context=useContext(DataContext)
  const trans=context.transitions;
  console.log(trans);
  const amounts=trans.map((transaction)=>(
    transaction.amount
   ));
   
  console.log(amounts);
  
  // const expenses=amounts.reduce(()=>())
    const expenses=(amounts.filter(item=>item<0)
    .reduce((acc,item)=>(acc+=item),0)*-1).toFixed(2)
  console.log(expenses);

    const income=amounts.filter(item=>item>0)
    .reduce((acc,item)=>(acc+=item),0).toFixed(2)
  console.log(expenses);
  console.log(income);
  
  return (
    <div className='income-expenses'>
      <div className='income'>
        <h3>INCOME</h3>
        <p>${income}</p>
      </div>
      <div className='expenses'>
        <h3>EXPENSES</h3>
        <p> ${expenses} </p>
      </div>
    </div>
  )
}

export default IncomeExpenses
