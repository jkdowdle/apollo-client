import React from 'react'
import { pure, compose } from 'recompose'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import UserList from './UserList'

const SearchResultsPure = ({ data: { searchUsers, loading } }) => <UserList loading={loading} users={searchUsers} />

export const searchUsers = gql`
  query searchUsers($input: SearchUser) {
    searchUsers(input: $input) {
      id
      firstName
      age
    }
  }
`

const data = graphql(searchUsers, {
  options: ({ input }) => ({
    variables: { input }
  })
})

const SearchResults = compose(data, pure)(
  SearchResultsPure
)

export default SearchResults
