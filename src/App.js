import React,{Component,lazy,Suspense,useEffect} from 'react'
import './App.css';
import Bg from './bg'
import Particles from './Particles'
import Cards from './cards'
import Logo from './logo'
import Loading from './loading'
import Intro from './intro'

// const Bg=lazy(()=>import("./bg"))
// const Particles=lazy(()=>import("./Particles"))
// const Cards=lazy(()=>import("./cards"))
// const Logo=lazy(()=>import("./logo"))



function App() {


useEffect(()=>{
  const a=document.querySelector(".loader").style;
  a.opacity=1;
  (function fade(){(a.opacity-=.2)<0?a.display="none":setTimeout(fade,500)})()
})

  return (
    <div className="App">
      {/* <Suspense fallback={<Loading/>}> */}
      
      
      <div className="loader" >
        <Loading/>
      </div>
      
      {/* <Bg/> */}
      
      <div className="particlewrapper"><Particles/></div>
      <Logo/>
      <Intro/>

      <div className="cardwrapper">
      <Cards/>
      </div>
      {/* </Suspense> */}
      
    </div>
  );
}

export default App;
