import { UPDATE_SEARCH } from '../actions'

const defaultState = {
  searchTermInput: {
    searchTerm: '',
    orderBy: '',
  }
}

export const users = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      console.log('action', action)
      return {
        ...state,
        searchTermInput: {
          ...state.searchTermInput,
          [action.name]: action.value
        }
      }
    default:
      return state
  }
}

// export defau
