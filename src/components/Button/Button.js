import React from 'react'
import styled from 'styled-components'

import { findButtonStyle } from './utils'

const StyledButton = styled.button`
    padding: 4px 16px 4px 16px;
    min-width: 216px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    /* 
        Helvetica font in the Figma is an owned font that needs
        to be paid for. Using Source Sans Pro in the interim.
     */
     
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${props => props.color};
    background: ${props => props.background};
    border: ${props => props.border};
    border-radius: 2px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.2);
`

export default function Button(props) {
    const { buttonText, buttonStyle } = props
    const { background, color, border } = findButtonStyle(buttonStyle)

    return (
       <StyledButton background={background} color={color} border={border}>{buttonText}</StyledButton>
    )
}