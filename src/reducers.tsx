import { Action, InitialState } from "./types";

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

const rootReducer = (state:InitialState = initialState, action:Action) => {
  switch (action.type) {
    case "startGame": {
    }
    case "playMove": {
    }
    case "endGame": {
    }
    case "joinGame": {
    }
    case "changeName": {
    }
  }
};
