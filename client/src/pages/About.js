import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const About = ()=> {
    useEffect(()=>{
        console.log("About component Mounted")
    },[])
   return (
       <div>
           <h1>About DPL Shopping Mall</h1>
           <p>DPL Shopping Mall is a palace where you can buy a variety of items and see various job listings!
             Figma: https://www.figma.com/file/fiYzy2hnedwTaYLHGo0P1B/DPL-Shopping-Mall?node-id=0%3A1
             LucidApp: https://www.figma.com/file/fiYzy2hnedwTaYLHGo0P1B/DPL-Shopping-Mall?node-id=0%3A1
             Trello: https://trello.com/b/gLF1nsNC/hackathon-week-4
             Github: https://github.com/landonHickman/dpl_shopping_mall_hackathon
           </p>
           
           <Link to='/'>Home</Link>
       </div>
   )
}
export default About