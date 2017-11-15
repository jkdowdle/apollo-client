import React from 'react'
import {
  withState,
  withHandlers,
  pure,
  compose
} from 'recompose'

import SearchResults from './SearchResults'

const input = withState('input', 'setSearchTerm', { searchTerm: '' })

const update = ({ setSearchTerm }) => ({ target: { value: searchTerm } }) => setSearchTerm({ searchTerm })

const handlers = withHandlers({
  update
})

const SearchPure = ({ input, update, ...others }) => {
  return (
    <div>
      <h2>Search Users</h2>
      <input type="text" value={input.searchTerm} onChange={update} />
      <SearchResults input={input} />
    </div>
  )
}

const UserSearch = compose(input, handlers, pure)(SearchPure)

export default UserSearch