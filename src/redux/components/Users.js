import React from 'react'

import UsersList from '../containers/UsersList'


export const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <UsersList />
      {/* <UsersSearch />
      <UsersFillter /> */}
    </div>
  )
}

export default Users