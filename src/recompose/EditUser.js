import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { usersList } from './AllUsers'

const input = withState('input', 'setInput', ({ firstName, age }) => ({ firstName, age }))
const updateInput = ({ input, setInput }) => ({ target: { name, value } }) => setInput({ ...input, [name]: value })

const updateUser = ({ updateUser, input, id, toggleEdit }) => () => {
  return updateUser({ ...input, id })
    .then((res) => toggleEdit && toggleEdit())
}

const handlers = withHandlers({
  updateInput,
  updateUser
})

export const EditUserComponent = ({ toggleEdit, updateInput, input: { firstName, age }, deleteUser, updateUser }) => {
  return (
    <div>
      <input type="text" name="firstName" onChange={updateInput} value={firstName} /> 
      <input type="text" name="age" onChange={updateInput} value={age} /> 
      - <button onClick={updateUser}>Update</button>
      - <button onClick={toggleEdit}>Cancel</button>
      - <button onClick={deleteUser}>Delete User</button>
    </div>
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

const props = ({ mutate, ownProps: { id, ...data } }) => {
  return {
    deleteUser() {
      return mutate({
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
    updateUser({ id, ...input }) {
      return mutate({
        variables: { id, input }
      })
    }
  }
}

const mutationTwo = graphql(
  updateUserMutation,
  { props: propsTwo }
)

const EditUser = compose(
  input,
  mutation,
  mutationTwo,
  handlers,
)(EditUserComponent)

export default EditUser