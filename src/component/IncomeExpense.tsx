import React,{useContext} from 'react';
import { Globalcontext } from "../context/GlobalState";


const IncomeExpense = () => {
    const {transaction} :any = useContext(Globalcontext);

    const Income = () => {
        let incomeamount = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount > 0) {
                incomeamount += transaction[i].amount
            }
        }
        return incomeamount
    }

    const Expense = () => {
        let expenseamount = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount < 0) {
                expenseamount += transaction[i].amount
            }
        }
        return Math.abs(expenseamount)
    }

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{Income()}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-{Expense()}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
