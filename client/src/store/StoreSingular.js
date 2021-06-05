import React from 'react'

const StoreSingular = (props) => {
  const {id, location, rating, name } = props

  return(
    <div>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h3>Rating: {rating}</h3>
    </div>
  )
}

export default StoreSingular