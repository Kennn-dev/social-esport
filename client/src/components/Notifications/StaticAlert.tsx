import React from 'react'
import COLORS from 'src/constains/colors'
import { getColorAlert } from 'src/utils'
import styled from 'styled-components'


const Wrapper = styled.div<{type : TStaticAlert['type']}>`
    width : 100%;
    padding : 12px 25px;
    border : 8px;
    border-radius : 8px;
    color : ${COLORS.white};
    font-weight: bold;
    background-color: ${({type}) => getColorAlert(type)};
`
export default function StaticAlert(props : TStaticAlert) {
  const {type , content} = props
  return (
    <Wrapper type={type}>
        {content}
    </Wrapper>
  )
}
