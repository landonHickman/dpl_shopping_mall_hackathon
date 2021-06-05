import React from 'react'
import StoresHome from '../store/StoresHome'

const Home = () => {
  return(
    <div style={{textAlign: 'center'}}>
      <h1 style={styles.header}>DPL Shopping Mall</h1>
      <p></p>
      <StoresHome />
    </div>
  )
}

const styles = {
  header: {
    border: '2px solid Black',
    borderRadius: '25px',
    textAlign: 'center',
    padding: '60px',
    width: 'auto',
    margin: 'auto',
    maxWidth: '800px',
    backgroundColor: 'lightgrey',
    fontSize: '50px',
    boxShadow: '2px 2px rgba(1, 1, 1, .5)'
    
  },
  
}

export default Home