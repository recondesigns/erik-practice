import React from 'react'
import styled from 'styled-components'

import { Header } from './components/Header'
import { Input } from './components/Input'


const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 40px 40px 40px 40px;
  box-sizing: border-box;
  border: 1px solid lightcoral;
`

export default function App() {
  return (
    <AppContainer>
      <Header title={'Sign In'} subtitle={'or create and account to continue with O.P. Veteran.'} />
      <Input />
    </AppContainer>
  )
}