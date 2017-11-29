import React from 'react'
import { render } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'
import { addTypenameToDocument } from 'apollo-utilities'

import ADD_USER_MUTATION from '../graphql/AddUser.mutation.graphql'
// import HOC from './AddUser.container'
// import UserListContainer, { data } from './UserList.container'
import { fun } from './AddUser.container'

describe('hey', () => {
  it('hey2', () => {
    console.log('something')
    
  })
})

// describe('AddUser.container', () => {
  
//   it('Loads the expected mutation', (done) => {
//     const mutation = addTypenameToDocument(ADD_USER_MUTATION)

//     const variables = {
//       input: {
//         firstName: '',
//         age: ''
//       }
//     }

//     const mockResponse = {
//       data: { 
//         addUser: {
//           id: 'testid',
//           firstName: variables.input.firstName, 
//           age: variables.input.firstName,
//           __type: 'User'
//         }
//       }
//     }

//     const mocks = [{ request: { mutation, variables }, result: { data: mockResponse } }]

//     class Container extends React.Component {
//       componentWillReceiveProps({ data: { loading, searchUsers } }) {
//         console.log('go go go ')
//         if (!loading) {
//           // expect(searchUsers.length).toBe(1)
//           done()
//         } else {
//           // expect(loading).toBe(true)
//         }
//       }
//       render() {
//         return null
//       }
//     }

//     const ContainerWithMutation = mutationHOC(Container)

//     const wrapper = render(
//       <MockedProvider mocks={mocks}>
//         <ContainerWithMutation />
//       </MockedProvider>
//     )

//   })

// })