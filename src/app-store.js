import { createStore, combineReducers } from 'redux'

import { users } from './redux/reducer'

import { ui } from './redux/reducer/ui-reducer'

const reducers = combineReducers({
  ui,
  users
})

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
