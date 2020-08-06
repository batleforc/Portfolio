import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Nav from './nav';
import About from './about';
import Contact from './contact'
import Footer from './footer'
import Projet from "./projet"
import DisplayProjet from './DisplayProjet'
import Unsubscribe from './unsubscribe'
import EditProjets from'./EditProjet'

function article(props) {
    return(<DisplayProjet slug={props.match.params.id}/>)
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            notification:false,
            where:"home"
        }
        this.setwaypoint = this.setwaypoint.bind(this)
        var test = new SpeechSynthesisUtterance("Bonjour")
        test.voice=speechSynthesis.getVoices()[8];
    }
    arewehome(){
        return window.location.pathname=="/"?true:false;
      }

    componentDidMount(){
        if(this.arewehome()){
            const notification =new IntersectionObserver(this.setwaypoint, {root:null,rootMargin:"0px",threshold:0.55});
            notification.observe(document.getElementById("home"))
            notification.observe(document.getElementById("about"))
            notification.observe(document.getElementById("projets"))
            notification.observe(document.getElementById("notif"))
            notification.observe(document.getElementById("contact"))
        }
    }

    setwaypoint(entries){
        var text = entries[0].target.id
        if(this.state.where!=text)
        this.setState({"where":text})
    }

    render(){
        // <img src={Profil.img} alt="boy" className="w3-image" width="992" height="1108"/>
        //<img src="media/morpheus.png" alt="boy" className="w3-image" width="992" height="1108" style={{display:"block",marginLeft:"auto",marginRight:"auto"}} useMap="#image-map"/>
        var test = new SpeechSynthesisUtterance("Bonjour")
        test.voice=speechSynthesis.getVoices()[8];

        return(
            <Router>
            <Suspense fallback={<h1> Loading....</h1>}/>
            <div style={{width:"100%",textAlign:"center"}}>
                <Nav where={this.state.where}/>
                <div className="w3-padding-large" id="main">
                <Route path="/" exact>
                <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
                       <h1 className="w3-jumbo"><span className="w3-hide-small"></span> Maxime Leriche.</h1>
                       <p>Developpeur et Etudiant</p>
                </header>
                <About/>
                <Projet/>
                <div className="w3-content w3-justify" id="notif">
                    <h2 className="w3-text-light-grey">Notification </h2>
                    <hr style={{width:"200px"}} className="w3-opacity"/>

                    <h2>Choisi la pilule bleue et tout s'arrête, après tu pourras faire de beaux rêves et ne jamais avoir de notification de ma part.</h2>
                    <h2>Choisi la pilule rouge et active les notifications afin d'en savoir plus sur ce que je fais et peut-être découvrir des choses qui changeront ma vie.</h2>
                    <div width="932" height="1048" className="morpheus" style={{display:"inline-flex",marginLeft:"auto",marginRight:"auto",overflow:"hidden"}}>
                        <img src="media/morpheus_left.png" alt="boy" className="w3-image" width="466" height="1048" onClick={function(){Notification.requestPermission().then(alert("Merci d'avoir activer les notification"));}}/>
                        <img src="media/morpheus_right.png" alt="boy" className="w3-image" width="466" height="1048" onClick={function(){alert("Vous ne voulez vraiment pas de mes notification ?");}}/>
                    </div>
                </div>
                <Contact/>
                </Route>
                <Route path="/projetcreate/" component={EditProjets}  />
                <Route path="/projet/:id" component={article}  exact strict />
                <Route path="/notif/unsubscribe" component={Unsubscribe} />
                <Footer/>
                </div>
            </div>
            </Router>
        )
    }
}

export default App;
