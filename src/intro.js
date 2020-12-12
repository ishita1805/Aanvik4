import React,{useEffect,useRef} from 'react'
import './intro.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VanillaTilt from 'vanilla-tilt';


function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
    return <div ref={tilt} {...rest} />;
  }
  

function Intro() {let root=document.documentElement;
    window.addEventListener("scroll",()=>{
        console.log(window.scrollY)
        var h=window.innerHeight;
        if(window.scrollY>(0.69288*h))
        {
                root.style.setProperty('--displogo1','visible')
                root.style.setProperty('--displogo','none')
        }
        else{
            root.style.setProperty('--displogo1','none')
            root.style.setProperty('--displogo','visible')
        }

    })


    const options = {
        scale: 1,
        speed: 500,
        max: 20,
        perspective:1000
      };
    return (
        <div className="intro">
            <Tilt className="box1" options={options} >
            <img className="aanviklogo" src="https://i.ibb.co/wpDX1vZ/aanvik.png" alt=""/></Tilt>
       <a className="linkcontents"  style={{color:"white",marginTop:"110px",border:"0.5px solid grey",padding:"15px",cursor:"pointer",textDecoration:"none",zIndex:"100000"}} onClick={function(){
           document.getElementById("container").scrollIntoView({behavior:"smooth"})}} ><span></span> <span></span> <span></span> <span></span>JOIN THE EXPO</a>
            <p className="weltext" style={{color:"white",marginTop:"2%"}}>Welcome to the 4th Edition of AANVIK</p>
<ExpandMoreIcon className="arrowdown" style={{color:"white",zoom:"3",position:"absolute",bottom:"0"}} onClick={function(){
           document.getElementById("container").scrollIntoView({behavior:"smooth"})}}/>
           


        </div>
    )
}

export default Intro
