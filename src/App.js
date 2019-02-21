import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Filter from './components/Filter'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './routes/Home'
import Create from './routes/Create'
import Bookmarks from './routes/Bookmarks'
import Settings from './routes/Settings'
import GlobalStyles from './GlobalStyles'

const BodyGrid = styled.div`
  display: grid;
  height: 100vh;
  overflow: hidden;
  grid-template-rows: auto 48px;
  grid-gap: 2px;
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
    background: grey;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <BodyGrid>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
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
