import React from 'react'
import { compose, withState, withHandlers } from 'recompose'

import Form from './Form'

const mapFields = (fields) => (defaultValue = '') => fields.reduce((acc, field) => ({
  ...acc, 
  [field.name]: field.type === 'checkbox' ? field.options.find((op) => op.defaultCheck).value : defaultValue 
}), {})

const formMetaData = ({ fields }) => {
  const values = mapFields(fields)()
  const errors = mapFields(fields)([])

  return {
    values,
    errors
  }
}

const formState = withState('form', 'setForm', formMetaData)
const updateForm = ({ form, setForm }) => ({ target: { name, value }}) => setForm({ ...form, values: { ...form.values, [name]: value } })
const handleSubmit = ({ form }) => () => form

const handlers = withHandlers({
  updateForm,
  handleSubmit
})

export const FormControllerHOC = (props) => <Form {...props} />

const FormController = compose(
  formState,
  handlers
)(FormControllerHOC)

export default FormController