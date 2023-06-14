export type Action =  {
    type:string,
    payload:object
}

export type InitialState = {
    playerOne:Player,
    playerTwo:Player,
    board:Square[]
}

type Player = {
    id:number
    name:string,
}

type Square = (null | 1 | 2)