import React from 'react';
import Profil from './ResumeData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Projet extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Projet:[],
      test:""
    }
    if(localStorage.getItem("Projet"))
      this.state.Projet=(JSON.parse(localStorage.getItem("Projet")))
  }

  componentDidMount(){
    fetch(Profil.ip+'/projet',{method:'get',headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
    .then(res=>res.json())
    .then((data)=>{
      this.state.Projet=[];
      this.setState({Projet:data});
      this.setState({test:""});
      localStorage.setItem("Projet",JSON.stringify(data));
    }).catch((res)=>{
      if(localStorage.getItem("Projet"))
      {
        var swap = JSON.parse(localStorage.getItem("Projet"));
        this.setState({Projet:swap});
        this.setState({test:""});

      }else
        this.setState({test:"Le serveur contenant les information des projet est innaccessible veuillez verifier votre connexion: " + res})
    })
  }
    render(){
       return( 
           <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="projets">
                 <h2 className="w3-text-light-grey">Mes projets </h2>
                 <hr style={{width:"200px"}} className="w3-opacity"/>
                 <div className="projWrapper">
                   <div className="projGrid">
                   {this.state.Projet.length===0&&<h3 style={{textAlign:"center"}}>Aucun projet n'est actuellement accessible</h3>}
                   {this.state.Projet.map((value,index)=>{
                    var todisplay = value.img===""?<FontAwesomeIcon icon={['fas','lightbulb']} size="5x" style={{display:"block",margin:"auto"}}/>:<img src={value.img} alt="représentation du projet"/>
                   return(<div key={value.slug} className="projItem" style={{display:"inline-block",background:'#222',margin:"2.5%",height:"fit-content",paddingTop:"20px",paddingBottom:"6px"}}><a href={"/projet/"+value.slug}>
                     {todisplay}
                     <p style={{textAlign:"center"}}>{value.name}</p>
                     </a>
                     </div>)
                  })}
                   </div>
                </div>
                
            </div>)
    }
}

export default Projet;