import React from 'react';
import Profil from './ResumeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import parse from 'html-react-parser';
import UrlPreview from './urlpreview';

class DisplayProjet extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Projet:[],
      test:""
    }
    if(localStorage.getItem("Projet"))
      this.state.Projet.push(JSON.parse(localStorage.getItem("Projet")).find(element=>element.slug===this.props.slug))
  }

  componentDidMount(){
    fetch(Profil.ip+'/projet',{method:'post',headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },body:JSON.stringify({proj:this.props.slug})})
    .then(res=>res.json())
    .then((data)=>{
      this.state.Projet=[];
      this.setState({Projet:data});
      this.setState({test:""});
    }).catch((res)=>{
      if(localStorage.getItem("Projet"))
      {
        var swap = []
        swap.push(JSON.parse(localStorage.getItem("Projet")).find(element=>element.slug===this.props.slug))
        this.setState({Projet:swap});
        this.setState({test:""});
      }
      else
        this.setState({test:"Le serveur contenant les information des projet est innaccessible veuillez verifier votre connexion: " + res})
    })
  }
    render(){
        if(this.state.Projet[0]!==undefined){
            var todisplay = this.state.Projet[0].img===""?<FontAwesomeIcon icon={['fas','lightbulb']} size="10x" style={{display:"block",margin:"auto"}}/>:<img src={this.state.Projet[0].img} alt="Représentation du projet"/>
        }
       return( 
         <div>
          {this.state.Projet[0]===undefined&&<h1>Please wait the project is loading {this.state.test}</h1>}
          {todisplay}
          <div style={{textAlign:"left"}} className="w3-padding-64 w3-content">
          {this.state.Projet[0]&&this.state.Projet[0].data.blocks.map(function(value,index){
            var render
            if(value.type==="header"){
              render =value.data.level===1?<h1 key={value.data.text+value.data.level}>{parse(value.data.text)}</h1>:value.data.level===2?<h2 key={value.data.text}>{value.data.text}</h2>:value.data.level===3?<h3 key={value.data.text}>{value.data.text}</h3>:value.data.level===4?<h4 key={value.data.text}>{value.data.text}</h4>:<h5 key={value.data.text}>{value.data.level}</h5>;
            }
            else if (value.type==="list"){
              render=<ul key={value.data.style}>{value.data.items.map(function(item){
                return <li key={item}>{parse(item)}</li>
              })}</ul>
            }
            else if(value.type==="linkTool"){
              render=<UrlPreview key={value.data} info={value.data} />
            }
            else if(value.type==="paragraph"){
              render = <p key={value.data.text}>{parse(value.data.text)}</p>
            }
            else if(value.type==="table"){
              render=(
                <table key={value.type} style={{width:"100%",backgroundColor:"white",color:"black",borderCollapse:"collapse"}}>
                  <tbody>
                    {value.data.content.map(function(row){
                      return <tr  key={row}>{row.map(function(col){
                        return(<td style={{border:"thin solid black"}} key={col}>{col}</td>)
                      })}</tr>
                    })}
                  </tbody>
                </table>
              )
            }
            return(render)
          })}
          </div>
        </div>)
    }
}

export default DisplayProjet;