import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers'

const reducer = combineReducers({
  ...reducers,
})

let middleware = [thunk, createLogger()]

export default function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  )
}
