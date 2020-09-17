import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import App from './App.js';
/*
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';*/
import './App.scss'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
)