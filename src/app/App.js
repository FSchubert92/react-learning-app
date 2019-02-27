import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Cards from '../cards/CardsPage'
import Create from '../create/Create'
import Settings from '../settings/Settings'
import GlobalStyles from './GlobalStyles'
import {
  getCardsFromStorage,
  getAllCards,
  saveCardsToStorage,
  postNewCard,
  toggleCardBookmark,
  deleteCardFromServer,
} from '../services'

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
function App() {
  const [cards, setCards] = useState(getCardsFromStorage())

  useEffect(() => {
    getAllCards().then(res => {
      setCards(res.data)
    })
  }, [cards])

  useEffect(() => {
    saveCardsToStorage(cards)
  }, [cards])

  function createCard(data) {
    postNewCard(data).then(res => {
      setCards({
        cards: [...cards, res.data],
      })
    })
  }

  function toggleBookmark(card) {
    toggleCardBookmark(card)
      .then(res => {
        const index = cards.indexOf(card)
        setCards([
          ...cards.slice(0, index),
          { ...res.data },
          ...cards.slice(index + 1),
        ])
      })
      .catch(err => console.log(err))
  }

  function deleteCard(card) {
    deleteCardFromServer(card)
      .then(res => {
        const index = cards.indexOf(card)
        setCards([...cards.slice(0, index), ...cards.slice(index + 1)])
      })
      .catch(err => console.log(err))
  }

  return (
    <Router>
      <BodyGrid>
        <Route
          exact
          path="/"
          render={() => (
            <Cards
              cards={cards}
              onBookmark={toggleBookmark}
              onDelete={deleteCard}
            />
          )}
        />
        <Route path="/create" render={() => <Create onSubmit={createCard} />} />
        <Route
          path="/bookmarks"
          render={() => (
            <Cards
              cards={cards.filter(card => card.bookmarked)}
              onBookmark={toggleBookmark}
            />
          )}
        />
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

export default App
