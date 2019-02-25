import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './routes/Home'
import Create from './routes/Create'
import Bookmarks from './routes/Bookmarks'
import Settings from './routes/Settings'
import GlobalStyles from './GlobalStyles'
import {
  getCardsFromStorage,
  getAllCards,
  saveCardsToStorage,
  postNewCard,
  toggleCardBookmark,
  deleteCardFromServer,
} from './services'

const BodyGrid = styled.div`
  display: grid;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  grid-template-rows: auto 48px;
  grid-gap: 5px;
`

const Navbar = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;

  .navItem {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background: hotpink;
    text-transform: uppercase;
    color: white;
    text-decoration: none;

    &:hover {
      background-color: deeppink;
    }
    &:active {
      background: cyan;
      color: black;
    }
  }
  .navItem--active {
    background: deeppink;
  }
`
class App extends Component {
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

  createCard = data => {
    postNewCard(data).then(res => {
      this.setState({
        cards: [...this.state.cards, res.data],
      })
    })
  }

  toggleBookmark = card => {
    toggleCardBookmark(card)
      .then(res => {
        const { cards } = this.state
        const index = cards.indexOf(card)
        this.setState({
          cards: [
            ...cards.slice(0, index),
            { ...res.data },
            ...cards.slice(index + 1),
          ],
        })
      })
      .catch(err => console.log(err))
  }

  deleteCard = card => {
    deleteCardFromServer(card)
      .then(res => {
        const { cards } = this.state
        const index = cards.indexOf(card)
        this.setState({
          cards: [...cards.slice(0, index), ...cards.slice(index + 1)],
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { cards } = this.state

    return (
      <Router>
        <BodyGrid>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                cards={cards}
                onBookmark={this.toggleBookmark}
                onDelete={this.deleteCard}
              />
            )}
          />
          <Route
            path="/create"
            render={() => <Create onSubmit={this.createCard} />}
          />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="/settings" component={Settings} />
          <Navbar>
            <NavLink
              exact
              activeClassName="navItem--active"
              className={'navItem'}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="navItem--active"
              className={'navItem'}
              to="/create"
            >
              Create
            </NavLink>
            <NavLink
              activeClassName="navItem--active"
              className={'navItem'}
              to="/bookmarks"
            >
              Bookmarks
            </NavLink>
            <NavLink
              activeClassName="navItem--active"
              className={'navItem'}
              to="/settings"
            >
              Settings
            </NavLink>
            <GlobalStyles />
          </Navbar>
        </BodyGrid>
      </Router>
    )
  }
}

export default App
