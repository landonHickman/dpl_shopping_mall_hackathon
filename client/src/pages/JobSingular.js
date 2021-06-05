import React, {useState} from 'react'
import JobForm from './JobForm'

const JobSingular = (props) => {
  const {id, title, company, salary, editJob, deleteJob} = props
  const [showForm, setShowForm] = useState(false)
    return(
      <div>
        <h2>Company: {company}</h2>
        <h3>Job Title: {title}</h3>
        <h3>Salary: ${salary}</h3>
        <button onClick={()=>setShowForm(!showForm)}>Edit Job</button>
        <button onClick={()=>deleteJob(id)}>Delete</button>
        {showForm && <JobForm {...props} editJob={editJob} setShowForm={setShowForm}/>}
      </div>
    )
}

export default JobSingular