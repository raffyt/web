import React from 'react'
import styled from 'styled-components'
function Content() {
  return (
    <Wrapper className='content'><h1>Contenido</h1></Wrapper>
  )
}

const Wrapper = styled.main`
  background-color: #EBE3DB;
  display: flex;
  justify-content: center;
  align-items: center;
`



export default Content