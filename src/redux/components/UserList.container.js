import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { compose, branch, renderComponent } from 'recompose'

import SEARCH_USERS_QUERY from '../graphql/SearchUsersQuery'

import UsersList from './UsersList'
import LoadingData from './LoadingData'

const mapStateToProps = ({ users: { searchTermInput } }) => ({ searchTermInput })

const state = connect(
  mapStateToProps
)

const options = ({ searchTermInput: input }) => ({
  variables: { input }
})

const data = graphql(SEARCH_USERS_QUERY, { options })

const displayLoadingState = branch(
  ({ data: { loading }}) => loading,
  renderComponent(LoadingData)
)

export default compose(
  state,
  data,
  displayLoadingState
)(UsersList)