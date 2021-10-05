import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UseState from "./hooks/use-state/use-state";
import UseReducer from "./hooks/use-reducer/use-reducer";

ReactDOM.render(
  <React.StrictMode>
    {/*<UseState />*/}
    <UseReducer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
