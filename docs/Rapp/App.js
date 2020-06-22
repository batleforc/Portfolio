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
                <h2>Choisi la pilule bleue et tout s'arrête, après tu pourras faire de beaux rêves et ne jamais avoir de notification de ma part.</h2>
                <h2>Choisi la pilule rouge et active les notifications afin d'en savoir plus sur ce que je fais et peut-être découvrir des choses qui changeront ta vie.</h2>
                <div width="932" height="1048" className="morpheus" style={{display:"inline-flex",marginLeft:"auto",marginRight:"auto",overflow:"hidden"}}>
                <img src="media/morpheus_left.png" alt="boy" className="w3-image" width="466" height="1048" onClick={function(){Notification.requestPermission().then(alert("Merci d'avoir activer les notification"))}}/>
                <img src="media/morpheus_right.png" alt="boy" className="w3-image" width="466" height="1048" onClick={function(){alert("Vous ne voulez vraiment pas de mes notification ?")}}/>
                </div>
                </div>
            </div>
        )
    }
}

export default App;
