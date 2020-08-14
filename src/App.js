import React from 'react'
import styled from 'styled-components'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'


const AppContainer = styled.div`
  width: 648px;
  height: 864px;
  padding: 40px 16px 40px 16px;
  box-sizing: border-box;
  background: white;
  /* border: 1px solid lightcoral; */
`

const FormContainer = styled.div`
  margin: 120px 0px 0px 0px;
  min-height: 168px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid dodgerblue; */
`

const ButtonContainer = styled.div`
  margin: 80px 0px 0px 0px;
  /* border: 1px solid green; */
`

const FormBody2 = styled.p`
  margin: 24px 0px 24px 0px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
`

export default function App() {
  return (
    <AppContainer>
      <Header title={'Sign In'} subtitle={'or create and account to continue with O.P. Veteran.'} />
      <FormContainer>
        <Input label={'Email'} placeholder={'Enter an email'} />
        <Input label={'Password'} placeholder={'Enter a password'} />
        <ButtonContainer>
          <Button text={'Sign In'} clickFunc={() => console.log('Sign in button fired')}  />
          <FormBody2>Don't have an account?</FormBody2>
          <Button text={'Create account'} clickFunc={() => console.log('Create account button fired')} />
        </ButtonContainer>
      </FormContainer>
    </AppContainer>
  )
}