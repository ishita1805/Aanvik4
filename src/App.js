import React,{Component,lazy,Suspense,useEffect,useState} from 'react'
import './App.css';
import Bg from './bg'
import Particles from './Particles'
import Cards from './cards'
import Logo from './logo'
import Loading from './loading'
import Intro from './intro'
import Footer from './footer'
import HelpIcon from '@material-ui/icons/Help';
import {Box,Button} from '@material-ui/core'
import NavigationIcon from '@material-ui/icons/Navigation';

// const Bg=lazy(()=>import("./bg"))
// const Particles=lazy(()=>import("./Particles"))
// const Cards=lazy(()=>import("./cards"))
// const Logo=lazy(()=>import("./logo"))



function App() {let root=document.documentElement;

const [open,setOpen]=useState(false);


window.addEventListener("click",()=>{
if(open==true)
{
  root.style.setProperty('--suppdisp','visible')
}
else if(open==false){
  root.style.setProperty('--suppdisp','none')
}
})

  window.addEventListener("scroll",()=>{
      console.log(window.scrollY)
      var h=window.innerHeight;
      if(window.scrollY>(0.074*h))
      {
              root.style.setProperty('--supportcolor','black')
              root.style.setProperty('--suppinfocol','black')
              root.style.setProperty('--supptextcol','white')
              root.style.setProperty('--navdisp','visible')
          
      }
      else{
        root.style.setProperty('--supportcolor','white')
        root.style.setProperty('--suppinfocol','white')
        root.style.setProperty('--supptextcol','black')
        root.style.setProperty('--navdisp','none')
      }

  })


useEffect(()=>{
  const a=document.querySelector(".loader").style;
  a.opacity=1;
  (function fade(){(a.opacity-=.2)<0?a.display="none":setTimeout(fade,500)})()
})

  return (
    <div className="App" id="app">
      {/* <Suspense fallback={<Loading/>}> */}
      
      
      <div className="loader" >
        
      </div>
      
      {/* <Bg/> */}
      
      <div className="particlewrapper"><Particles/></div>
      <Logo/>
      <Intro/>

      <div className="cardwrapper">
      <Cards/>
      </div>
      {/* </Suspense> */}
      <div className="suppinfo" style={{position:"fixed",color:"green",right:"0",zIndex:"10000000000"}}>
        <div className="supptext">
          <h2>Contact</h2>
        </div>
      </div>
      <NavigationIcon className="suppicon" id="navbtn" style={{zoom:"2.15",position:"fixed",bottom:"8",zIndex:"100000",right:"35"}} onClick={function(){
           document.getElementById("app").scrollIntoView({behavior:"smooth"})}}/>
      <HelpIcon className="suppicon" id="helpbtn" onClick={()=>{setOpen(!open)}} style={{zoom:"2.15",position:"fixed",bottom:"8",zIndex:"100000",right:"5"}}/>
    </div>
  );
}

export default App;
