import React from 'react'
import { compose, branch, renderComponent  } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import DataLoading from './DataLoading'
import User from './User'

const displayLoadingState = branch(
  ({ data: { loading }}) => loading,
  renderComponent(DataLoading)
)

export const UserDetailComponent = ({ data: { loading, user: { firstName, age, ...props } } }) => <User firstName={firstName} age={age} {...props} detail />

const getUser = gql`
  query User($input: Id!) {
    user(input: $input) {
      id
      firstName
      age
    }
  }
`

const options = ({ match: { params: input } }) => ({
  variables: { input }
})

export const data = graphql(
  getUser,
  { options }
)

export const UserDetail = compose(
  data,
  displayLoadingState
)(UserDetailComponent)

export default UserDetail