import React from 'react';
import FooterLogo from '../assets/FooterLogo.png'; 

function Footer(){
    return(
       
        <div className="footer"> 
            <img className="footer_logo"  src={FooterLogo} />
        </div> 
    )
}

export default Footer; 