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
      {showForm && <ItemForm {...props} setShowForm={setShowForm}/>}
      <p></p>
    </div>
  )
}

const styles = {
  container: {
    padding:'20px',
    textAlign: 'center'
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
  }
}

export default Item