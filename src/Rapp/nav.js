import React from"react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Profil from './ResumeData';

class Nav extends React.Component{
  arewehome(){
    return window.location.pathname=="/"?true:false;
  }
    render(){
        //<img src="/w3images/avatar_smoke.jpg" style={{width:"100%"}} />
        return(
            <div>
            <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
              {this.arewehome()&&<a href="#" key="/" className="w3-bar-item w3-button w3-padding-large w3-black">
              <i className="fa fa-home w3-xxlarge"></i>
              <p>HOME</p>
            </a>}
            {!this.arewehome()&&<a href="/" key="/" className="w3-bar-item w3-button w3-padding-large w3-black">
            <i className="fa fa-home w3-xxlarge"></i>
            <p>HOME</p>
          </a>}
            {this.arewehome()&&<a href="#about" key="about" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                <i className="fa fa-user w3-xxlarge"></i>
                <p>ABOUT</p>
              </a>}
              {this.arewehome()&&<a href="#projets" key="projets" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                <FontAwesomeIcon icon={['fas',"cogs"]} style={{fontSize:"36px"}}/>
                <p>PROJET</p>
              </a>}
              {this.arewehome()&&<a href="#contact" key="contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                <i className="fa fa-envelope w3-xxlarge"></i>
                <p>CONTACT</p>
              </a>}
              {Profil.social.map((item)=>{
                return(<a href={item.url} key={item.name} className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                <FontAwesomeIcon icon={item.img}  style={{fontSize:"36px"}}/>
                <p>{item.name}</p>
              </a>)
              })}

            </nav>
            <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
              <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
              {this.arewehome()&& <a href="#" className="w3-bar-item w3-button" style={{width:"% !important"}}>HOME</a>}
              {!this.arewehome()&& <a href="/" className="w3-bar-item w3-button" style={{width:"% !important"}}>HOME</a>}
              {this.arewehome()&&<a href="#about" className="w3-bar-item w3-button" style={{width:"% !important"}}>ABOUT</a>}
              {this.arewehome()&& <a href="#projets" className="w3-bar-item w3-button" style={{width:"% !important"}}>PROJET</a>}
              {this.arewehome()&&<a href="#contact" className="w3-bar-item w3-button" style={{width:"% !important"}}>CONTACT</a>}
                
              </div>
              <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
              {Profil.social.map((item)=>{
                   return( <a href={item.url} key={item.name} className="w3-bar-item w3-button" style={{width:"% !important"}}>{item.name}</a>)
                })}
              </div>
            </div>
            </div>
        )
    }
}

export default Nav;