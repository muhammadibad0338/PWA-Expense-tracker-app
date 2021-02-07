import React,{createContext,useReducer} from "react";
import {initalType,globalType,transType} from './ValueType'
import { Appreducer } from './AppReducer'

let initialstate: initalType ={
    transaction:[
        { id:1 , text:"Flower", amount:-20},
         { id:2 , text:"Salary", amount:300},
         { id:3 , text:"Camera", amount:-40}
        ],
}

export const Globalcontext = createContext<Partial<globalType>>({});

export const GlobalProvider = ({children}:any) =>{
    const [state, dispatch] = useReducer(Appreducer, initialstate)

    let deleteItem = (id:number) =>{
        dispatch({
            type : "Delete-Item",
            payload : id,
        })
    }

    let addItem = (trans:transType)=>{
        dispatch({
            type : "Add-Item",
            payload : trans,
        })
    }

    return(
        <Globalcontext.Provider value={{
            transaction : state.transaction,
            addItem,
            deleteItem,
        }}>
            {children}
        </Globalcontext.Provider>
    )
}