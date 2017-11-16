import React from 'react'
import { compose } from 'recompose'
import { bindActionCreators } from 'redux'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'

import * as actions from '../actions'
import SINGUP_MUTATION from '../graphql/Signup.mutation'

export const RegisterForm = ({ email, password, handleChange, signup, ...rest }) => {
  console.log('sing', rest)
  return (
    <form onSubmit={signup}>
      <div>
        <input type="text" value={email} name="email" onChange={handleChange} />
      </div>
      <div>
        <input type="text" value={password} name="password" onChange={handleChange} />
      </div>
      <div>
        <button type="submit">Signup</button>
      </div>
    </form>
  )
}

const mapStateToProps = ({ users: { registerForm } }) => ({ ...registerForm })
const mapDispatchToProps = (dispatch) => {
  const { updateRegisterForm } = bindActionCreators(actions, dispatch)
  return {
    handleChange: updateRegisterForm
  }
}

export const state = connect(
  mapStateToProps,
  mapDispatchToProps
)

const props = ({ mutate, ownProps: { email, password, history } }) => {
  return {
    signup(event) {
      event.preventDefault()

      console.log('submitting', email, password)

      return mutate({
        variables: { email, password }
      })
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
)(RegisterForm)

export default RegisterFormContainer