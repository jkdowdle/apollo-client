import React from 'react'

import UsersList from './UserList.container'
import UserSearch from './UserSearch.container'

export const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <UserSearch />
      <UsersList />
    </div>
  )
}

export default Users