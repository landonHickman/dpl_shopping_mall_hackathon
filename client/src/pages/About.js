import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const About = ()=> {
    useEffect(()=>{
        console.log("About component Mounted")
    },[])
   return (
       <div>
           <h1>About DPL Shopping Mall</h1>
           <p>DPL Shopping Mall is a palace where you can buy a variety of items and see various job listings!</p>
           <p>App by Landon and Katrina</p>
              <a href= "https://www.figma.com/file/fiYzy2hnedwTaYLHGo0P1B/Untitled?node-id=0%3A1">Figma |</a>
              <a href= "https://lucid.app/lucidchart/e258af2e-79d0-433b-a21b-719e8d655bc7/edit?page=0_0&invitationId=inv_4d6708b8-d6c9-44a2-b004-2c9093807191#"> LucidChart |</a>
              <a href= "https://trello.com/b/gLF1nsNC/hackathon-week-4"> Trello |</a>
              <a href= "https://github.com/landonHickman/dpl_shopping_mall_hackathon"> Github |</a>
           
           <Link to='/'>Home</Link>
       </div>
   )
}
export default About