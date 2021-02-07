import React,{ useContext} from "react"
import { Globalcontext } from "../context/GlobalState";

const Balance = () => {
   const {transaction} :any = useContext(Globalcontext);

   const total = ()=>{
       let totalAmount:number =0
       for (let i =0; i<transaction.length;i++){
           totalAmount+=transaction[i].amount;
       }
       return totalAmount;
   }
    return (
        <>
            <h3>Balance</h3>
            <h2>${total()} </h2>
        </>
    )
}

export default Balance
