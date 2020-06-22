import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profil from './ResumeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from './nav';
import About from './about';
class App extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){

    }
    render(){
        // <img src={Profil.img} alt="boy" className="w3-image" width="992" height="1108"/>
        //<img src="media/morpheus.png" alt="boy" className="w3-image" width="992" height="1108" style={{display:"block",marginLeft:"auto",marginRight:"auto"}} useMap="#image-map"/>
        return(
            <div style={{width:"100%",textAlign:"center"}}>
                <Nav/>
                <div className="w3-padding-large" id="main">
                <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
                  <h1 className="w3-jumbo"><span className="w3-hide-small"></span> Maxime Leriche.</h1>
                  <p>Developpeur et Etudiant</p>
                </header>
                <About/>
                <div width="932" height="1048" style={{display:"inline-flex",marginLeft:"auto",marginRight:"auto"}}>
                <img src="media/morpheus_left.png" alt="boy" className="w3-image" width="466" height="1048" onClick={function(){alert("Gauche")}}/>
                <img src="media/morpheus_right.png" alt="boy" className="w3-image" width="466" height="1048" onClick={function(){alert("Droite")}}/>
                </div>
                </div>
            </div>
        )
    }
}

export default App;
