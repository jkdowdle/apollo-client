import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { MockedProvider } from 'react-apollo/test-utils'
import { addTypenameToDocument } from 'apollo-utilities'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

import { defaultState } from '../reducer'
import UserListContainer, { data } from './UserList.container'
import SEARCH_USERS_QUERY from '../graphql/SearchUsers.query.graphql'

const mockStore = configureStore()

const store = mockStore({ users: defaultState })

export const searchUsers = {
  searchUsers: [
    {
      id: 1,
      firstName: 'Test',
      age: 27,
      __typename: 'User'
    }
  ]
}

const query = addTypenameToDocument(SEARCH_USERS_QUERY)

const variables = {
  input: {
    searchTerm: '',
    orderBy: ''
  }
}

const mocks = [{ request: { query, variables }, result: { data: searchUsers }}]

describe('UserList.container', () => {
  
  it('renders without crashing', () => {
    const output = mount(
      <MockedProvider mocks={mocks}>
        <Provider store={store} >
          <UserListContainer {...variables} />
        </Provider>
      </MockedProvider>
    )

    expect(toJson(output)).toMatchSnapshot()
  })

  it.only('renders data', (done) => {
    
    class Container extends React.Component {
      componentWillReceiveProps({ data: { loading, searchUsers }}) {
        // console.log('a;lsjdas;ljda;lfja;fldjas;lfjasd;fl ',loading)
        if(!loading) {
          expect(searchUsers.length).toBe(1)
          done()
        } else {
          expect(loading).toBe(true)
        }
      }
      render() {
        return null
      }
    }

    const ContainerWithData = data(Container)

    const output = renderer.create(
      <MockedProvider mocks={mocks}>
        <ContainerWithData {...variables} />
      </MockedProvider>
    )
  })
  
})