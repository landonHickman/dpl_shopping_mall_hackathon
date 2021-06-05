import axios from 'axios'
import React, {useState} from 'react'

const ItemForm = (props) => {
  const { addItem, editItem, setShowForm, store_id, id} = props
  const [name, setName] = useState(props.name ? props.name : '')
  const [desc, setDesc] = useState(props.desc? props.desc : '')
  const [price, setPrice] = useState(props.price ? props.price : '')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      if(id){
        let res = await axios.put(`/api/stores/${store_id}/items/${id}`,{name, desc, price})
        editItem(res.data)
      }else {
        let res = await axios.post(`/api/stores/${store_id}/items`,{name, desc, price})
        console.log(res.data)
        addItem(res.data)
      }
    }catch(err) {
      alert('err')
      console.log(err)
    }
    setShowForm(false)
  }

  return (
    
    <div style={styles.brd}>
      <form onSubmit={handleSubmit}>
        <div style={styles.header}>
          <h3>{id ? 'Edit Form' : 'Add Form' }</h3>
        </div>
        <p>Name</p>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <p>Description</p>
        <input value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        <p>Price</p>
        <input value={price} onChange={(e)=>setPrice(e.target.value)}/>
        <p></p>
        <button>{id ? 'Edit' : 'Add'}</button>
        <p></p>
      </form>
    </div>
    
  )
}

const styles = {
  header: {
    border: '2px solid black',
    borderRadius: '25px',
    maxWidth: '250px',
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
    maxWidth: '300px',
    width: 'auto',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: 'rgba(157,237,223,100)'
  }
}
export default ItemForm