import React from 'react'

import Nav from './Nav'
import Cards from './Cards'
import Jumbotron from './Jumbotron'
import { Grid, Promo } from './index'

const gridTemplateAreas = `
  "nv nv nv nv"
  "as jb jb jb"
  "as jb jb jb"
  "as jb jb jb"
  "cr cr cr cr"
`

export const Styled = ({ grid = gridTemplateAreas }) => {
  return (
    <Grid grid={grid}>
      <Nav />
      <Promo />
      <Jumbotron />
      <Cards />
    </Grid>
  )
}

export default Styled