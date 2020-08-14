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

const FormContainer = styled.div`
  margin: 120px 0px 0px 0px;
  height: 168px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid dodgerblue;
`

export default function App() {
  return (
    <AppContainer>
      <Header title={'Sign In'} subtitle={'or create and account to continue with O.P. Veteran.'} />
      <FormContainer>
        <Input label={'Email'} placeholder={'Enter an email'} />
        <Input label={'Password'} placeholder={'Enter a password'} />
      </FormContainer>
    </AppContainer>
  )
}