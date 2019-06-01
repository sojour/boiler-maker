import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <div className='example'>Hellopooo World</div>
    <p>Hi</p>
  </Provider>,
  document.getElementById('app')
)
