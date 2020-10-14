import React from 'react';
import Profil from './ResumeData';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 
import LinkTool from '@editorjs/link';
import InlineCode from '@editorjs/inline-code';
import Table from '@editorjs/table';

class EditProjets extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pname:"",
            pslug:"",
            data:"",
            test:"",
            mdp:"",
            crea:false,
        }
        this.myChangeHandler=this.myChangeHandler.bind(this)
        this.FetchData=this.FetchData.bind(this)
        this.HandleSaveData=this.HandleSaveData.bind(this)
        this.rendereditorjs = this.rendereditorjs.bind(this)
    }

    myChangeHandler(event) {
        let nam = event.target.name;
        let val = nam==="pslug"?event.target.value.toString().replace(/[ ]{1,}/g, '-'):event.target.value;
        let val2 = nam==="pname"?val.toString().replace(/[ ]{1,}/g, '-'):val;
        if(nam==="pname") this.setState({"pslug":val2})
        this.setState({[nam]: val});
    }

    FetchData(){
        fetch(Profil.ip+'/projet',{method:'post',headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
        ,body:JSON.stringify({proj:this.state.pslug})})
        .then(res=>res.json())
        .then((data)=>{
          this.setState({data:data});
          this.setState({test:data.length===0?"Aucun projet trouver You can do it":"Chargement compléter"})
          this.setState({crea:data.length===0?true:false})
          if(data.length===1) this.rendereditorjs();
        }).catch((res)=>this.setState({test:"Le serveur contenant les information des projet est innaccessible veuillez verifier votre connexion: " + res}))
    }

    HandleSaveData(){
        this.editor.save().then((outputdata)=>{
            this.setState({data:outputdata})
            fetch(Profil.ip+'/projet/creadit',{method:'post',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
            body:JSON.stringify({mdp:this.state.mdp,pslug:this.state.pslug,pname:this.state.pname,data:outputdata})})
            .then(res=>res.json())
            .then((data)=>{
                var donnee = JSON.parse(data);
              if(donnee.status==="ALL IS GREEN"){
                this.setState({test:donnee.status})
              }else{
                this.setState({test:donnee.status?donnee.status:"Oh shit on here we go again"})
              }
            }).catch((res)=>this.setState({test:"Le serveur contenant les information des projet est innaccessible veuillez verifier votre connexion: " + res}))
            }).catch((error)=>{
                console.log('Saving failed: ',error)
            })
    }
    rendereditorjs(){
        document.getElementById("editorjs").innerHTML= "";
        console.log(this.state.data?this.state.data[0].data:"Not yet")
        this.editor = new EditorJS({
            holder:'editorjs',
            placeholder:"Prét a rédiger une présentation de projet",

            tools:{
                header:{
                class:Header,
                inlineToolbar:["link"]
                },
                list:{
                    class:List,
                    inlineToolbar:true
                },
                linkTool:{
                    class:LinkTool,
                    config:{
                        endpoint:Profil.ip+"/preview"
                    }
                },
                inlineCode: {
                    class: InlineCode,
                    shortcut: 'CMD+SHIFT+M',
                },
                table: {
                  class: Table,
                  inlineToolbar: true,
                  config: {
                    rows: 2,
                    cols: 3,
                  },
                },
            },
            data:this.state.data===""?{"time":1594080331524,"blocks":[{"type":"header","data":{"text":"Nom du projet","level":1}},{"type":"header","data":{"text":"Description:","level":4}},{"type":"header","data":{"text":"Status:","level":4}},{"type":"header","data":{"text":"Techno:","level":4}},{"type":"list","data":{"style":"unordered","items":["Moteur","Base de donnée","Le reste"]}},{"type":"header","data":{"text":"Heberger ? si oui ou et comment","level":4}}],"version":"2.18.0"}:this.state.data[0].data,
        })
    }

    componentDidMount(){
        this.rendereditorjs();
    }

    render(){

        return(
            <div>
                <h1>Form de création de projet</h1>
                <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">   
                <p><label htmlFor="pname">Nom</label>
                <input className="w3-input w3-padding-16" type="text" name="pname" id="pname" placeholder="Nom du projet" onChange={this.myChangeHandler}/></p>
                <p><label htmlFor="pslug">Slug</label>
                <input className="w3-input w3-padding-16" type="text" name="pslug" id="pslug" placeholder="Slug-du-projet" onChange={this.myChangeHandler} value={this.state.pslug}/></p>
                <p><button onClick={this.FetchData}>Fetch or not Fetch</button>{this.state.test}</p>
                <p>Editeur</p>
                <div id="editorjs" style={{backgroundColor:"white"}}></div>
                <p><input type="password" name="mdp" id="mdp" onChange={this.myChangeHandler}/></p>
                <p><button onClick={this.HandleSaveData}>Save Projet</button></p>
                </div>
            </div>)
    }
}

export default EditProjets;