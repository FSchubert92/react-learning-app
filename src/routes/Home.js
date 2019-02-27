import React, { Component } from 'react'
import Header from '../common/Header'
import Card from '../cards/Card'
import styled from 'styled-components'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
`

const CardContainer = styled.section`
  display: grid;
  grid-gap: 12px;
  padding: 20px;
  overflow: scroll;
`
export default class Home extends Component {
  render() {
    const { onBookmark, onDelete } = this.props

    return (
      <PageGrid>
        <Header text="" />
        <CardContainer>
          {this.props.cards.map(card => (
            <Card
              {...card}
              key={card._id}
              onBookmark={() => onBookmark(card)}
              onDelete={() => onDelete(card)}
            />
          ))}
        </CardContainer>
      </PageGrid>
    )
  }
}
