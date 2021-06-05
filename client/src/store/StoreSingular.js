import axios from 'axios'
import React, {useState} from 'react'
import Items from '../item/Items'
import StoreForm from './StoreForm'

const StoreSingular = (props) => {
  const {id, location, rating, name, editStore, deleteStore} = props
  const [showForm, setShowForm] = useState(false)
  const [showItem, setShowItem] = useState(false)

 

  return(
    <div>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h3>Rating: {rating}</h3>
      <button onClick={()=>setShowForm(!showForm)}>Edit Form</button>
      <button onClick={()=>deleteStore(id)}>Delete</button>
      {showForm && <StoreForm {...props} editStore={editStore} setShowForm={setShowForm}/>}
      <button onClick={()=>setShowItem(!showItem)}>View Items</button>
      {showItem && <Items store_id={id}/>}
    </div>
  )
}

export default StoreSingular