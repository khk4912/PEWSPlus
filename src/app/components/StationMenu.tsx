import React, { useState } from 'react'
import { CenteredGridDiv } from './Grid'

import styled from 'styled-components'

import type { StationList } from '../../types/pews'

const StationDiv = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  height: 90%;
  overflow-y: auto;
`

function StationMenu (): JSX.Element {
  const [mmiEventStations, setMMIEventStations] = useState<StationList>([])

  setInterval(() => {
    setMMIEventStations([
      {
        info: {
          name: '관측소1',
          code: 'asdf',
          inOperation: true
        },
        mmi: 1,
        lat: 0,
        lon: 0,
        idx: 1
      },
      {
        info: {
          name: '관측소2',
          code: 'asdfff',
          inOperation: true
        },
        mmi: 2,
        lat: 0,
        lon: 0,
        idx: 2
      }
    ])
  }, 3000)

  return (
    <CenteredGridDiv>
      <h4>관측소 정보</h4>
      <StationDiv>
        {
          mmiEventStations.map((station) => (
            <div key={station.info?.code}>
              <p>{station.info?.name}</p>
              <p>{station.mmi}</p>
            </div>
          ))
        }
      </StationDiv>
    </CenteredGridDiv>
  )
}

export default StationMenu
