import React from 'react'
import ReactDom from 'react-dom'

import App from './App'
import './global.css'

// Connect this to our index.html
ReactDom.render(<App/>, document.getElementById('root'))
