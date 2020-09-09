import React, { lazy,Suspense } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './App/about';
import Contact from './App/contact'
import Projet from "./App/projet"
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import morpheus_left from './App/media/morpheus_left.png'
import morpheus_right from './App/media/morpheus_right.png'
const Footer = lazy(() => import( './App/footer'));
const Nav = lazy(() => import( './App/nav'));
const DisplayProjet = lazy(() => import('./App/DisplayProjet'));
const Unsubscribe = lazy(() => import( './App/unsubscribe'));
const EditProjets = lazy(() => import( './App/EditProjet'));
import './App/media/maskicon.png'


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
    }
    arewehome(){
        return window.location.pathname==="/"?true:false;
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
        if(this.state.where!==text)
        this.setState({"where":text})
    }

    render(){
        return(
            <Suspense fallback={<FontAwesomeIcon icon="spinner" spin />}>
            <div style={{width:"100%",textAlign:"center"}}>
                <Nav where={this.state.where}/>
                <div className="w3-padding-large" id="main">
                <Router>
                <Route path="/" exact>
                <Header/>
                <About/>
                <Projet/>
                <div className="w3-content w3-justify" id="notif">
                    <h2 className="w3-text-light-grey">Notification </h2>
                    <hr style={{width:"200px"}} className="w3-opacity"/>

                    <h2>Choisi la pilule bleue et tout s'arrête, après tu pourras faire de beaux rêves et ne jamais avoir de notification de ma part.</h2>
                    <h2>Choisi la pilule rouge et active les notifications afin d'en savoir plus sur ce que je fais et peut-être découvrir des choses qui changeront ma vie.</h2>
                    <div width="932" height="1048" className="morpheus" style={{display:"inline-flex",marginLeft:"auto",marginRight:"auto",overflow:"hidden"}}>
                        <img src={morpheus_left} alt="boy" className="w3-image" width="466" height="1048" onClick={function(){Notification.requestPermission().then(alert("Merci d'avoir activer les notification"));}}/>
                        <img src={morpheus_right} alt="boy" className="w3-image" width="466" height="1048" onClick={function(){alert("Vous ne voulez vraiment pas de mes notification ?");}}/>
                    </div>
                </div>
                <Contact/>
                </Route>
                <Route path="/projetcreate/" component={EditProjets}  />
                <Route path="/projet/:id" component={article}  exact strict />
                <Route path="/notif/unsubscribe" component={Unsubscribe} />
                </Router>
                <Footer/>
                </div>
            </div>
            </Suspense>
        )
    }
}

export default App;
