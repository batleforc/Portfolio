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
            <img src="/media/android-chrome-192x192.png" style={{width:"100%"}} />
            <a href={this.arewehome()?"#":"/"} key="/" className={this.props.where=="home"?  "w3-bar-item w3-button w3-padding-large w3-black":"w3-bar-item w3-button w3-padding-large w3-hover-black"}>
              <FontAwesomeIcon className="w3-xxlarge" icon={["fas","home"]}/>
              <p>HOME</p>
            </a>
            {this.arewehome()&&<a href="#about" key="about" className={this.props.where=="about"?  "w3-bar-item w3-button w3-padding-large w3-black":"w3-bar-item w3-button w3-padding-large w3-hover-black"}>
                <FontAwesomeIcon className="w3-xxlarge" icon={["fas","user"]}/>
                <p>ABOUT</p>
              </a>}
              {this.arewehome()&&<a href="#projets" key="projets"className={this.props.where=="projets"?  "w3-bar-item w3-button w3-padding-large w3-black":"w3-bar-item w3-button w3-padding-large w3-hover-black"}>
                <FontAwesomeIcon className="w3-xxlarge" icon={['fas',"cogs"]}/>
                <p>PROJET</p>
              </a>}
              {this.arewehome()&&<a href="#notif" key="notif" className={this.props.where=="notif"?  "w3-bar-item w3-button w3-padding-large w3-black":"w3-bar-item w3-button w3-padding-large w3-hover-black"}>
              <FontAwesomeIcon className="w3-xxlarge" icon={['fas','bell']} />
                <p>NOTIF</p>
              </a>}
              {this.arewehome()&&<a href="#contact" key="contact" className={this.props.where=="contact"?  "w3-bar-item w3-button w3-padding-large w3-black":"w3-bar-item w3-button w3-padding-large w3-hover-black"}>
                <FontAwesomeIcon className="w3-xxlarge" icon={["fas","envelope"]}/>
                <p>CONTACT</p>
              </a>}
              {Profil.social.map((item)=>{
                return(<a href={item.url} key={item.name} className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                <FontAwesomeIcon icon={item.img}  style={{fontSize:"36px"}}/>
                <p>{item.name}</p>
              </a>)
              })}

            </nav>
            <div className="w3-bottom w3-hide-large w3-hide-medium" id="myNavbar" style={{right:"0",left:"0"}}>
              <div className="w3-bar w3-grey w3-opacity-min w3-hover-opacity-off w3-center w3-small mobilenavbar">
              <a href={this.arewehome()?"#":"/"} className={this.props.where=="home"?"w3-bar-item w3-button w3-dark-grey":"w3-bar-item w3-button"} style={{width:"% !important",marginTop:"0px",marginBottom:"0px",paddingBottom:"2px"}}><FontAwesomeIcon  icon={["fas","home"]}/><p style={{marginTop:"10px",marginBottom:"10px"}}>HOME</p></a>
              {this.arewehome()&&<a href="#about" className={this.props.where=="about"?"w3-bar-item w3-button w3-dark-grey":"w3-bar-item w3-button"} style={{width:"% !important",marginTop:"0px",marginBottom:"0px",paddingBottom:"2px"}}> <FontAwesomeIcon  icon={["fas","user"]}/><p style={{marginTop:"10px",marginBottom:"10px"}}>ABOUT</p></a>}
              {this.arewehome()&& <a href="#projets" className={this.props.where=="projets"?"w3-bar-item w3-button w3-dark-grey":"w3-bar-item w3-button"} style={{width:"% !important",marginTop:"0px",marginBottom:"0px",paddingBottom:"2px"}}><FontAwesomeIcon icon={['fas',"cogs"]} /><p style={{marginTop:"10px",marginBottom:"10px"}}>PROJET</p></a>}
              {this.arewehome()&&<a href="#contact" className={this.props.where=="contact"?"w3-bar-item w3-button w3-dark-grey":"w3-bar-item w3-button"} style={{width:"% !important",marginTop:"0px",marginBottom:"0px",paddingBottom:"2px"}}><FontAwesomeIcon  icon={["fas","envelope"]}/><p style={{marginTop:"10px",marginBottom:"10px"}}>CONTACT</p></a>}
              </div>
            </div>
            </div>
        )
    }
}

export default Nav;