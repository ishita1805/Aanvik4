import React ,{ useEffect, useRef } from 'react'
import ReactDOM from 'react-dom';
import './cards.css'
import YouTubeIcon from '@material-ui/icons/YouTube';

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
            
            <h2 style={{fontFamily:"Poppins,sans-serif"}}>Take a peek at our projects...</h2>
<div className="cardcon1"> 

 

 {/* const {options} = props; */}

 

  






{/* <Tilt options={{perspective:"200",speed:"1000" , max:50}} className="tilter"  style={{height:"330px"}}> */}
<Tilt className="box" options={options} >
            <div className="card" id="card1" style={{backdropFilter:"blur(5px)"}}>
                <div className="content"> 
                  
                
                    <h1 className="x">01</h1>
                    <h2 className="x">Real time Handwritten digit recognition</h2>
                    
                    <a href="#">Go to the Project</a>

                </div>
            </div>
            </Tilt>
          

            {/* <Tilt options={{perspective:500,speed:"500"}} className="tilter"  style={{height:"330px",paddingTop:"0px",top:"10px",backdropFilter:"blur(5px)"}}> */}
            <Tilt className="box" options={options} >
                <div className="card" id="card2">
                <div className="content">
                    <h1>02</h1>
                    <h2>Object detection using Computer Vision</h2>
                    
                    <a href="#">Go to the Project</a>

                </div>
            </div>
            </Tilt>
            {/* </Tilt> */}

            {/* <Tilt options={{perspective:500,speed:"500"}} className="tilter"  style={{height:"330px",paddingTop:"0px",top:"10px",backdropFilter:"blur(5px)"}}> */}
            <Tilt className="box" options={options} > 
            <div className="card" id="card3">
                <div className="content">
                    <h1>03</h1>
                    <h2>Bidirectional person counter using IR sensor</h2>
                    
                    <a href="#">Go to the Project</a>

                </div>
            </div>
            </Tilt>
            {/* </Tilt> */}

            </div>
            
            
            <div className="cardcon2">
            {/* <Tilt options={{perspective:500,speed:"500"}} className="tilter"  style={{height:"330px",paddingTop:"0px",top:"10px",backdropFilter:"blur(5px)"}}> */}
            <Tilt className="box" options={options}>
            <div className="card" id="card4">
                <div className="content">
                    <h1>04</h1>
                    <h2>Temperature and Humidity measurement using DHT sensor </h2>
                    
                    <a href="#">Go to the Project</a>

                </div>
                
            </div>
            </Tilt>
            
            
            {/* </Tilt> */}

            {/* <Tilt options={{perspective:500,speed:"500"}} className="tilter"  style={{height:"330px",paddingTop:"0px",top:"10px",backdropFilter:"blur(5px)"}}> */}
            <Tilt className="box" options={options} >
            <div className="card" id="card5">
                <div className="content">
                    <h1>05</h1>
                    <h2>Detection of UID of  nanotechnology based RFID tags </h2>
                    
                    <a href="#">Go to the Project</a>

                </div>
            </div>
            </Tilt>
            {/* </Tilt> */}


            </div>

            <a className="livebtn" href="https://youtube.com" style={{display:"flex",flexDirection:"row",padding:"20px",backgroundColor:"red",textDecoration:"none",color:"white",fontFamily:"Poppins,sans-serif",marginTop:"30px",borderRadius:"20px",alignItems:"center",justifyContent:"center"}}><YouTubeIcon style={{padding:"0px",marginTop:"0px",zoom:"1.2"}}/>         Join our livestream on YouTube!</a>
            
        </div>
    )
}

export default Cards
