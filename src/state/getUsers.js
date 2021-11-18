import { createAsyncDuck } from '../createAsyncDuck'

import { getUsers as getUsersAPICall } from '../api'

export const {
  actionTypes,
  actionCreators,
  reducer
} = createAsyncDuck({
  duckName: 'getUsers',
  asyncFunction: getUsersAPICall
})

export default reducer
