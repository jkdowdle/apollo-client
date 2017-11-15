import React from 'react'
import { compose, pure, branch, renderComponent } from 'recompose'

import DataLoading from './DataLoading'
import User from './User'

const displayLoadingState = branch(
  ({ loading }) => loading,
  renderComponent(DataLoading)
)

export const UsersListPure = ({ users = [] }) => {
  return (
    <ul>
      {users.map(({ id, ...props }) => <User key={id} id={id} {...props} />)}
    </ul>
  )
}

const UsersList = compose(
  displayLoadingState,
  pure
)(UsersListPure)

export default UsersList