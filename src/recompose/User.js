import React from 'react'
import { compose, branch, renderComponent, withState, withHandlers } from 'recompose'

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

export const UserComponent = ({ firstName, age, toggleEdit }) => {
  return (
    <li>
      {firstName} - {age} - <button onClick={toggleEdit}>Edit</button>
    </li>
  )
}

const User = compose(
  edit,
  handlers,
  displayEditing,
)(UserComponent)

export default User