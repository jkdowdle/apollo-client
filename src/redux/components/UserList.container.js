import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { compose, branch, renderComponent } from 'recompose'

import SEARCH_USERS_QUERY from '../graphql/SearchUsers.query.graphql'

import UserList from './UserList'
import LoadingData from './LoadingData'

const mapStateToProps = ({ users: { searchTermInput } }) => ({ searchTermInput })

const state = connect(
  mapStateToProps
)

const options = ({ searchTermInput: input = { searchTerm: '', orderBy: '' } }) => ({
  variables: { input }
})

export const data = graphql(SEARCH_USERS_QUERY, { options })

const displayLoadingState = branch(
  ({ data: { loading }}) => loading,
  renderComponent(LoadingData)
)

export default compose(
  state,
  data,
  displayLoadingState
)(UserList)