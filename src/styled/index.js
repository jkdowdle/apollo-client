import React from 'react'
import styled from 'styled-components'

export const Img = styled.img`
  width: 100%;
  height: auto;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas: ${ ({ grid }) => grid };
  grid-gap: 0.25rem;
`
  
export const Nav = styled.nav`
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  grid-area: nv;
  ${props => console.log('nav props')}
`

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`

export const NavItem = styled.li`
  padding: 0.25rem 1rem;
  &:hover {
    cursor: pointer;
    color: #4477aa;
  }
`

export const Logo = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  font-family: sans;
`

export const Promo = styled.div`
  background: #666;
  grid-area: as;
`

export const JumbotronImg = Img.extend`
  height: 45vh;
  grid-area: jb;
`

export const CardRow = styled.div`
  display: flex;
  height: 110%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  grid-area: cr;
`

export const Card = styled.div`
  display: inline-block;
  max-width: 325px;
  padding: 0.25rem;
  border: 1px solid #ccc;
`

export const CardImg = Img.extend`
  border-radius: 0.25rem;
`

export const CardDetail = styled.div`
  font-family: fancy;
  color: #555;
`

export const CardLabel = styled.label`
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  margin: 0.5rem 0;
`

export const CardText = styled.p`
  font-size: 0.8rem;
  margin: 0;
  margin-bottom: 0.25rem;
`
