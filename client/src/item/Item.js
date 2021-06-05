import React, {useState} from 'react'
import ItemForm from './ItemForm'

const Item = (props) => {
  const {id, name, desc, price, deleteItem} = props
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <h3>{name}</h3>
      <h4>{desc}</h4>
      <h4>${price}</h4>
      <button onClick={()=>setShowForm(!showForm)}>Edit Item</button>
      <button onClick={()=>deleteItem(id)}>Delete</button>
      {showForm && <ItemForm {...props} setShowForm={setShowForm}/>}
    </div>
  )
}
export default Item
