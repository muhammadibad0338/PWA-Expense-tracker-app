import React, { useContext } from 'react'
import Transaction from './Transaction'
import { Globalcontext } from "../context/GlobalState";
import {transType} from "../context/ValueType"


const TransactionList = () =>{
    const {transaction}:any = useContext(Globalcontext);
    return(
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
            {transaction.map((transaction:transType,id:number)=>{
                return(
                    <Transaction key={id} transaction={transaction}/>
                )
            })}
            </ul>
        </div>
    )
}
export default TransactionList