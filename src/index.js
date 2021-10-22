import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

// ? Need to wrap our entire applicatopm wotj ResultContextProvider
import { StateContextProvider } from './contexts/StateContextProvider'

import './global.css'

// Connect this to our index.html
ReactDom.render(
    <StateContextProvider>
        <Router>
            <App/>
        </Router>
    </StateContextProvider>,
    document.getElementById('root')
);
