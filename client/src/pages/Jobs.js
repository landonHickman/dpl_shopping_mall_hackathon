import React, {useEffect, useState} from 'react'
import axios from 'axios'
import JobForm from './JobForm'
import JobSingular from './JobSingular'

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    console.log("effect mounted")
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
    <div style={styles.jobs}>
      <h1 style={styles.header}>Job Listings</h1>
      <button onClick={()=>setShowForm(!showForm)}>Add Job</button>
      {showForm && <JobForm addJob={addJob} setShowForm={setShowForm}/>}
      {renderJobs()}
    </div>
  )
}

const styles= {
  header: {
    border: '2px solid Black',
    borderRadius: '25px',
    textAlign: 'center',
    padding: '60px',
    backgroundColor: 'lightyellow',
  },
  jobs: {
    border: '2px solid Black',
    textAlign: 'center',
    padding: '60px',
    backgroundColor: 'rgb(215, 255, 248)'
  }
}

export default Jobs