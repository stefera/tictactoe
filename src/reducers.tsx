import { createReducer } from "@reduxjs/toolkit";
import { Action, InitialState } from "./types";
import * as actions from "./actions"

const initialState = {
  playerOne: {
    id:1, // by default player with id === 1 is noughts/ circles
    name: "",
  },
  playerTwo: {
    id:2, // by default player with id === 2 is crosses
    name: "",
  },
  board: Array(9).fill(null),
};

// Old way of creating rootReducer

// const rootReducer = (state:InitialState = initialState, action:Action) => {
//   switch (action.type) {
//     case "startGame": {
//     }
//     case "playMove": {
//     }
//     case "endGame": {
//     }
//     case "joinGame": {
//     }
//     case "changeName": {
//     }
//   }
// };

export const reducer = createReducer(initialState,(builder)=>{
  builder
    .addCase(actions.startGame, (state, action)=>{

      state = {...initialState, playerOne:{id:1, name: action.payload.newName}}
      
    })
    //.addCase
})