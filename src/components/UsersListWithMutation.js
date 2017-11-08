import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import { User } from './User2'

import SearchUsers from './SearchUsers'

export const UsersQuery = gql`
  query UsersQuery {
    users {
      id
      firstName
      age
    }
  }
`

const removeUser = gql`
  mutation DeleteUser($input: Id!) {
    deleteUser(input: $input) {
      id
      firstName
      age
    }
  }
`

const SearchUsersQuery = gql`
  query SearchUsersQuery($input: SearchUser) {
    searchUsers(input: $input) {
      id
      firstName
      age
    }
  }
`

export class UsersListWithMutation extends React.Component {

  state = {
    searchTerm: ''
  }

  updateForm = (event) => {
    event.preventDefault()
    event.persist()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  searchUsers = () => {
    console.log('clicked!', this.state.searchTerm)
  }

  render() {
    const { data, removeUser,searchData } = this.props

    // console.log('this', this.state)

    if (data.loading) {
      return 'loading'
    }

    console.log('searchData',  searchData)

    const users = (searchData && searchData.searchUsers) || data.users

    return (
      <div>
        <h1>Users List With Mutation Experiment</h1>

        <SearchUsers searchTerm={this.state.searchTerm} updateForm={this.updateForm} submit={this.searchUsers} />
  
        <hr />

        {users.map(({ id, ...props }) => <User key={id} {...props} id={id} removeUser={removeUser.bind(null, id)}/>)}
      </div>
    )
  }
}

const update = (store, { data: { deleteUser } }) => {
  const data = store.readQuery({ query: UsersQuery, variables: { cursor: null } })
  const index = data.users.findIndex(({ id }) => id === deleteUser.id)
  data.users.splice(index, 1)
  store.writeQuery({ query: UsersQuery, data })
}

const optimisticResponse = () => ({
  __typename: 'Mutation',
  deleteUser: {
    __typename: 'User',
    id: null,
    firstName: null,
    age: null
  }
})

const props = ({ mutate }) => ({
  removeUser(id) {
    return mutate({
      variables: { input: { id }},
      update, 
      optimisticResponse: optimisticResponse() 
    })
  }
})

const options = (props, o) => {
  // console.log('options', props)
  // console.log('o', o)
  return {
    variables: { input: { searchTerm: 'a' } },
  }
}

export default compose(
  graphql(UsersQuery),
  graphql(SearchUsersQuery, { options, name: 'searchData', skip: true }),
  graphql(removeUser, { props }),
)(UsersListWithMutation)


        // {/* <form action="/action_page.php" method="get">
        //   <input list="fruits" name="fruit" />
        //   <datalist id="fruits">
        //     <option value="Cherry" />
        //     <option value="Apple" />
        //     <option value="Banana" />
        //     <option value="Mango" />
        //     <option value="Purple" />
        //   </datalist>
        //   <input type="submit" />
        // </form> */}