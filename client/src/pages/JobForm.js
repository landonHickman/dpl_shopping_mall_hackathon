import {useState} from 'react'
import axios from 'axios'
const JobForm = (props) => {
    // not destructoring form fields so I can names  in useState
    const { id, addJob, updateJobs  } = props
    const [title, setTitle] = useState(props.title ? props.title : '')
    const [company, setCompany] = useState(props.company ? props.company:'')
    const [salary, setSalary] = useState(props.salary ? props.salary : '')
    const getJobName = () =>{
      return id ? 'EditFORM' : 'NEW Form'
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let job = {title, company, salary } 
        console.log(job)
        if(id){
            let res = await axios.put(`/jobs/${id}`, job)
            console.log(res)
            updateJobs(res.data)
        } else {
            let res = await axios.post('/jobs', job)
            console.log(res) 
            addJob(res.data)
        }
    }
    return(
        <>
          <h1>{getJobName()}</h1>
          <form onSubmit={handleSubmit}>
              <p>title</p>
              <input value={title} onChange={(e)=> setTitle(e.target.value) } /> 
              <p>company</p>
              <input value={company} onChange={(e)=> setCompany(e.target.value) } /> 
              <p>text</p>
              <input value={salary} onChange={(e)=> setSalary(e.target.value) } /> 
              <br /> 
              <button type={'submit'}>{id ? 'add': 'update'}</button>
          </form>
        </>
    )
}
export default JobForm