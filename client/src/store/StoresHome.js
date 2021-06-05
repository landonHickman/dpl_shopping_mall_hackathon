import React, {useEffect, useState} from 'react'
import axios from 'axios'
import StoreSingular from './StoreSingular'
import StoreForm from './StoreForm'

const StoresHome = () => {
  const [stores, setStores] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    getStores()
  },[])

  const getStores = async () => {
    try{
      let res = await axios.get(`/api/stores`)
      setStores(res.data)
    }catch (err){
      alert('err check console')
      console.log(err)
    }
  }

  const addStore = (store) => {
    setStores([store, ...stores])
  } 

  const editStore = (store) => {
    setStores( stores.map (s => s.id === store.id ? store : s))
  }

  const deleteStore = async (id) => {
    let res = await axios.delete(`/api/stores/${id}`)
    setStores( stores.filter (store => store.id !== res.data.id))
  }

  const renderStores = () => {
    return stores.map( store => {
      return (
        <StoreSingular key={store.id} {...store} editStore={editStore} deleteStore={deleteStore}/>
      )
    })
  }

  return(
    <div style={{textAlign: 'center'}}>
      <button onClick={()=>setShowForm(!showForm)}>Add Store</button>
      {showForm && <StoreForm addStore={addStore} setShowForm={setShowForm}/>}
      {renderStores()}
    </div>
  )
}

export default StoresHome