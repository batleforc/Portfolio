import React from 'react';
import Profil from './ResumeData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DisplayProjet extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Projet:[],
      test:""
    }
  }

  componentDidMount(){
    fetch(Profil.ip+'/projet',{method:'post',headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },body:JSON.stringify({proj:this.props.slug})})
    .then(res=>res.json())
    .then((data)=>{
      this.setState({Projet:data});
      this.setState({test:""});
    }).catch((res)=>this.setState({test:"Le serveur contenant les information des projet est innaccessible veuillez verifier votre connexion: " + res}))
  }
    render(){
        if(this.state.Projet[0]!=undefined){
            var todisplay = this.state.Projet[0].img==""?<FontAwesomeIcon icon={['fas','lightbulb']} size="10x" style={{display:"block",margin:"auto"}}/>:<img src={this.state.Projet[0].img}/>
            console.log(this.state.Projet[0])
        }
       
       return( <div>
        <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
        {todisplay}
            <h2 className="w3-jumbo"><span className="w3-hide-small"></span> Projet  {this.state.Projet[0]!=undefined?this.state.Projet[0].name:this.props.slug}</h2>
         </header>
         <h5>{this.state.Projet[0]!=undefined?this.state.Projet[0].description:""}</h5>
         <h3><a href={this.state.Projet[0]!=undefined?this.state.Projet[0].url:""}>Ce projet est accessible ici</a></h3>
         
        </div>)
    }
}

export default DisplayProjet;