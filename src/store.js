import { createStore, combineReducers } from 'redux'

import usersReducer from './state/users'

const rootReducer = combineReducers({
  users: usersReducer
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
