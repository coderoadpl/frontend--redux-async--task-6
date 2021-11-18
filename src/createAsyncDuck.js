import { createAsyncActionAdd as createAsyncActionAddSnackbar } from './state/snackbars'

export const createAsyncDuck = ({ duckName, asyncFunction }) => {
  const SET = `${duckName}/SET`
  const START = `${duckName}/START`
  const STOP = `${duckName}/STOP`
  const ERROR = `${duckName}/ERROR`

  const createAsyncAction = (...params) => async (dispatch, getState) => {
    dispatch(createActionStart())
    try {
      const users = await asyncFunction(...params)
      dispatch(createActionSet(users))
      dispatch(createAsyncActionAddSnackbar('Successfully loaded users!'))
    } catch (error) {
      dispatch(createActionError(error))
      dispatch(createAsyncActionAddSnackbar('Error occurred!'))
    }
    dispatch(createActionStop())
  }

  const createActionSet = (data) => ({
    type: SET,
    payload: { data }
  })
  const createActionStart = () => ({
    type: START
  })
  const createActionStop = () => ({
    type: STOP
  })
  const createActionError = (error) => ({
    type: ERROR,
    payload: { error }
  })

  const selector = (state) => state[duckName]

  const initialState = {
    value: null,
    error: null,
    loading: false
  }

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET:
        return {
          ...state,
          value: action.payload.data
        }
      case START:
        return {
          ...state,
          loading: true,
          value: initialState.value,
          error: initialState.error
        }
      case STOP:
        return {
          ...state,
          loading: initialState.loading
        }
      case ERROR:
        return {
          ...state,
          error: action.payload.error
        }
      default:
        return state
    }
  }

  return {
    actionTypes: {
      SET,
      START,
      STOP,
      ERROR
    },
    actionCreators: {
      set: createActionSet,
      start: createActionStart,
      stop: createActionStop,
      error: createActionError,
      async: createAsyncAction,
      [duckName]: createAsyncAction
    },
    selector,
    reducer
  }
}
