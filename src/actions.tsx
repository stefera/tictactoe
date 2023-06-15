import { Payload } from "./types";

const createAction = (type:string) => {
  const action = (payload:any) => ({
    type,
    payload,
  });
  action.type = type;
  return action;
};

///payload type any for now, but always pass an object

export const startGame = createAction("startGame"); // payload : {newName}

export const playMove = createAction("playMove"); // need to send a payload of {userId, piece, position}

export const endGame = createAction("endGame"); // payload : {userId}

export const joinGame = createAction("joinGame"); // payload : {userId, newName}

export const changeName = createAction("changeName"); // payload : {userId, newName}
