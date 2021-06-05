import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const About = ()=> {
    useEffect(()=>{
        console.log("About component Mounted")
    },[])
   return (
       <div>
           <h1 style={styles.header}>About DPL Shopping Mall</h1>
           <p style={styles.p}>DPL Shopping Mall is a place where you can buy a variety of items and see various job listings!</p>
           <p style={styles.p2}>App by Landon and Katrina</p>
              <a href= "https://www.figma.com/file/fiYzy2hnedwTaYLHGo0P1B/Untitled?node-id=0%3A1" style={styles.p2}>Figma |</a>
              <a href= "https://lucid.app/lucidchart/e258af2e-79d0-433b-a21b-719e8d655bc7/edit?page=0_0&invitationId=inv_4d6708b8-d6c9-44a2-b004-2c9093807191#"style={styles.p2}> LucidChart |</a>
              <a href= "https://trello.com/b/gLF1nsNC/hackathon-week-4"style={styles.p2}> Trello |</a>
              <a href= "https://github.com/landonHickman/dpl_shopping_mall_hackathon"style={styles.p2}> Github |</a>
           
           <Link to='/'style={styles.p2}> Home</Link>
       </div>
   )
}

const styles = {
    header: {
      border: '2px solid Black',
      textAlign: 'center',
      padding: '60px',
      backgroundColor: 'rgb(215, 255, 248)',
    },
    p: {
        border: '2px solid Black',
        textAlign: 'center',
        padding: '60px',
        backgroundColor: 'lightgray'
    },
    p2: {
      minHeight: '50px',
      position: 'relative',
      padding: '10px',

    }
    
  }

export default About