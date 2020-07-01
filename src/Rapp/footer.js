import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Profil from './ResumeData';

class Footer extends React.Component{
    render(){
        return(
         <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge" style={{textAlign:"left"}}>
         <div  style={{textAlign:"center"}}>
           {Profil.social.map((item)=>{
            return(<a href={item.url} key={item.name} style={{margin:"0px",padding:"0px !important"}} className="w3-bar-item w3-button w3-hover-black">
            <FontAwesomeIcon icon={item.img}  style={{margin:"0px",padding:"0px !important",fontSize:"38px"}}/>
          </a>)
          })}
          </div>
           <p className="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" className="w3-hover-text-green">w3.css</a>
            {" "}and modified by Batleforc with <FontAwesomeIcon icon={['fas','heart']}/> and too much  <FontAwesomeIcon icon={['fas','coffee']}/>
           </p>

         </footer>)
    }
}

export default Footer;