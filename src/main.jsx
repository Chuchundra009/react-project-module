import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './style/index.scss'
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
