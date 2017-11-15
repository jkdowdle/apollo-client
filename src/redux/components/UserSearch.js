import React from 'react'
import { DebounceInput } from 'react-debounce-input'

export const UserSearch = ({ inputVal, handleChange }) => {
  return (
    <div>
      <h3>Search Users</h3>
      <DebounceInput
        minLength={1}
        debounceTimeout={300}
        element={'input'}
        name="searchTerm"
        onChange={handleChange}
      />
      {' '}
      Age: 
      <select name="orderBy" onChange={handleChange}>
        <option value="" defaultValue>Default</option>
        <option value="desc">Highest</option>
        <option value="asc">Lowest</option>
      </select>
    </div>
  )
}

export default UserSearch