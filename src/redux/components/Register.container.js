import { compose } from 'recompose'
import { graphql } from 'react-apollo'

// import { setToken } from '../utility'
import SINGUP_MUTATION from '../graphql/Signup.mutation.graphql'
import Register from './Register'

export const props = ({ mutate, ownProps: { email, password, history } }) => {
  return {
    signup(input) {
      const options = { variables: { ...input } }
      return mutate(options)
        .then(({ data: { signup: { jwt }}}) => localStorage.setItem('authorization', `Bearer ${jwt}`))
        .then(() => console.log('redirect'))
        .catch((error) => console.error(error))
    }
  }
}

export const data = graphql(
  SINGUP_MUTATION,
  { props }
)

export const RegisterFormContainer = compose(
  data
)(Register)

export default RegisterFormContainer