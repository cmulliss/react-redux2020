import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import './index.css'
import App from './components/App'
import reducers from './reducers'

// declare as a variable in advance, then pass in to store prop
const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// wiring up redux-thunk, import it plus applyMiddleware, and add it as second arg to createStore.
