import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Bookmark = styled.div`
  position: absolute;
  right: 12px;
  top: -6px;
  width: 20px;
  height: 6px;
  background: ${p => (p.active ? 'crimson' : 'black')};
  transition: all 0.4s ease;
  &:after {
    transition: all 0.4s ease;
    position: absolute;
    display: block;
    top: 100%;
    content: '';
    border: 10px solid ${p => (p.active ? 'crimson' : 'black')};
    border-bottom-color: transparent;
  }
`
const DeleteButton = styled.div`
  position: absolute;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: crimson;
  right: 10px;
  bottom: 7px;
  color: white;
  border-radius: 12%;
`
const StyledCard = styled.section`
  padding-left: 15px;
  position: relative;
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
  static propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    bookmarked: PropTypes.bool,
    onBookmark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  }

  static defaultProps ={
    
  }
  renderTag(text, i) {
    return <Tag key={i}>{text}</Tag>
  }

  render() {
    const {
      title,
      content,
      tags,
      bookmarked,
      onBookmark,
      onDelete,
    } = this.props
    return (
      <StyledCard>
        {onBookmark && <Bookmark active={bookmarked} onClick={onBookmark} />}
        <h3> {title} </h3>
        <p>{content}</p>
        {tags && <TagList>{tags.map(this.renderTag)}</TagList>}
        <DeleteButton onClick={onDelete}>X</DeleteButton>
      </StyledCard>
    )
  }
}
