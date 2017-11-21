import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import User from './User'

describe('User', () => {
  it('should match snapshot', () => {
    const props = { firstName: 'Testing', age: 33 }

    const wrapper = shallow(<User {...props} />)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})