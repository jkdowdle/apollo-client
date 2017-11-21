import gql from 'graphql-tag'

export const CurrentUser = gql`
  query CurrentUser {
    currentUser {
      id
      email
    }
  }
`

export default CurrentUser