import React, { Component } from 'react'
import Filter from '../common/Filter'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: grid;
  padding: 10px;
  font-size: 1.2em;
  grid-template-rows: auto auto;
  grid-gap: 2px;
  justify-content: center;
`

export default class Header extends Component {
  state = {
    items: ['html', 'css', 'js', 'shell'],
    activeTag: 'html',
  }
  setFilter = activeTag => {
    this.setState({
      activeTag: activeTag,
    })
  }

  render() {
    return (
      <div>
        <StyledHeader>{this.state.activeTag}</StyledHeader>
        <Filter
          items={this.state.items}
          active={this.state.activeTag}
          onClick={this.setFilter}
        />
      </div>
    )
  }
}
