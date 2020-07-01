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
  }

  componentDidMount(){
    fetch(Profil.ip+'/projet',{method:'get',headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
    .then(res=>res.json())
    .then((data)=>{
      this.setState({Projet:data});
      this.setState({test:""});
    }).catch((res)=>this.setState({test:"Le serveur contenant les information des projet est innaccessible veuillez verifier votre connexion: " + res}))
  }
    render(){
       return( 
           <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="projets">
                 <h2 className="w3-text-light-grey">Mes projets </h2>
                 <hr style={{width:"200px"}} className="w3-opacity"/>
                 <div className="projWrapper">
                   <div className="projGrid">
                   {this.state.Projet.map((value,index)=>{
                    var todisplay = value.img==""?<FontAwesomeIcon icon={['fas','lightbulb']} size="10x" style={{display:"block",margin:"auto"}}/>:<img src={value.img}/>
                   return(<div key={value.slug} className="projItem" style={{display:"inline-block",background:'#222',margin:"2.5%",padding:"8px",height:"fit-content"}}><a href={"/projet/"+value.slug}>
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