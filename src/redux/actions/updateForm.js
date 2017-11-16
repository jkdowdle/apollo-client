import { UPDATE_FORM as type } from './types'

const updateForm = (formName) => ({ target: { value, name }}) => ({
  type,
  formName,
  value,
  name
})

export const updateRegisterForm = updateForm('registerForm')