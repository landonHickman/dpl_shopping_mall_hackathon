import React, {useState} from 'react'
import StoreForm from './StoreForm'

const StoreSingular = (props) => {
  const {location, rating, name, editStore} = props
  const [showForm, setShowForm] = useState(false)

  return(
    <div>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h3>Rating: {rating}</h3>
      <button onClick={()=>setShowForm(!showForm)}>Edit Form</button>
      <button>Delete</button>
      {showForm && <StoreForm {...props} editStore={editStore} setShowForm={setShowForm}/>}
    </div>
  )
}

export default StoreSingular