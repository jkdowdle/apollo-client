import React from 'react'
// import { branch, renderComponent } from 'recompose'

export const DataLoading = () => <h4>Loading. . .</h4>

// export const DataLoading = (fn = ({ data: { loading }}) => loading) => branch(
//   fn,
//   renderComponent(DataLoadingBranch)
// )

// const displayLoadingState = branch(
//   // props => props.data.loading,
//   () => true,
//   renderComponent(DataLoading)
// )

export default DataLoading