import React from 'react';
import Profil from './ResumeData';
import {Redirect} from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'

class Unsubscribe extends React.Component{
constructor(props){
    super(props);
    this.state={
        redirect:false
    }
    this.recaptchaRef=React.createRef();
    this.handleunsubscribe=this.handleunsubscribe.bind(this);
}
handleunsubscribe(event){
    event.preventDefault();
    if(this.recaptchaRef.current.getValue()!==""){
        navigator.serviceWorker.ready.then(function(reg) {
            reg.pushManager.subscribe({userVisibleOnly: true}).then(function(subscription) {
              console.log(subscription.endpoint);
              fetch(Profil.ip+'/unsubscribe', {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
              },
                body: JSON.stringify(subscription)
              }).then(function(response) {
                return response.json();
              }).then(function(data) {
                this.setState({"redirect":true})
                console.log(data)
              }).catch(function(error){console.log(error)})
              this.setState({"redirect":true})
              
            })
          })
    }else{
      this.setState({"redirect":"true"})
    }
}


render(){
    if(this.redirect){
        return(<Redirect to="/"/>)
    }
    return(
        <div style={{width:"100%",height:"100%",marginTop:"15%",marginBottom:"25%"}}>
        <ReCAPTCHA style={{textAlign:"center",verticalAlign:"middle",marginLeft:"30%"}} ref={this.recaptchaRef} sitekey={Profil.RecaptchaKEY}theme="dark"/>
        <button style={{textAlign:"center",verticalAlign:"middle"}} onClick={this.handleunsubscribe}>Désactiver les notification ?</button>
        </div>

    )
}
}

export default Unsubscribe;