import React from 'react';
import styled from 'styled-components';
import AppHeader from './AppHeader'
import Board from './Board'

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: #242424;
  height: 100vh;
`
export default class extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <AppHeader />
        <Board />
      </Container>
    )
  }

}
