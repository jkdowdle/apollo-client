import React from 'react'
import { compose, withState, withHandlers } from 'recompose'

const defaultForm = { name: '', email: '', phone: '' }
const defaultErros = { name: [], email: [], phone: [] }
const form = withState('form', 'setForm', defaultForm)
const errors = withState('errors', 'setErrors', defaultErros)
const updateFrom = ({ form, setForm }) => ({ target: { name, value }}) => setForm({ ...form, [name]: value })
const updateErros = ({ form, errors, setErrors }) => () => {
  if (form.name.length < 3) {
    errors.name[0] = 'Must be atleast 4 chars'
  }

  if (form.name === 'Josh') {
    errors.name[1] = "I don't like that name"
  }

  setErrors(errors)
}

const handlers = withHandlers({
  updateFrom,
  updateErros
})

export const FormWithState = ({ form: { name, email, phone }, errors, updateFrom, updateErros }) => {
  return (
    <form onChange={updateErros}>
      <div>
        <input name="name" value={name} onChange={updateFrom} autoComplete={false}/>
        {errors.name.length ? errors.name[0] && errors.name[1] : null}<br /><br />
      </div>
      <input name="email" value={email} onChange={updateFrom} /><br /><br />
      <input name="phone" value={phone} onChange={updateFrom} /><br /><br />
      <code>{JSON.stringify({ name, email, phone })}</code><br />
      <code>{JSON.stringify(errors)}</code>
    </form>
  )
}

export const Form = compose(
  form,
  errors,
  handlers,
)(FormWithState)

export default Form