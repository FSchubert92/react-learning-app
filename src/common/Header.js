import React, { useState } from 'react'
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

export default function Header() {
  const tags = ['html', 'css', 'js', 'shell']
  const [activeTag, setActiveTag] = useState('html')

  return (
    <header>
      <StyledHeader>{activeTag}</StyledHeader>
      <Filter items={tags} active={activeTag} onClick={setActiveTag} />
    </header>
  )
}
