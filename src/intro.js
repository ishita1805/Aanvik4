import React from 'react'
import './intro.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Intro() {
    return (
        <div className="intro">
            <img className="aanviklogo" src="aanvik.png" alt=""/>
       <a className="linkcontents"  style={{color:"white",marginTop:"70px",border:"2px solid #ededed",padding:"15px",cursor:"pointer",textDecoration:"none",zIndex:"100000"}} onClick={function(){
           document.getElementById("container").scrollIntoView({behavior:"smooth"})}} >JOIN THE EXPO</a>
            <span style={{color:"white",marginTop:"10px"}}>Join us for the 4th Edition of AANVIK</span>
{/* <ArrowForwardIosIcon className="arrowdown" style={{color:"white"}}/> */}
        </div>
    )
}

export default Intro
