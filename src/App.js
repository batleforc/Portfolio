import React, { lazy,Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './App/about';
import Contact from './App/contact'
import Projet from "./App/projet"
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import morpheus from './App/media/morpheus.png'
import './App/media/maskicon.png'
const Footer = lazy(() => import( './App/footer'));
const Nav = lazy(() => import( './App/nav'));
const DisplayProjet = lazy(() => import('./App/DisplayProjet'));
const Unsubscribe = lazy(() => import( './App/unsubscribe'));
const EditProjets = lazy(() => import( './App/EditProjet'));
const NotFound = lazy(() => import( './App/404'));


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
    navclick=(event)=>{
        var name = event.target.name?event.target.name:event.currentTarget.name
        setTimeout( ()=> {
            this.setState({"where":name})
        }, 50);
    }

    render(){
        return(
            <Suspense fallback={<FontAwesomeIcon icon="spinner" spin />}>
                <div style={{width:"100%",textAlign:"center"}}>
                    <Nav where={this.state.where} Click={this.navclick} />
                    <div className="w3-padding-large" id="main">
                    <Router>
                        <Switch>
                            <Route path="/" exact>
                            <Header/>
                            <About/>
                            <Projet/>
                            <div className="w3-content w3-justify" id="notif">
                                <h2 className="w3-text-light-grey">Notification </h2>
                                <hr style={{width:"200px"}} className="w3-opacity"/>
                                <h2 className="MatrixText" >Choisi la pilule bleue et tout s'arrête, après tu pourras faire de beaux rêves et ne jamais avoir de notification de ma part.</h2>
                                <h2 className="MatrixText" >Choisi la pilule rouge et active les notifications afin d'en savoir plus sur ce que je fais et peut-être découvrir des choses qui changeront ma vie.</h2>
                                <div id="morpheusContainer" >
                                    <img src={morpheus} useMap="#image-map" alt="Morpheus from Matrix" />
                                    <map name="image-map">
                                        <area target="" alt="Coter droit de l'image qui active les notification" title="" href="" style={{outline:"none"}} coords="0,0,407,800" shape="rect" onClick={(event)=>{event.preventDefault();Notification.requestPermission().then(alert("Merci d'avoir activer les notification"));}} />
                                        <area target="" alt="Coter gauche de l'image qui désactive les notification" title="" href="" style={{outline:"none"}} coords="929,0,530,801" shape="rect" onClick={(event)=>{event.preventDefault();alert("Vous ne voulez vraiment pas de mes notification ?");}} />
                                    </map>
                                </div>
                            </div>
                            <Contact/>
                            </Route>
                            <Route path="/projetcreate/" component={EditProjets}  />
                            <Route path="/projet/:id" component={article}  exact strict />
                            <Route path="/notif/unsubscribe" component={Unsubscribe} />
                            <Route component={NotFound} />
                        </Switch>
                    </Router>
                    <Footer/>
                    </div>
                </div>
            </Suspense>
        )
    }
}

export default App;