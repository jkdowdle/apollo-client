import React from 'react'

import FormController from './FormController'

// const fields = ['name', 'email', 'password']

const Input = ({ name, value, handleChange, label, placeholder, type }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          placeholder={placeholder}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

const Checkbox = ({ name, value, handleChange, options, label }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <label htmlFor={name}>{label}</label>
      {options.map(({ value, defaultCheck }, index) => {
        return (
          <div key={value}>
            <label>
              <input
                type="radio"
                name={name}
                id={value + index}
                value={value}
                defaultChecked={defaultCheck}
                onChange={handleChange}
              />
              {value}
            </label>
          </div>
        )
      })}
    </div>
  )
}

const fields = [
  {
    name: 'name',
    Component: Input,
    label: 'Full Name',
    type: 'text',
    placeholder: 'John Doe'
  },
  {
    name: 'email',
    Component: Input,
    label: 'Your Email',
    type: 'email',
    placeholder: 'johnd@example.com'
  },
  {
    name: 'gender',
    Component: Checkbox,
    label: 'Gender',
    type: 'checkbox',
    options: [{ value: 'male', defaultCheck: true }, { value: 'female' }]
  },
  {
    name: 'password',
    Component: Input,
    label: 'Create Password',
    type: 'password',
    placeholder: 'secret'
  }
]

export const FormPage = () => <FormController fields={fields} />

export default FormPage
