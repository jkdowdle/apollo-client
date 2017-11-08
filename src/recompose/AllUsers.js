import React from 'react'
import { compose, pure } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import UserList from './UserList'
import AddUser from './AddUser'

const UsersListPure = ({ data: { users, loading }}) => {
  return (
    <div>
      <h2>Current Users</h2>
      <AddUser />
      <UserList loading={loading} users={users} />
    </div>
  )
}

export const usersList = gql`
  query UsersList {
    users {
      id
      firstName
      age
    }
  }
`

const data = graphql(
  usersList
)

const UsersList = compose(
  data,
  pure
)(UsersListPure)

export default UsersList