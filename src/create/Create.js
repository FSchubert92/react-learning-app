import Form from './Form'
import React, { useState } from 'react'

export default function Create(props) {
  const [data, setData] = useState({
    title: '',
    content: '',
    tags: '',
  })
  function onInputChange(event) {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  function onSubmit(event) {
    event.preventDefault()
    console.log(data)
    props.onSubmit({ ...data, tags: split(data.tags) })
  }

  function split(str) {
    return str
      ? str
          .split(',')
          .map(item => item.trim())
          .filter(item => item.length)
      : []
  }
  return <Form onSubmit={onSubmit} onInputChange={onInputChange} />
}
