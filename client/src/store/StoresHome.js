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

  const renderStores = () => {
    return stores.map( store => {
      return (
        <StoreSingular key={store.id} {...store}/>
      )
    })
  }

  return(
    <div style={{textAlign: 'center'}}>
      <button onClick={()=>setShowForm(!showForm)}>Add Store</button>
      {showForm && <StoreForm addStore={addStore}/>}
      {renderStores()}
    </div>
  )
}

export default StoresHome