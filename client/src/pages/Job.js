import React, {useEffect, useState } from 'react'
import JobForm from './JobForm'

const Job = (props) => {
  
 
  const {id, title, company, salary, deleteJob } = props
  
  return (
    <>
      <h1>{company}</h1>
      <p>Job Title: {title} salary:{salary}</p>
      <p onClick={()=> deleteJob(id)}>delete</p>
      <JobForm {...props}/>
      <hr />
  
    </>
  )
}

export default Job