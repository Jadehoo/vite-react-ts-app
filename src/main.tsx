import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import "./App.css";
// import App from './App'
import Router from "./router"

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
