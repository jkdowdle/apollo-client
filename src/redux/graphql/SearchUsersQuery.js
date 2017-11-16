import gql from 'graphql-tag'

export const SearchUsersQuery = gql`
  query SearchUsersQuery($input: SearchUser!) {
    searchUsers(input: $input) {
      id
      firstName
      age
    }
    currentUser {
      id
      email
    }
  }

`

export default SearchUsersQuery