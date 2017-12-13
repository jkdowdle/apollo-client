import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'

import What from './What'

it('works', () => {
  const tree = render(<What />)

  

  expect(toJson(tree)).toMatchSnapshot()
})