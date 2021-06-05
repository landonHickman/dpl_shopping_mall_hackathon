import React from 'react'

const Item = (props) => {
  const {name, desc, price } = props
  
  return (
    <div>
      <h3>{name}</h3>
      <h4>{desc}</h4>
      <h4>${price}</h4>
    </div>
  )
}
export default Item