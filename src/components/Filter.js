import React, { Component } from 'react'

export default class Filter extends Component {
  onClick = event => {
    this.props.onClick(event.target.value)
  }

  render() {
    const { items, active, onClick } = this.props

    return items.map(item => {
      return (
        <button
          style={item === active ? { background: 'hotpink' } : {}}
          value={item}
          onClick={() => onClick(item)}
        >
          {item}
        </button>
      )
    })
  }
}

// Todo Geschichte nachschauen, geht in die selbe Richtung. Mit .map über das Array der Items rübergehen und so zu rendern. Mit Turnery checken ob active und dann Klasse vergeben, onClick soll dann der Filter applied werden. Bei on Click wird in das active Obkejt der jeweilige Teil aufgenommen. Damit kann man dann auch das highlighting machen.^
