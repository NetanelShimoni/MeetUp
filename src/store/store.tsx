import {createStore, applyMiddleware, combineReducers} from "redux";

import thunkMiddleware from 'redux-thunk'
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";


import {UserReducer} from "./userReducer";

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunkMiddleware)))

