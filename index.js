import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Exporting an object containing all of our models

module.exports = {
    Trip: require("./Trip"),
    Expense: require("./Expense")
  };

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
