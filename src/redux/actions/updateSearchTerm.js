import { UPDATE_SEARCH_TERM } from './types'

export const updateSearchTerm = ({ target: { value, name = 'searchTerm' }}) => {
  return ({
  type: UPDATE_SEARCH_TERM,
  value,
  name
})}