import React from 'react'
import { compose, branch, renderComponent } from 'recompose'
import { graphql } from 'react-apollo'

import { checkAuth } from '../utility'
import LoadingData from './LoadingData'
import CURRENT_USER from '../graphql/CurrenUser.query.graphql'

export const Profile = ({ data: { currentUser }}) => {
  // console.log('cur', currentUser)
  checkAuth(localStorage.getItem('authorization'))
  return (
    <div>
      <h2>Profile</h2>
    </div>
  )
}

export const data = graphql(
  CURRENT_USER
)

export const displayLoadingState = branch(
  ({ data: { loading } }) => loading,
  renderComponent(LoadingData)
)

export default compose(
  data,
  displayLoadingState
)(Profile)

