import { bindActionCreators } from 'redux'
import { compose } from 'recompose'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'

import * as actions from '../actions'
import ADD_USER_MUTATION from '../graphql/AddUser.mutation.graphql'
import AddUser from './AddUser'

export const fun = () => console.log('lots of fun!')

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

const props = ({ ...one, mutate, ownProps: { firstName, age } }) => ({
  handleSubmit(event) {
    event.preventDefault()

    const options = { variables: { input: { firstName, age } }}
    return mutate(options)
      .then(res => console.log(res))
  }
})

export const mutation = graphql(
  ADD_USER_MUTATION,
  { props }
)

export default compose(
  state,
  mutation  
)(AddUser)

