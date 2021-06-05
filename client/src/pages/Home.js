import React from 'react'
import StoresHome from '../store/StoresHome'

const Home = () => {
  return(
    <div style={{textAlign: 'center'}}>
      <h1 style={styles.header}>DPL Shopping Mall</h1>
      <StoresHome />
    </div>
  )
}

const styles = {
  header: {
    border: '2px solid Black',
    textAlign: 'center',
    padding: '60px',
    backgroundColor: 'lightgrey'
  },
  
}

export default Home