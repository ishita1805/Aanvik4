import React from 'react'
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';


function Footer() {
    return (
        <div className="footer__body" id="footer__body">
            <img className="aanviklogo1" src="https://i.ibb.co/wpDX1vZ/aanvik.png" style={{marginTop:"2%"}}alt=""/>
            <div className="navList">
                <ul>
                <li><a href="https://www.facebook.com/tec.vit/"><LanguageIcon style={{marginTop:"6px",color:"#000"}}/></a></li>
                    <li><a href="https://www.facebook.com/tec.vit/"><FacebookIcon style={{marginTop:"6px",color:"#000"}}/></a></li>
                    <li><a href="https://www.linkedin.com/company/the-electronics-club-vit/"><LinkedInIcon style={{marginTop:"6px",color:"#000"}}/></a></li>
                    <li><a href="https://www.instagram.com/tec.vit/?hl=en"><InstagramIcon style={{marginTop:"6px",color:"#000"}}/></a></li>
                    <li><a href="https://www.youtube.com/"><YouTubeIcon style={{marginTop:"6px",color:"#000"}}/></a></li> 
                </ul> 
            </div> 
<div className="credits"><p className="creditstext" style={{fontSize:"14px"}}>Developed with ♥ by TECHies: Aparna, Ekta, Ayush and Rajarshi !</p></div>


        </div>
    )
}

export default Footer
