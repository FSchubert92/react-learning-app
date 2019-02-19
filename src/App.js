import React, { Component } from 'react'
import styled from 'styled-components'
const StyledText = styled.h1`
  font-size: 3em;
  color: hotpink;
`
class App extends Component {
  render() {
    return <StyledText>Hello World</StyledText>
  }
}

export default App
