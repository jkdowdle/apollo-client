import { UPDATE_SEARCH, UPDATE_FORM } from '../actions'

export const defaultState = {
  searchTermInput: {
    searchTerm: '',
    orderBy: '',
  },
  registerForm: {
    email: "bb@gmail.com",
    password: "password"
  }
}

export const users = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        ...state,
        searchTermInput: {
          ...state.searchTermInput,
          [action.name]: action.value
        }
      }
    case UPDATE_FORM:
      return {
        ...state,
        [action.formName]: {
          ...state[action.formName],
          [action.name]: action.value

        }
      }
    default:
      return state
  }
}

// export defau
