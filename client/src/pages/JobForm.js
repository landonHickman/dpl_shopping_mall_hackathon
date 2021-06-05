import {useState} from 'react'
import axios from 'axios'

const JobForm = (props) => {
    // not destructoring form fields so I can names  in useState
    const { id, addJob, editJob } = props
    const [title, setTitle] = useState(props.title ? props.title : '')
    const [company, setCompany] = useState(props.company ? props.company:'')
    const [salary, setSalary] = useState(props.salary ? props.salary : '')
    const getJobName = () =>{
      return id ? 'EditForm' : 'New Form'
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let job = {title, company, salary } 
        console.log(job)
        if(id){
            let res = await axios.put(`/api/jobs/${id}`, {title, company, salary})
            console.log(res)
            editJob(res.data)
        } else {
            let res = await axios.post('/api/jobs', {title, company, salary})
            console.log(res.data) 
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
              <p>salary</p>
              <input value={salary} onChange={(e)=> setSalary(e.target.value) } /> 
              <br /> 
              <button type={'submit'}>{id ? 'update': 'add'}</button>
          </form>
        </>
    )
}
export default JobForm