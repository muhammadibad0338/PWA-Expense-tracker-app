export type transType ={
    id:number,
    text:string,
    amount:number
}
export type initalType = {
    transaction:transType[]
}

export type globalType = {
    transaction : transType[],
    deleteItem : (id:number) => void,
    addItem : (trans:transType) => void
}

export type actionType =
  | { type: "Add-Item"; payload: transType }
  | { type: "Delete-Item"; payload: number }