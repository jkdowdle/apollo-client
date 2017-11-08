import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { usersFeedQuery, UsersQuery } from './AllUsers'

const AddUserMutation = gql`
  mutation AddUser($input: UserInput!) {
    addUser(input: $input) {
      id
      firstName
      age
    }
  }
`

export class AddUser extends React.Component {
  input = {
    firstName: '',
    age: ''
  }

  updateForm = event => {
    const target = event.target
    const name = target.name
    const value = target.value

    this.input[name] = value
  }

  render() {
    const props = this.props
    return (
      <div>
        <h2>Add User</h2>
        <input type="text" name="firstName" onChange={this.updateForm} />
        <br />
        <br />
        {<input type="number" name="age" onChange={this.updateForm} />}
        <br />
        <br />
        <button onClick={props.addUser.bind(null, this.input)}>Add</button>
      </div>
    )
  }
}

const update = (store, { data: { addUser } }) => {
  const data = store.readQuery({ query: UsersQuery, variables: { cursor: null } })
  data.users.push(addUser)
  store.writeQuery({ query: UsersQuery, data })

  // const data = store.readQuery({ query: UsersQuery, variables: { cursor: null } })
  // data.users.unshift(addUser)

  // store.writeQuery({ query: UsersQuery, data })
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

export default graphql(AddUserMutation, {
  props
})(AddUser)
