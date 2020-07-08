import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Profil from './ResumeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Name:"",
            Email:"",
            Telephone:"",
            Subject:"",
            Message:"",
            fake:"",
        }
        this.submitform=this.submitform.bind(this)
        this.myChangeHandler=this.myChangeHandler.bind(this)
        this.recaptchaRef=React.createRef();
    }
    myChangeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
    submitform(event){
      event.preventDefault();
      const that = this;
      if(this.recaptchaRef.current.getValue()!=""){
        fetch(Profil.ip+'/mail', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({Name:this.state.Name,Email:this.state.Email,Message:this.state.Message,Subject:this.state.Subject,Telephone:this.state.Telephone,captcha:this.recaptchaRef.current.getValue()})
        }).then(function(response) {
          return response.json();
        }).then(function(data) {
          that.setState({"status":"Formulaire envoyer"})
        }).catch(function(error){console.log(error)})
        this.setState({"status":""})
      }else{
        this.setState({"status":"ReCaptcha Non valider"})
      }
    }
    render(){
        return(
            <div className="w3-padding-64 w3-content w3-text-grey" id="contact" style={{textAlign:"left"}}>
                <h2 className="w3-text-light-grey">Contact Me</h2>
                <hr style={{width:"200px"}} className="w3-opacity"/>

                <div className="w3-section">
                  <p><FontAwesomeIcon icon={["fas","phone"]} className="w3-text-white w3-xxlarge w3-margin-right"/> Phone: +33 6 01 09 57 40</p>
                  <p><FontAwesomeIcon icon={["fas","envelope"]} className="w3-text-white w3-xxlarge w3-margin-right"/> Email: maxime.lerichepro@gmail.com</p>
                </div><br/>
                <p>Envie de me contacter? Utilise ce formulaire:</p>

                <form onSubmit={this.submitform}>
                  <p><input className="w3-input w3-padding-16" type="text" placeholder="Nom" required name="Name" onChange={this.myChangeHandler}/></p>
                  <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email" onChange={this.myChangeHandler}/></p>
                  <p><input className="w3-input w3-padding-16" type="text" placeholder="Telephone"  name="Telephone" onChange={this.myChangeHandler}/></p>
                  <p><input className="w3-input w3-padding-16" type="text" placeholder="Sujet" required name="Subject" onChange={this.myChangeHandler}/></p>
                  <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message" onChange={this.myChangeHandler}/></p>
                  {this.state.status!=""&&<p>{this.state.status}</p>}
                  <ReCAPTCHA ref={this.recaptchaRef} sitekey={Profil.RecaptchaKEY}theme="dark"/>
                  <p> 
                    <button className="w3-button w3-light-grey w3-padding-large" type="submit">
                      <FontAwesomeIcon icon={["fas",'paper-plane']}/> Envoi du message
                    </button>
                    <input type="text" name="bot" onChange={this.myChangeHandler} style={{visibility:"hidden"}}/> 
                  </p>
                </form>
              </div>)
    }
}

export default Contact;