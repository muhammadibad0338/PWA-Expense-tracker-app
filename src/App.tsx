import React from 'react';
import './App.css';
import { GlobalProvider } from '././context/GlobalState';
import Header from './component/Header';
import Balance from './component/Balance';
import IncomeExpense from './component/IncomeExpense';
import TransactionList from './component/TransactionList';
import AddTransaction from './component/AddTransaction';
import {requestPermission} from './firebaseServise';

function App() {
  requestPermission();
  return (
    <GlobalProvider>
      <div className="App">
        <Header/>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>

  );
}

export default App;
