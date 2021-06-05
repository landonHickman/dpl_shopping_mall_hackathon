import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Job from './Job'
import JobForm from './JobForm'

const Jobs = (props)=>{
    //declares variable jobs, setJobs modifies jobs & useState specifies the default value
    const [jobs, setJobs] = useState([])

    // mounts component
    useEffect(()=>{
        //calls function
        getJobs()
    }, [])

    //function to get data and tehn set equal to setJobs
    const getJobs = async () => {
        //try will go through code if it can and if not it will go to catch
        try {
            let res = await axios.get(`/api/jobs`)
            setJobs(res.data)
            //catch happens if try fails we put alerts in here so that we can find and fix the issue
        }catch(err){
            alert('error check console')
        }