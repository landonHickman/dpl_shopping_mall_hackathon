import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/tests'>Tests</Link>
    <Link to='/jobs'>Jobs</Link>

    </>
  )
}

export default NavBar