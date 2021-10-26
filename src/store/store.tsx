import {createStore, applyMiddleware, combineReducers} from "redux";

import thunkMiddleware from 'redux-thunk'
import thunk from 'redux-thunk'

import { composeWithDevTools } from "redux-devtools-extension";


import Reducer from "./reducer";

export const store = createStore(Reducer,applyMiddleware(thunk))

