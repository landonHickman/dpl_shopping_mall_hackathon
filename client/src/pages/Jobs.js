import React, {useEffect, useState} from 'react'
import axios from 'axios'
import JobSingular from '/JobSingular'
import JobForm from '/JobForm'

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    getJobs()
  },[])

  const getJobs = async () => {
    try{
      let res = await axios.get(`/api/jobs`)
      setJobs(res.data)
    }catch (err){
      alert('err check console')
      console.log(err)
    }
  }

  const addJob = (job) => {
    setJobs([job, ...jobs])
  } 

  const editJob = (job) => {
    setJobs( jobs.map (s => s.id === job.id ? job : s))
  }

  const deleteJob = async (id) => {
    let res = await axios.delete(`/api/jobs/${id}`)
    setJobs( jobs.filter (job => job.id !== res.data.id))
  }

  const renderJobs = () => {
    return jobs.map( job => {
      return (
        <JobSingular key={job.id} {...job} editJob={editJob} deleteJob={deleteJob}/>
      )
    })
  }

  return(
    <div style={{textAlign: 'center'}}>
      <button onClick={()=>setShowForm(!showForm)}>Add Job</button>
      {showForm && <JobForm addJob={addJob} setShowForm={setShowForm}/>}
      {renderJobs()}
    </div>
  )
}

export default Jobs