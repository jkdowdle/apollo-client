import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const searchUsersQuery = gql`
  query SearchUsersQuery($input: SearchUser) {
    searchUsers(input: $input) {
      id
      firstName
      age
    }
  }
`

export class SearchUsers extends Component {
  render() {
    // console.log('props', this.props)

    const { searchTerm, updateForm, submit } = this.props;

    return (
      <div>
        <br />
        <label htmlFor=""></label>
        <input type="text" name='searchTerm' value={searchTerm} onChange={updateForm}/>
        <br /><br />
        <button onClick={submit}>Search Users</button>
      </div>
    )
  }
}

const options = (props, a) => {
  // console.log('props', props, a)
  return { variables: { input: { searchTerm: 'a' }}}
}

export default graphql(searchUsersQuery, {
  options
})(SearchUsers)