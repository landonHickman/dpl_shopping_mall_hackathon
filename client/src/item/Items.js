import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Item from './Item'
import ItemForm from './ItemForm'


const Items = (props) => {
  const {store_id} = props
  const [items, setItems] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    getItems()
  },[])

  const getItems = async () => {
    try{
      let res = await axios.get(`/api/stores/${store_id}/items`)
      setItems(res.data.item)
    }catch (err){
      alert('err check console')
      console.log(err)
    }
  }

  const addItem = (item) => {
    setItems([item, ...items])
  } 

  const editItem = (item) => {
    setItems( items.map (i => i.id === item.id ? item : i))
  }

  const deleteItem = async (id) => {
    let res = await axios.delete(`/api/stores/${store_id}/items/${id}`)
    setItems( items.filter (item => item.id !== res.data.id))
  }

  const renderItems = () => {
    return items.map( item => {
      return (
        <Item key={item.id} {...item} editItem={editItem} deleteItem={deleteItem}/>
      )
    })
  }

  return(
    <div style={{textAlign: 'center'}}>
      <h3></h3>
      <button onClick={()=>setShowForm(!showForm)}>Add Item</button>
      {showForm && <ItemForm addItem={addItem} setShowForm={setShowForm} store_id={store_id}/>}
      {renderItems()}
    </div>
  )
}

export default Items