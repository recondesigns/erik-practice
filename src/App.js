import React from 'react'
import styled from 'styled-components'

import { Button } from './components/Button'

const AppContainer = styled.div`
  width: 648px;
  height: 864px;
  padding: 40px 16px 40px 16px;
  box-sizing: border-box;
  background: white;
  display: flex;
  justify-content: space-evenly;
`

export default function App() {
  return (
    <AppContainer>
      <Button buttonText={'Sign In'} buttonStyle={'primary'} />
      <Button buttonText={'Join'} buttonStyle={'secondary'} />
    </AppContainer>
  )
}