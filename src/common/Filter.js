import React from 'react'
import styled from 'styled-components'

const Grid = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;
`
const Button = styled.div`
  display: flex;
  cursor: pointer;
  padding: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: crimson;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: grey;
  }
  &:active {
    background: cyan;
    color: black;
  }
`

export default function Filter({ items, active, onClick }) {
  return (
    <Grid>
      {items.map(item => (
        <Button
          style={item === active ? { background: 'hotpink' } : {}}
          value={item}
          onClick={() => onClick(item)}
        >
          {item}
        </Button>
      ))}
    </Grid>
  )
}
