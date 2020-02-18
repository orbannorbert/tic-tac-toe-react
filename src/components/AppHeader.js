import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
  position: fixed;
  height: 3.75rem; /* 60px */
  width: 100%;
  color: #f2f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.span`
  font-size: 2.25rem;
  font-weight: bold;
`

export default () => (
  <TitleContainer>
    <Title>Tic Tac Toe</Title>
  </TitleContainer>
)