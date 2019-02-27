import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
export default class Filter extends Component {

static propTypes ={ items: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
}
  render() {
    const { items, active, onClick } = this.props

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
}

// Todo Geschichte nachschauen, geht in die selbe Richtung. Mit .map über das Array der Items rübergehen und so zu rendern. Mit Turnery checken ob active und dann Klasse vergeben, onClick soll dann der Filter applied werden. Bei on Click wird in das active Obkejt der jeweilige Teil aufgenommen. Damit kann man dann auch das highlighting machen.^
