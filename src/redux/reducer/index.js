import { UPDATE_SEARCH_TERM } from '../actions'

const defaultState = {
  searchTermInput: {
    searchTerm: '',
    orderBy: '',
  }
}

export const users = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
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
