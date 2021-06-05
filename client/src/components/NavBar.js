import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <>
    <Link style={styles.link} to='/'>Home</Link>
    <Link style={styles.link} to='/about'>About</Link>
    <Link style={styles.link} to='/jobs'>Jobs</Link>

    </>
  )
}

const styles = {
  link: {
    textDecoration: 'none',
    margin: '5px',
    fontSize: '1.25em'
  }
}
export default NavBar