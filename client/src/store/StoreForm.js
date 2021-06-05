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
    <div style={styles.brd}>
      <form onSubmit={handleSubmit}>
        <h3 style={styles.header}>{id ? 'Edit Form' : 'Add Form' }</h3>
        <p>Name</p>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <p>Address</p>
        <textarea value={location} style={{width: '300px', height: '50px'}} onChange={(e)=>setLocation(e.target.value)}/>
        <p>Rating</p>
        <input value={rating} onChange={(e)=>setRating(e.target.value)}/>
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
    maxWidth: '500px',
    width: 'auto',
    margin: 'auto',
    textAlign: 'center',
    marginBottom: '10px',
    marginTop: '10px',
    backgroundColor: 'lightgrey',
    padding: '20px'
  },
  brd: {
    border: '2px solid black',
    borderRadius: '25px',
    maxWidth: '600px',
    width: 'auto',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: 'rgba(157,237,223,100)'
  }
}
export default StoreForm