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

export type Payload = {
    id?:number
    newName?:string,
    position?:number,
    move?:Square
}

type Square = (null | 1 | 2) // null is no move, 1 is noughts, 2 is crosses