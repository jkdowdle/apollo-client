import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// import { UsersQuery } from './UsersList'

// const removeUser = gql`
//   mutation DeleteUser($input: Id!) {
//     deleteUser(input: $input) {
//       id
//       firstName
//       age
//     }
//   }
// `

export const User = ({ firstName, age, removeUser }) => {
  return (
    <div>
      {firstName} - {age} <button onClick={removeUser}>x</button>
    </div>
  )
}

// const update = (store, { data: { deleteUser } }) => {
//   const data = store.readQuery({ query: UsersQuery, variables: { cursor: null } })
//   const index = data.users.findIndex(({ id }) => id === deleteUser.id)
//   data.users.splice(index, 1)
//   store.writeQuery({ query: UsersQuery, data })
// }

// const optimisticResponse = (input) => ({
//   __typename: 'Mutation',
//   deleteUser: {
//     __typename: 'User',
//     id: -1,
//     firstName: null,
//     age: null
//   }
// })

// const props = ({ mutate, ownProps: { id } }) => ({
//   removeUser(action) {
//     return mutate({
//       variables: { input: { id }},
//       update, 
//       optimisticResponse: optimisticResponse(action) 
//     })
//   }
// })

// export default graphql(removeUser, {
//   props
// })(User)