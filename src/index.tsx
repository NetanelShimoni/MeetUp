import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {EUsermode, Istore} from "./store/interfacses";
import IMeetUp from "./interfaces/IMeetUp";
import IUser from "./interfaces/IUser";
import {store} from "./store/store";




// const store =  createStore(combineReducers({main:reducer})) ;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
);


