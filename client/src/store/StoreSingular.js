import React, {useState} from 'react'
import Items from '../item/Items'
import StoreForm from './StoreForm'

const StoreSingular = (props) => {
  const {id, location, rating, name, editStore, deleteStore} = props
  const [showForm, setShowForm] = useState(false)
  const [showItem, setShowItem] = useState(false)

 

  return(
    <div style={styles.brd}>
      <div style={styles.header}>
        <h2 style={styles.title}>{name}</h2>
        <h3>{location}</h3>
        <h3>Rating: {rating}</h3>
        <button onClick={()=>setShowForm(!showForm)}>Edit Store</button>
        <button onClick={()=>deleteStore(id)}>Delete</button>
        <p></p>
      </div>
      {showForm && <StoreForm {...props} editStore={editStore} setShowForm={setShowForm}/>}
      <p></p>
      <button onClick={()=>setShowItem(!showItem)}>View Items</button>
      {showItem && <Items store_id={id}/>}
      <p></p>
    </div>
  )
}

const styles = {
  title: {
    border: '2px solid black',
    borderRadius: '25px',
    maxWidth: '500px',
    width: 'auto',
    margin: 'auto',
    textAlign: 'center',
    marginBottom: '10px',
    marginTop: '25px',
    backgroundColor: 'rgba(194,224,234, 100)',
    padding: '20px'
  },
  header: {
    border: '2px solid black',
    borderRadius: '25px',
    maxWidth: '700px',
    width: 'auto',
    margin: 'auto',
    textAlign: 'center',
    marginBottom: '10px',
    marginTop: '25px',
    backgroundColor: 'lightgrey'
  },
  brd: {
    border: '2px solid black',
    borderRadius: '25px',
    maxWidth: '800px',
    width: 'auto',
    margin: 'auto',
    textAlign: 'center',
    marginBottom: '10px',
    marginTop: '10px',
    backgroundColor: 'rgba(194,224,234, 100)',
    boxShadow: '2px 2px rgba(1, 1, 1, .5)'

  }
}

export default StoreSingular