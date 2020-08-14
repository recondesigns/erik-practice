import React from 'react'
import styled from 'styled-components'

import * as colors from '../../assets/colors'

const HeaderContainer = styled.div`
    border: 1px solid ${colors.green.base};
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
    color: #545454;
    /* border: 1px dotted gray; */
`

export default function Header(props) {
    const { title } = props
    return (
        <HeaderContainer>
            <HeaderH2>{title}</HeaderH2>
        </HeaderContainer>
    )
}