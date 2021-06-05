import React, {useState} from 'react'
import ItemForm from './ItemForm'

const Item = (props) => {
  const {id, name, desc, price, deleteItem} = props
  const [showForm, setShowForm] = useState(false)

  return (
    <div style={styles.brd}>
      <h3>{name}</h3>
      <h4>{desc}</h4>
      <h4>${price}</h4>
      <button onClick={()=>setShowForm(!showForm)}>Edit Item</button>
      <button onClick={()=>deleteItem(id)}>Delete</button>
      <p></p>
      {showForm && <ItemForm {...props} setShowForm={setShowForm}/>}
      <p></p>
    </div>
  )
}

const styles = {
  header: {
    border: '2px solid black',
    borderRadius: '25px',
    maxWidth: '700px',
    width: 'auto',
    margin: 'auto',
    textAlign: 'center',
    marginBottom: '10px',
    marginTop: '10px',
    backgroundColor: 'lightgrey'
  },
  brd: {
    border: '2px solid black',
    borderRadius: '25px',
    maxWidth: '600px',
    width: 'auto',
    margin: 'auto',
    textAlign: 'center',
    marginBottom: '10px',
    marginTop: '10px',
    backgroundColor: 'lightgrey'
  }
}

export default Item
