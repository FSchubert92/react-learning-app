import styled from 'styled-components'
import Header from '../common/Header'
import Card from './Card'
import React, { useState } from 'react'

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
export default function Cards({ onBookmark, onDelete, cards }) {
  const [activeTag, setActiveTag] = useState('html')
  return (
    <PageGrid>
      <Header text="" activeTag={activeTag} onClick={setActiveTag} />
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
