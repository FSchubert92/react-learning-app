import React, { Component } from 'react'
import Header from '../components/Header'
import {
  getAllCards,
  getCardsFromStorage,
  saveCardsToStorage,
} from '../services'
import Card from '../components/Card'
import styled from 'styled-components'

const CardContainer = styled.section`
  display: grid;
  grid-gap: 12px;
  padding: 20px;
  overflow: scroll;
`
export default class Home extends Component {
  state = {
    cards: getCardsFromStorage(),
  }
  componentDidMount() {
    getAllCards().then(res => {
      this.setState({
        cards: res.data,
      })
    })
  }

  componentDidUpdate() {
    saveCardsToStorage(this.state.cards)
  }

  render() {
    return (
      <section>
        <Header text="" />
        <CardContainer>
          {this.state.cards.map(card => (
            <Card {...card} key={card._id} />
          ))}
        </CardContainer>
      </section>
    )
  }
}
