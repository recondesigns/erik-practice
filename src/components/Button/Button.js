import React from 'react'
import styled from 'styled-components'

import * as colors from '../../assets/colors'

const ButtonContainer = styled.div`
    width: 169px;
    height: 40px;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
    border: 1px solid green;
`

const StyledButton = styled.button`
    width: 100%;
    height: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    color: ${colors.black};
`

export default function Button(props) {
    console.log(props)
    const { text, clickFunc } = props
    return (
        <ButtonContainer>
            <StyledButton onClick={clickFunc}>{text}</StyledButton>
        </ButtonContainer>
    )
}