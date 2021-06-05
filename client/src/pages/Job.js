import React, { useState } from 'react'
import JobForm from './JobForm'

const Job = (props) => {
  const {id, title, company, salary, deleteJob } = props
  const [showForm, setShowForm] = useState(false)
  
  return (
    <div>
    <h3>title: {title}</h3>
    <h4>company: {company}</h4>
    <h4>salary: ${salary} hourly</h4>
    <button onClick={()=>setShowForm(!showForm)}>New Job</button>
    <button onClick={()=>deleteJob(id)}>Delete</button>
    {showForm && <JobForm {...props} setShowForm={setShowForm}/>}
  </div>
  )
}

export default Job
