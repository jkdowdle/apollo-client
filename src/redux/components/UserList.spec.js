import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import UserList from './UserList'
import { searchUsers } from './UserList.container.spec'

describe('UserList component', () => {
  it('matches snapshot', () => {
    const data = {
      searchUsers: searchUsers.searchUsers
    }

    const Test = () => (
      <div>
        <h1>Testing Snapshot</h1>
      </div>
    )

    const wrapper = shallow(<UserList data={data} />)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})