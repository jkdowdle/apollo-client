import React from 'react'
import { compose, branch, renderComponent, withState, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { usersList } from './AllUsers'

const edit = withState('edit', 'setEdit', false)

const toggleEdit = ({ setEdit, edit }) => (event) => {
  setEdit(!edit)
}

const handlers = withHandlers({
  toggleEdit
})

const input = withState('input', 'setInput', ({ firstName, age }) => ({ firstName, age }))
const updateInput = ({ input, setInput }) => ({ target: { name, value }}) => setInput({ ...input, [name]: value })

const updateUser = ({ updateUser, input, id }) => () => {
  // console.log('updating...', avail, input)
  return updateUser({ ...input, id })
} 

const handlersTwo = withHandlers({
  updateInput,
  updateUser
})

export const EditUserComponent = ({ toggleEdit, updateInput, firstName, deleteUser, updateUser, ...props }) => {
  console.log()
  return (
    <div>
      <input type="text" name="firstName" onChange={updateInput} value={firstName} />
       - <button onClick={updateUser}>Update</button>
       - <button onClick={toggleEdit}>Cancel</button>
       - <button onClick={deleteUser}>Delete User</button>
    </div>
  )
}

const EditUser = compose(
  input,
  handlersTwo
)(EditUserComponent)

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

export const deleteUserMutation = gql`
  mutation DeleteUser($input: Id!) {
    deleteUser(input: $input) {
      id
      firstName
      age
    }
  }
`

const optimisticResponse = (input) => ({
  __typename: 'Mutation',
  deleteUser: {
    ...input
  }
})

const update = (proxy, { data: { deleteUser } }) => {
  const data = proxy.readQuery({ query: usersList })
  const index = data.users.findIndex((user) => user.id === deleteUser.id)
  data.users.splice(index, 1)
  proxy.writeQuery({ query: usersList, data })
}

const props = ({ mutate, ownProps: { id, ...data }}) => {
  return {
    deleteUser() {
      mutate({ 
        variables: { input: { id } },
        update,
        optimisticResponse: optimisticResponse({ id, ...data })
      })
    }
  }
}

const mutation = graphql(
  deleteUserMutation,
  { props }
)

export const updateUserMutation = gql`
  mutation UpdateUser($id: Int!, $input: UserInput) {
    updateUser(id: $id, input: $input) {
      id
      firstName
      age
    }
  }
`

const propsTwo = ({ mutate }) => {
  return {
    updateUser() {
      mutate({
        variables: { id: 2, input: { firstName: 'Emily Ann', age: 27 } }
      })
    }
  }
}

const mutationTwo = graphql(
  updateUserMutation,
  { props: propsTwo }
)

const User = compose(
  edit,
  handlers,
  mutation,
  mutationTwo,
  displayEditing,
)(UserComponent)

export default User