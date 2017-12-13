const TOGGLE_LEFT_SIDEBAR = 'TOGGLE_LEFT_SIDEBAR'

export const defaultState = {
  leftSidebar: {
    open: true //false
  }
}

export function ui(state = defaultState, action) {
  switch(action.type) {
    case TOGGLE_LEFT_SIDEBAR: 
      return {
        ...state,
        leftSidebar: {
          ...state.leftSidbar,
          open: !state.leftSidebar.open
        }
      }
    default:
      return state
  }
}