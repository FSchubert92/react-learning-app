import React, { Component } from 'react'
import Form from './Form'

export default function Create(props) {
  return <Form onSubmit={props.onSubmit} />
}
