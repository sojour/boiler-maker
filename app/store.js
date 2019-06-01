import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from './reducer'
import axios from 'axios'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({ axios }),
    loggingMiddleware
  ))
)

export default store;
