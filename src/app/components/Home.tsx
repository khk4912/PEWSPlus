import React from 'react'

import styled from 'styled-components'
import StationMenu from './StationMenu'
import { CenteredGridDiv } from './Grid'

const ItemDiv = styled.div`
  width: 95%;
  height: 80%;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;

  > div {
    width: 85%;
    margin: 2%;
    padding: 5%;
    border-radius: 0.7rem;
    border-color: gray;
    border-style: solid;
    border-width: 1px;

  }
`

function Home (): JSX.Element {
  return (
    <div>
      <CenteredGridDiv>
        <h1>PEWS+</h1>
        <ItemDiv>
          <StationMenu />

        </ItemDiv>
      </CenteredGridDiv>
    </div>
  )
}

export default Home
