import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import AddUser from './AddUser'

describe('AddUser', () => {
  describe('render', () => {
    let props

    beforeEach(() => {
      props = {
        firstName: 'foo bar',
        age: 1000,
        handleChange: jest.fn(),
        handleSubmit: jest.fn()
      }
    })

    it('should match a default snapshot', () => {
      const wrapper = shallow(<AddUser />)

      expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('should match a default snapshot', () => {
      const wrapper = shallow(<AddUser {...props} />)

      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

  describe('interaction', () => {
    let wrapper, props

    beforeEach(() => {
      props = {
        firstName: 'foo bar',
        age: 1000,
        handleChange: jest.fn(),
        handleSubmit: jest.fn()
      }
      wrapper = shallow(<AddUser {...props} />)
    })

    afterEach(() => {
      props.handleChange.mockReset()
      props.handleSubmit.mockReset()
    })

    it('should submit the form with value of the submit event', () => {
      const form = wrapper.find('form')
      form.simulate('submit')

      expect(props.handleSubmit).toHaveBeenCalled()
    })

    it('should call handleSubmit each time any input is changed', () => {
      const nameInput = wrapper.find('input[name="firstName"]')
      const ageInput = wrapper.find('input[name="age"]')

      nameInput.simulate('change')
      nameInput.simulate('change')
      ageInput.simulate('change')
      
      expect(props.handleChange).toHaveBeenCalledTimes(3)
    })
  })
})