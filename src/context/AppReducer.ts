import {  actionType, initalType } from "./ValueType";

export const Appreducer = (state: initalType, action: actionType) => {
    switch (action.type) {
        case "Delete-Item":
            return {
                ...state,
                transaction: state.transaction.filter((trans: any) => trans.id !== action.payload),
            };
        case "Add-Item":
            return {
                ...state,
                transaction: [action.payload, ...state.transaction],
            };
        default:
            return state;
    }
}