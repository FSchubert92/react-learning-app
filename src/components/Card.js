import React, { Component } from 'react'
import styled from 'styled-components'

const StyledCard = styled.section`
  padding: 18px;
  background: #eee;
  border: 2px solid #ccc;
  border-radius: 4px;
`
const TagList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0;
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 10px 10px 0;
  padding: 2px 6px;
  background: hotpink;
  border-radius: 6px;
  color: white;
  font-size: 0.8em;
`

export default class Card extends Component {
  renderTag(text, i) {
    return <Tag key={i}>{text}</Tag>
  }

  render() {
    const { title, content, tags } = this.props
    return (
      <StyledCard>
        <h3> {title} </h3>
        <p>{content}</p>
        {tags && <TagList>{tags.map(this.renderTag)}</TagList>}
      </StyledCard>
    )
  }
}
