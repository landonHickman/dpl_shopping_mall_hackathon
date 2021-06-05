import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const About = ()=> {
    useEffect(()=>{
        console.log("About component Mounted")
    },[])
   return (
       <div style={styles.container}>
           <h1 style={styles.header}>About DPL Shopping Mall</h1>
           <p style={styles.p}>DPL Shopping Mall is a place where you can buy a variety of items and see various job listings!</p>
           <h3 style={styles.p2}>App by Landon and Katrina</h3>
            <div style={styles.a}>
              <a style={styles.a1} href= "https://www.figma.com/file/fiYzy2hnedwTaYLHGo0P1B/Untitled?node-id=0%3A1">Figma</a>
              <a style={styles.a1} href= "https://lucid.app/lucidchart/e258af2e-79d0-433b-a21b-719e8d655bc7/edit?page=0_0&invitationId=inv_4d6708b8-d6c9-44a2-b004-2c9093807191#">LucidChart</a>
              <a style={styles.a1} href= "https://trello.com/b/gLF1nsNC/hackathon-week-4">Trello</a>
              <a style={styles.a1} href= "https://github.com/landonHickman/dpl_shopping_mall_hackathon">Github</a>
            </div>
       </div>
   )
}

const styles = {
    header: {
      textAlign: 'center',
      padding: '60px',
      backgroundColor: 'rgb(215, 255, 248)',
    },
    p: {
        border: '2px solid black',
        margin: 'auto',
        maxWidth: '300px',
        textAlign: 'center',
        padding: '60px',
        backgroundColor: 'lightgray'
    },
    p2: {
      minHeight: '100px',
      position: 'relative',
      padding: '10px',
      textAlign: 'center',
    },
    a: {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
    },
    a1: {
      marginRight: '5px',
      
    },
    container: {
      height: '1000px',
    }
  }
export default About