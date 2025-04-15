import './index.css'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
// import { useContext } from 'react'
import { DataContext } from './context/userContext'

function App() { 

// const data=useContext(DataContext);
  return (
    <div className='container'>
   <Header/>
   <Balance/>
   <IncomeExpenses/>
   <TransactionList/>
   <AddTransaction/>


   </div>
  )
}

export default App
