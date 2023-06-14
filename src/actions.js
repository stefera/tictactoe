const createAction = (type) => {
  const action = (payload) => ({
    type,
    payload,
  });
  action.type = type;
  return action;
};

export const playMove = createAction("movePlayed");
