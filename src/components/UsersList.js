import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import AddUser from './AddUser'
import User from './User'
import SearchUsers from './SearchUsers'

const SearchUsersQuery = gql`
  query SearchUsersQuery($input: SearchUser) {
    searchUsers(input: $input) {
      id
      firstName
      age
    }
  }
`

export const UsersQuery = gql`
  query UsersQuery {
    users {
      id
      firstName
      age
    }
  }
`

export const usersFeedQuery = gql`
  query UsersFeedQuery($cursor: String) {
    usersFeed(cursor: $cursor) @connection(key: "usersFeed") {
      cursor
      users {
        id
        firstName
        age
      }
    }
  }
`

export const UsersList = ({ data, ...rest }) => {

  if (data.loading) {
    return 'loading'
  }

  // console.log('data', data)

  const users = data.users || data.searchUsers || []

  return (
    <div>
      <h1>Users List</h1>
      <AddUser />

      <SearchUsers />
      
      <hr />
      {users.map(({ id, ...props }) => <User key={id} {...props} id={id} />)}
    </div>
  )
}
/* <button onClick={rest.loadOlder}>Fetch More</button> */

const options = (props) => ({
  variables: { input: { searchTerm: 'a' } },
  // errorPolicy: 'all'
})

export const props = ({ data, ...rest }) => {
  return {
    data,
    loadOlder() {
      return data.fetchMore({
        variables: {
          cursor: data.usersFeed.cursor
        },
        updateQuery(previousResult, { fetchMoreResult: { usersFeed } }) {
          const { usersFeed: { users: previous }} = previousResult
          const { users: response } = usersFeed

          return {
            usersFeed: {
              ...usersFeed,
              users: [
                // ...previous,
                ...response,
              ]
            }
          }
        }
      })
    }
  }
}

export default graphql(UsersQuery, {
  options,
  props
})(UsersList)