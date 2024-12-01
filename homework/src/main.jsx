import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

const app = React.createElement(App);

createRoot(document.getElementById('root')).render(app)
