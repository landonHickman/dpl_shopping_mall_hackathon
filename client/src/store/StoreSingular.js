import axios from 'axios'
import React, {useState} from 'react'
import StoreForm from './StoreForm'

const StoreSingular = (props) => {
  const {id, location, rating, name, editStore, deleteStore} = props
  const [showForm, setShowForm] = useState(false)

 

  return(
    <div>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h3>Rating: {rating}</h3>
      <button onClick={()=>setShowForm(!showForm)}>Edit Form</button>
      <button onClick={()=>deleteStore(id)}>Delete</button>
      {showForm && <StoreForm {...props} editStore={editStore} setShowForm={setShowForm}/>}
    </div>
  )
}

export default StoreSingular