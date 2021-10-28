import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {EUsermode, Istore} from "./store/interfacses";
import {store} from "./store/store";





ReactDOM.render(

    <Provider store={store}>
        <body dir="rtl">
        <App />
        </body>
    </Provider>


    ,document.getElementById('root')
);


