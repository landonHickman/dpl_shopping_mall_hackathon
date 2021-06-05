import React, {useEffect, useState} from 'react'
import axios from 'axios'
import StoreSingular from './StoreSingular'

const StoresHome = () => {
  const [stores, setStores] = useState([])

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
  

  const renderStores = () => {
    return stores.map( store => {
      return (
        <StoreSingular key={store.id} {...store}/>
      )
    })
  }

  return(
    <div style={{textAlign: 'center'}}>
      <h1>stores</h1>
      {renderStores()}
    </div>
  )
}

export default StoresHome