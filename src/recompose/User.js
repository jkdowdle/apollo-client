import React from 'react'
import { compose, branch, renderComponent, withState, withHandlers } from 'recompose'
import { Link } from 'react-router-dom'

import EditUser from './EditUser'
import UserInfo from './UserInfo'

const edit = withState('edit', 'setEdit', ({ edit = false }) => edit)

const toggleEdit = ({ setEdit, edit }) => (event) => {
  setEdit(!edit)
}

const handlers = withHandlers({
  toggleEdit
})

const displayEditing = branch(
  ({ edit }) => edit,
  renderComponent(EditUser)
)

const displayUserDetail = branch(
  ({ detail }) => detail,
  renderComponent(UserInfo)
)

export const UserComponent = ({ id, firstName, age, toggleEdit }) => {
  return (
    <li>
      <Link to={`/user/${id}`}>{firstName}</Link> - {age} - <button onClick={toggleEdit}>Edit</button>
    </li>
  )
}

const User = compose(
  edit,
  handlers,
  displayEditing,
  displayUserDetail
)(UserComponent)

export default User