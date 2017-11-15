import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'

import * as actions from '../actions'

import UserSearch from './UserSearch'

const mapStateToProps = ({ users: { searchTermInput } }) => ({ inputVal: searchTermInput })
const mapDispatchToProps = (dispatch) => {
  const { updateSearchTerm } = bindActionCreators(actions, dispatch)
  return {
    handleChange: updateSearchTerm 
  }
}

const state = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  state
)(UserSearch)