import React, { useContext } from 'react'
import { Globalcontext } from "../context/GlobalState";

const Transaction = ({transaction}:any) => {
    const { deleteItem }: any=useContext(Globalcontext)
    
   const sign = transaction.amount<0 ?'-' :'+'
    return (
        <li className={transaction.amount< 0 ?'minus':'plus'}>
            {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=>deleteItem(transaction.id)} className="delete-btn" >X</button>
        </li>
    )
}
export default Transaction