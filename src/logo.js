import React from 'react'
import './logo.css'

function Logo() {let root=document.documentElement;
    window.addEventListener("scroll",()=>{var h=window.innerHeight;
        //console.log(window.scrollY)
        root.style.setProperty("--scwidth",((((window.scrollY)/h)*100*0.55).toString()+"%"));
        console.log((((((window.scrollY)/h)*100)*0.5).toString()+"%"))
        if(window.scrollY>(0.69288*h))
        {
                root.style.setProperty('--displogo1','visible')
                root.style.setProperty('--displogo','none')
        }
        
        if(window.scrollY<(0.69288*h)){
            root.style.setProperty('--displogo1','none')
            root.style.setProperty('--displogo','visible')
        }
        if(window.scrollY>0.3*h){
            root.style.setProperty('--headbg','linear-gradient(#ededed,gray)')
            root.style.setProperty('--teclogofloat','none')
        }
        if(window.scrollY<0.3*h){
            root.style.setProperty('--headbg','none');
            root.style.setProperty('--teclogofloat','left')
        }
        


    })
    return (
        <div className="header">
            <div className="progressbar" style={{zIndex:"1000000"}}></div>
            <img className="TEC_logo" style={{zIndex:"10000",marginLeft:"30px",marginTop:"20px",width:"100px"}} src="https://i.ibb.co/LJj8W49/teclogo-1.png" alt=""/>
            <img className="TEC_logo1" style={{zIndex:"10000",marginLeft:"30px",marginTop:"20px",width:"100px"}} src="https://i.ibb.co/bg3gXD2/image.png" alt=""/>
        </div>
    )
}

export default Logo;
