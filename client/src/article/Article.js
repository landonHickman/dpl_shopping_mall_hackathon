import React from 'react'

const Article = (props) => {
  const {title, author, body} = props

  return (
    <div style={{textAlign: 'center'}}>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <h4>{body}</h4>
      
    </div>
  )
}

export default Article