import axios from 'axios'
import React, {useState} from 'react'

const StoreForm = (props) => {
  const {id, addStore, editStore, setShowForm} = props
  const [name, setName] = useState(props.name ? props.name : '')
  const [location, setLocation] = useState(props.location ? props.location : '')
  const [rating, setRating] = useState(props.rating ? props.rating : '')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      if(id){
        let res = await axios.put(`/api/stores/${id}`,{name, location, rating})
        editStore(res.data)
      }else {
        let res = await axios.post('/api/stores',{name, location, rating})
        addStore(res.data)
      }
    }catch(err) {
      alert('err')
      console.log(err)
    }
    setShowForm(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>{id ? 'Edit Form' : 'Add Form' }</h3>
        <p>Name</p>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <p>Address</p>
        <textarea value={location} style={{width: '300px', height: '50px'}} onChange={(e)=>setLocation(e.target.value)}/>
        <p>Rating</p>
        <input value={rating} onChange={(e)=>setRating(e.target.value)}/>
        <br/>
        <button>{id ? 'Edit' : 'Add'}</button>
      </form>
    </div>
  )
}
export default StoreForm