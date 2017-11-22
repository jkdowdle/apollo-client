import React from 'react'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'

import * as actions from '../actions'
import ADD_USER_MUTATION from '../graphql/AddUser.mutation.graphql'

export const AddUser = ({ handleSubmit, handleChange, firstName, age }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" value={firstName} name="firstName" onChange={handleChange} />
      </div>
      <div>
        <input type="text" value={age} name="age" onChange={handleChange} />
      </div>
      <div>
        <button type="submit">AddUSer</button>
      </div>
    </form>
  )
} 

export const mapStateToProps = ({ users: { addUserForm } }) => ({ ...addUserForm })
export const mapDispatchToProps = (dispatch) => {
  const { udateAddUserForm } = bindActionCreators(actions, dispatch)
  return {
    handleChange: udateAddUserForm
  }
}

const state = connect(
  mapStateToProps,
  mapDispatchToProps
)

const props = ({ ...one, mutate, ownProps: { firstName, age } }) => {
  return {
    handleSubmit(event) {
      event.preventDefault()

      const options = { variables: { input: { firstName, age } }}
      return mutate(options)
        .then(res => console.log(res))
    }
  }
}

const mutation = graphql(
  ADD_USER_MUTATION,
  { props }
)

export default compose(
  state,
  mutation  
)(AddUser)

