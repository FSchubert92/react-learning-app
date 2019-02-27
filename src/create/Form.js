import React, { Component } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 3fr 1fr;
  height: 50vh;
  grid-gap: 2px;
`
export default function Form({ onInputChange, onSubmit }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <input onChange={onInputChange} type="text" name="title" />
      <textarea
        onChange={onInputChange}
        name="content"
        id=""
        cols="30"
        rows="10"
      />
      <input onChange={onInputChange} type="text" name="tags" />
      <button>create</button>
    </StyledForm>
  )
}
