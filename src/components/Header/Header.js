import React from 'react'
import styled from 'styled-components'

import * as colors from '../../assets/colors'

const HeaderContainer = styled.div`
    height: 72px;
    box-sizing: border-box;
    /* border: 1px solid ${colors.green.base}; */
`

const HeaderH2 = styled.div`
    margin: 0px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 40px;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;
    color: ${colors.gray.darker};
    /* border: 1px dotted gray; */
`

const HeaderBody2 = styled.div`
    margin: 8px 0px 0px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: ${colors.gray.darker};
    /* border: 1px dotted gray; */
`

export default function Header(props) {
    const { title, subtitle } = props
    return (
        <HeaderContainer>
            <HeaderH2>{title}</HeaderH2>
            <HeaderBody2>{subtitle}</HeaderBody2>
        </HeaderContainer>
    )
}