import React ,{ useEffect, useRef } from 'react'
import ReactDOM from 'react-dom';
import './cards.css' 
import YouTubeIcon from '@material-ui/icons/YouTube'; 
import Footer from './footer'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import DuoIcon from '@material-ui/icons/Duo';

// import Tilt from 'react-vanilla-tilt'
import VanillaTilt from 'vanilla-tilt';
function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
    return <div ref={tilt} {...rest} />;
  }
  



function Cards() {
    let root=document.documentElement;
    window.addEventListener("scroll",()=>{
        console.log(window.scrollY)
        var h=window.innerHeight;
        if(window.scrollY>=(0.95*h))
        {
                root.style.setProperty('--dispar1','none')
                
        }
        else{
        
            root.style.setProperty('--dispar1','flex')
        }

    })

    const options = {
        scale: 1.2,
        speed: 500,
        max: 30,
        perspective:500
      };

// VanillaTilt.init(document.querySelectorAll(".card"),{
//     max:25,
//     speed:400
// });

// const element = document.querySelectorAll(".card");
// VanillaTilt.init(element);
// element.addEventListener("tiltChange", Cards);

    return (
        <div className="container" id="container">
 
            <h2 className="whitetitle" style={{fontFamily:"Poppins,sans-serif"}}>Take a peek at our projects...</h2>
<div className="cardcon1"> 

 

 {/* const {options} = props; */}

 

  






{/* <Tilt options={{perspective:"200",speed:"1000" , max:50}}
style={{backdropFilter:"blur(5px)"}}
className="tilter"  style={{height:"330px"}}> */} 
<Tilt className="box" options={options} >
            <div className="card" id="card1" >
            
            <div className="proj1" style={{ zIndex: "100000",width:"100%",height:"100%"}}></div>
                <div className="content" > 
                  
                
                    

                    <h2 className="x">Real time Handwritten digit recognition</h2>
                    
                    <a href="#" style={{}}>Go to Live Demo!</a>

                </div>
            </div>
            </Tilt>
          

            {/* <Tilt options={{perspective:500,speed:"500"}} className="tilter"  style={{height:"330px",paddingTop:"0px",top:"10px",backdropFilter:"blur(5px)"}}> */}
            <Tilt className="box" options={options} >
                <div className="card" id="card2">

                <div className="proj2" style={{ zIndex: "100000",width:"100%",height:"100%"}}></div>
                <div className="content">
                    
                    <h2>Object detection using Computer Vision</h2>
                    
                    <a href="#">Go to Live Demo!</a>

                </div>
            </div>
            </Tilt>
            {/* </Tilt> */}

            {/* <Tilt options={{perspective:500,speed:"500"}} className="tilter"  style={{height:"330px",paddingTop:"0px",top:"10px",backdropFilter:"blur(5px)"}}> */}
            <Tilt className="box" options={options} > 
            <div className="card" id="card3">

            <div className="proj3" style={{ zIndex: "100000",width:"100%",height:"100%"}}></div>
                <div className="content">
                    <h2>Bidirectional person counter using IR sensor</h2>
                    <p className="onelineintro">One Line intro</p>
                    <a href="#">Go to Live Demo!</a>

                </div>
            </div>
            </Tilt>
            {/* </Tilt> */}

            </div>
            
            
            <div className="cardcon2">
            {/* <Tilt options={{perspective:500,speed:"500"}} className="tilter"  style={{height:"330px",paddingTop:"0px",top:"10px",backdropFilter:"blur(5px)"}}> */}
            <Tilt className="box" options={options}>
            <div className="card" id="card4">
            <div className="proj4" style={{ zIndex: "100000",width:"100%",height:"100%"}}></div>

                <div className="content">
                  
                    <h2 style={{marginTop:"14px"}}>Temperature and Humidity measurement using DHT sensor </h2>
                    
                    <a href="#" style={{marginTop:"0px"}}>Go to Live Demo!</a>

                </div>
                
            </div>
            </Tilt>
            
            
            {/* </Tilt> */}

            {/* <Tilt options={{perspective:500,speed:"500"}} className="tilter"  style={{height:"330px",paddingTop:"0px",top:"10px",backdropFilter:"blur(5px)"}}> */}
            <Tilt className="box" options={options} >
            <div className="card" id="card5">
            <div className="proj5" style={{ zIndex: "100000",width:"100%",height:"100%"}}></div>

                <div className="content">
                    
                    <h2 style={{marginTop:"14px"}}>Detection of UID from nanotechnology based RFID tags </h2>
                    
                    <a href="#" style={{marginTop:"0px"}}>Go to Live Demo!</a>

                </div>
            </div>
            </Tilt>
            {/* </Tilt> */}


            </div>
            {/* <ExpandMoreIcon className="arrowdown1" style={{color:"black",zoom:"3",bottom:"0",zIndex:"10000",marginTop:"10px",backgroundColor:"none"}} onClick={function(){
           document.getElementById("footer__body").scrollIntoView({behavior:"smooth"})}}/> */}
            <a className="livebtn" href="https://youtube.com" style={{display:"flex",flexDirection:"row",padding:"20px",backgroundColor:"red",textDecoration:"none",color:"white",fontFamily:"Poppins,sans-serif",marginTop:"70px",borderRadius:"20px",alignItems:"center",justifyContent:"center"}}><YouTubeIcon className="yticon" style={{padding:"0px",marginTop:"0px",zoom:"1.2"}}/>         Join our livestream on YouTube!</a>
            
            
            <Footer/>
        </div>
    )
}

export default Cards
