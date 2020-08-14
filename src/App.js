import React from 'react'
import styled from 'styled-components'

import { Header } from './components/Header'

const AppContainer = styled.div`
  border: 1px solid lightcoral;
`

export default function App() {
  return (
    <AppContainer>
      <Header title={'Sign In'} subtitle={'or create and account to continue with O.P. Veteran.'} />
    </AppContainer>
  )
}