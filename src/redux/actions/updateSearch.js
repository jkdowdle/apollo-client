import { UPDATE_SEARCH } from './types'

export const updateSearch = ({ target: { value, name = 'searchTerm' }}) => ({
  type: UPDATE_SEARCH,
  value,
  name
})