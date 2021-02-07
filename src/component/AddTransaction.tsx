import React, { useState,useContext } from "react";
import { Globalcontext } from "../context/GlobalState";


const AddTransaction = () => {
    const [text, settext] = useState<string>('');
    const [amount, setamount] = useState<number>(0)
    const {addItem}:any =useContext(Globalcontext)

    const onSubmit = (e:any)=>{
        e.preventDefault()
        const newTransaction={
            id: Math.floor(Math.random()*100),
            text,
            amount:Number(amount)
        }
        addItem(newTransaction)
        settext('')
        setamount(0)
    }

    return (
        <>
        <h3>Add new Transaction</h3>
        <form onSubmit={onSubmit}>  
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} required onChange={(e:any) => { settext(e.target.value) }} placeholder="Enter Text ..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Text</label><br />
                <input type="number" value={amount} required onChange={(e:any) => { setamount(e.target.value) }} placeholder="Enter Amount ..." />
            </div>
            <button className="btn">Add Transaction</button>
        </form>
    </>
    )
}

export default AddTransaction
