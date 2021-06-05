import React, {useState} from 'react'
import JobForm from './JobForm'

const JobSingular = (props) => {
  const {id, title, company, salary, editJob, deleteJob} = props
  const [showForm, setShowForm] = useState(false)
  const [showJob, setShowJob] = useState(false)

    return(
      <div>
        <h2>{company}</h2>
        <h3>{title}</h3>
        <h3>{salary}</h3>
        <button onClick={()=>setShowForm(!showForm)}>Edit Job</button>
        <button onClick={()=>deleteJob(id)}>Delete</button>
        {showForm && <JobForm {...props} editJob={editJob} setShowForm={setShowForm}/>}
        <button onClick={()=>setShowJob(!showJob)}>View Jobs</button>
      </div>
    )
}

export default JobSingular