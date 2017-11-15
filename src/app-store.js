import { createStore, combineReducers } from 'redux'

const users = (state = {}, action) => {
  switch (action.type) {
    case '':
      return state
    default:
      return state
  }
}

const reducers = combineReducers({
  users
})

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
