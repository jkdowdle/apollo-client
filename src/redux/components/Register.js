import React from 'react'
import { Form, Field } from 'react-final-form'
import { compose, withApollo } from 'react-apollo'
import { withProps } from 'recompose'

import USERNAME_TAKEN_QUERY from '../graphql/UsernameTaken.query.graphql'

const required = value => (value ? undefined : 'Required')

const minLength = minLength => value =>
  value.length >= minLength
    ? undefined
    : `Should be at least ${minLength} charachters long`

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

const composeAsyncValidatiors = (...validators) => value => 
  Promise.all(validators.map(validator => validator(value)))
    .then((res) => res.find((error) => error))

export const Register = ({
  usernameAvailable,
  email,
  password,
  handleChange,
  signup,
  ...rest
}) => {
  return (
    <Form
      onSubmit={signup}
      initialValues={{}}
      render={({ handleSubmit, values, submitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field name="email" validate={composeValidators(required, composeAsyncValidatiors(usernameAvailable))}>
              {({ input, meta }) => (
                <div>
                  <div>Email</div>
                  <input {...input} placeholder="email" />
                  {/* {console.log('meta', meta)} */}
                  {meta.error && meta.touched &&  <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field
              name="password"
              validate={composeValidators(required, minLength(6))}
            >
              {({ input, meta }) => (
                <div>
                  <div>Password</div>
                  <input {...input} placeholder="********" />
                  {meta.error && !meta.active && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <div>
              <button type="submit" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>

            <code>{JSON.stringify(values, null, 2)}</code>
          </form>
        )
      }}
    />
  )
}

const yeah = withProps(({ client, ...rest }) => {

  const createUsernameAvailable = ({ client, query }) => (value) =>
    client.query({ query, variables: { value } })
      .then(({ data: { usernameAvailable }}) => usernameAvailable)

  const usernameAvailable = createUsernameAvailable({ client, query: USERNAME_TAKEN_QUERY })
  
  return { 
    ...rest,
    usernameAvailable
  }
})

export default compose(
  withApollo,
  yeah
)(Register)
