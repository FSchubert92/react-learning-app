import React from 'react'
import styled from 'styled-components'
import Header from '../common/Header'
import Card from './Card'

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
export default function Home({ onBookmark, onDelete, cards }) {
  return (
    <PageGrid>
      <Header text="" />
      <CardContainer>
        {cards.map(card => (
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
