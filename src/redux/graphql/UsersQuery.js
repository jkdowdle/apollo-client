import gql from 'graphql-tag'

export const UsersQuery = gql`
  query UsersQuery {
    users {
      id
      firstName
      age  
    }
  }
`

export default UsersQuery