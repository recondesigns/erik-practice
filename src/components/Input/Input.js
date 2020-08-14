import React from 'react'
import styled from 'styled-components'

import * as colors from '../../assets/colors'

const InputContainer = styled.div`
    margin: 24px 0px 0px 0px;
    width: 255px;
    min-height: 64px;
`

const InputLabel = styled.label`
    margin: 0px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    box-sizing: border-box;
    color: ${colors.black}
    /* border: 1px dotted gray; */
`

const StyledInput = styled.input`
    margin: 8px 0px 0px 0px;
    width: 255px;
    height: 32px;
    background: ${colors.gray.lighter};
    border: 1px solid ${colors.gray.light};
    box-sizing: border-box;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: ${colors.gray.darker};
    /* background: gray; */
`

export default function Input(props) {
    const { label, placeholder } = props
    return (
        <InputContainer>
           <InputLabel>{label}</InputLabel>
           <StyledInput placeholder={placeholder} />
        </InputContainer>
    )
}