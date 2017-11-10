import React from 'react'
import { compose } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'



export const UserDetailComponent = ({ data: { loading, user: { firstName } } }) => {
  if (loading) {
    return "Loading..."
  }
  
  // console.log(firstName && firstName)
  /* <h2>{firstName && firstName}</h2> */
  /* <b>{age && age}</b> */
  return (
    <div>
      <code>{JSON.stringify(firstName)}</code>
    </div>
  )
}

const getUser = gql`
  query User($input: Id!) {
    user(input: $input) {
      id
      firstName
      age
    }
  }
`

const options = ({ match: { params: input } }) => {
  console.log('input', input)
  return {
    variables: { input }
  }
}

export const data = graphql(
  getUser,
  { options }
)

export const UserDetail = compose(
  data
)(UserDetailComponent)

export default UserDetail