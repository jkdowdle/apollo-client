import React from 'react'
import { render, mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { UsersList, props as mapProps } from './UsersList'
import { User } from './User'
import { AddUser } from './AddUser'

describe('UsersList component', () => {
  const data = {
    users: [
      { id: 0, firstName: 'test1', age: 1 },
      { id: 1, firstName: 'test2', age: 2 }
    ]
  }

  it('should have 2 User components', () => {
    const wrapper = mount(<UsersList data={data} />)
    expect(wrapper.find(User).length).toBe(2)
  })

  it('should have an Adduser Component', () => {
    const wrapper = mount(<UsersList data={data} />)
    expect(wrapper.find(AddUser).length).toBe(1)
  })

  // it('should receive the correct props from graphql HOC', () => {
  //   const props = { data: { users: [] }, fetchMore: jest.fn() }
    
  //   const mapedProps = mapProps(props)
  //   const acctualProps = { data: { users: [] }, loadOlder: () => ({}) }

  //   console.log('retunred', mapedProps)

  //   expect(mapedProps).toEqual(acctualProps)
  // })

  it('should render UsersList correctly', () => {
    const tree = shallow(<UsersList data={data} />)

    expect(tree).toMatchSnapshot()
  })

})

