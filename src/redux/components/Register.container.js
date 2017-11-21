import { compose } from 'recompose'
import { bindActionCreators } from 'redux'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'

import * as actions from '../actions'
import SINGUP_MUTATION from '../graphql/Signup.mutation.graphql'
import Register from './Register'

export const mapStateToProps = ({ users: { registerForm } }) => ({ ...registerForm })
export const mapDispatchToProps = (dispatch) => {
  const { updateRegisterForm } = bindActionCreators(actions, dispatch)
  return {
    handleChange: updateRegisterForm
  }
}

const state = connect(
  mapStateToProps,
  mapDispatchToProps
)

export const props = ({ mutate, ownProps: { email, password, history } }) => {
  return {
    signup(event) {
      event.preventDefault()
      const options = { variables: { email, password } }

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
  state,
  data
)(Register)

export default RegisterFormContainer