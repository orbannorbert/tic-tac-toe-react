import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: white;
  padding-top: 4.375rem; /* 70px */
  width: 80%;
  margin: 0 auto;
`

class Board extends React.Component {

  render() {
    return (
      <Container>
        Board
      </Container>
    )
  }

}

export default Board