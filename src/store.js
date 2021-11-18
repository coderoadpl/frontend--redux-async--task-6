import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import getUsersReducer from './state/getUsers'
import snackbarsReducer from './state/snackbars'

const rootReducer = combineReducers({
  getUsers: getUsersReducer,
  snackbars: snackbarsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
