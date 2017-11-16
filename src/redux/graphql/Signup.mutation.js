import gql from 'graphql-tag'

export const Signup = gql`
  mutation Signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      id
      email
      jwt
    }
  }
`

export default Signup