import React from 'react'
import { compose, withHandlers } from 'recompose'

const formHandlers = withHandlers({
  submit: ({ handleSubmit }) => (event) => {
    event.preventDefault();
    const { values } = handleSubmit()
    console.log('Submition', values)
  }
})

const Form = ({ form: { values }, fields, updateForm, submit }) => {
  return (
    <form onSubmit={submit}>
      {fields.map(({ Component, ...props }) => {
        return <Component key={props.name} name={props.name} value={values[props.name]} handleChange={updateForm} {...props} />
      })}
      <br />
      <button type='submit'>Submit</button>
      <br />
      {JSON.stringify(values)}
    </form>
  )
}

const MyForm = compose(
  formHandlers,
)(Form)

export default MyForm
