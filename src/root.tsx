import { combineEpics } from 'redux-observable';
import {reducer} from ".//reducers"

export const rootEpic = combineEpics(

);

export const rootReducer = reducer