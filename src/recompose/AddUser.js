import React from 'react'
import { withState, withHandlers, pure, compose } from 'recompose'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import { usersList } from './AllUsers'

const defaultState = { firstName: '', age: '' }

const form = withState('form', 'setForm', defaultState)
const updateForm = ({ form, setForm }) => ({ target: { name, value }}) => setForm({ ...form, [name]: value })

const addUser = ({ addUser, form, setForm }) => (event) => {
  event.preventDefault()
  return addUser({ ...form })
    .then((res) => setForm({ firstName: '', age: '' }))
}

const handlers = withHandlers({
  updateForm,
  addUser
})

const AddUserPure = ({ updateForm, form: { firstName, age }, addUser, ...props }) => {
  return (
    <form onSubmit={addUser}>
      <h2>New User</h2>

      <input
        placeholder="User's name"
        type="text"
        name="firstName"
        value={firstName}
        onChange={updateForm}
      />

      <br />
      <br />

      <input
        type="number"
        name="age"
        value={age}
        onChange={updateForm}
      />

      <button type="submit">Go</button> 

    </form>
  )
}

const addUserMutation = gql`
  mutation AddUser($input: UserInput!) {
    addUser(input: $input) {
      id
      firstName
      age
    }
  }
`

const update = (store, { data: { addUser } }) => {
  const data = store.readQuery({ query: usersList, variables: {} })
  data.users.unshift(addUser)
  store.writeQuery({ query: usersList, data })
}

const optimisticResponse = (input) => ({
  __typename: 'Mutation',
  addUser: {
    __typename: 'User',
    id: -1,
    optimistic: true,
    ...input
  }
})

const props = ({ mutate }) => ({
  addUser: (input) => mutate({ 
    variables: { input }, 
    update, 
    optimisticResponse: optimisticResponse(input) 
  })
})

const mutation = graphql(
  addUserMutation,
  { props }
)

const AddUser = compose(
  mutation,
  form,
  handlers,
  pure
)(AddUserPure)

export default AddUser