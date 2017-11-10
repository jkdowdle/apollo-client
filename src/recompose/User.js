import React from 'react'
import { compose, branch, renderComponent, withState, withHandlers } from 'recompose'
import { Link } from 'react-router-dom'

import EditUser from './EditUser'

const edit = withState('edit', 'setEdit', false)

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
)(UserComponent)

export default User