import { createAsyncDuck } from '../createAsyncDuck'

import { createAsyncActionAdd as createAsyncActionAddSnackbar } from './snackbars'

import { getUsers as getUsersAPICall } from '../api'

export const {
  actionTypes,
  actionCreators,
  selector,
  reducer
} = createAsyncDuck({
  duckName: 'getUsers',
  asyncFunction: getUsersAPICall,
  callbackResolved: ({ dispatch }) => {
    dispatch(createAsyncActionAddSnackbar('Successfully loaded users!'))
  },
  callbackRejected: ({ dispatch }) => {
    dispatch(createAsyncActionAddSnackbar('Error occurred!'))
  },
  callbackFinally: ({ dispatch }) => {
    dispatch(createAsyncActionAddSnackbar('Data fetching done!'))
  }
})

export default reducer
