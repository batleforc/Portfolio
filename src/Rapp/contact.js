import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
const recaptchaRef = React.createRef();

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
    }
    myChangeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
    submitform(event){
      event.preventDefault();
      console.log(recaptchaRef.current.getValue());
      if(recaptchaRef.current.getValue()!=""){
        console.log(this.state)
        fetch('http://localhost:5000/mail', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({Name:this.state.Name,Email:this.state.Email,Message:this.state.Message,Subject:this.state.Subject,Telephone:this.state.Telephone})
        }).then(function(response) {
          return response.json();
        }).then(function(data) {
          this.setState({"status":"Formulaire envoyer"})
          console.log(data)
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
                  <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: +33 6 01 09 57 40</p>
                  <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: maxime.lerichepro@gmail.com</p>
                </div><br/>
                <p>Envie de me contacter? Uttilise ce formulaire:</p>

                <form onSubmit={this.submitform}>
                  <p><input className="w3-input w3-padding-16" type="text" placeholder="Nom" required name="Name" onChange={this.myChangeHandler}/></p>
                  <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email" onChange={this.myChangeHandler}/></p>
                  <p><input className="w3-input w3-padding-16" type="text" placeholder="Telephone"  name="Telephone" onChange={this.myChangeHandler}/></p>
                  <p><input className="w3-input w3-padding-16" type="text" placeholder="Sujet" required name="Subject" onChange={this.myChangeHandler}/></p>
                  <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message" onChange={this.myChangeHandler}/></p>
                  {this.state.status!=""&&<p>{this.state.status}</p>}
                  <ReCAPTCHA ref={recaptchaRef} sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" theme="dark"/>
                  <p> 
                    <button className="w3-button w3-light-grey w3-padding-large" type="submit">
                      <i className="fa fa-paper-plane"></i> Envoi du message
                    </button>
                    <input type="text" name="bot" onChange={this.myChangeHandler} style={{visibility:"hidden"}}/> 
                  </p>
                </form>
              </div>)
    }
}

export default Contact;