import React, {useState, useEffect} from 'react'
import StoresHome from '../store/StoresHome'

const Home = () => {
  return(
    <div style={{textAlign: 'center'}}>
      <h1>Home</h1>
      <StoresHome />
    </div>
  )
}

export default Home