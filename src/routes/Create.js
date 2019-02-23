import React, { Component } from 'react'
import styled from 'styled-components'
import { postNewCard } from '../services'

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 3fr 1fr;
  height: 50vh;
  grid-gap: 2px;
`

export default class Create extends Component {
  state = {
    title: '',
    content: '',
    tags: '',
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = event => {
    event.preventDefault()
    const tags = this.state.tags.split(',').map(tag => tag.trim())
    this.props.onSubmit({ ...this.state, tags })
  }

  render() {
    return (
      <section>
        <StyledForm onSubmit={this.handleSubmit}>
          <input onChange={this.onInputChange} type="text" name="title" />
          <textarea
            onChange={this.onInputChange}
            name="content"
            id=""
            cols="30"
            rows="10"
          />
          <input onChange={this.onInputChange} type="text" name="tags" />
          <button>create</button>
        </StyledForm>
      </section>
    )
  }
}
