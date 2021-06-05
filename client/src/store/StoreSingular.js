import React from 'react'

const StoreSingular = (props) => {
  const {id, location, rating, name } = props

  return(
    <div>
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h2>Rating: {rating}</h2>
    </div>
  )
}

export default StoreSingular