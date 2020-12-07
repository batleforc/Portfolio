const webpush = require('web-push');
const express = require('express');
const app = express();
const http = require(`http`).createServer(app);
const path = require(`path`);
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const Config = require('./Config.all')
const fetch = require("node-fetch");
const bcrypt = require('bcrypt');
const {getLinkPreview} =require('link-preview-js');
const compression = require('compression');
var debug = process.argv.slice(2).includes("-d")

const port = process.env.PORT || 5000;
const client = new MongoClient(Config.mongo.url,{useUnifiedTopology: true});
var Projet;
client.connect(function(err){
  if(err==null){
    console.log("Loged in")
    Projet= client.db(Config.mongo.Bdd);
  }else{
    console.log("Erreur: ",err)
  }
})

var test;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", debug?"localhost:5000":"maxleriche.tech"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());
app.use(compression());
webpush.setGCMAPIKey(Config.notif.gcm);
webpush.setVapidDetails(Config.notif.mailto,Config.notif.vapid1,Config.notif.vapid2);
app.use(express.static(path.join(__dirname, `/../build/`)));
app.post('/subscribe',(req,res)=>{
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({"body": "Merci d'avoir accepter les notification"+subscription.mail?subscription.mail:" Malgrer sa vous ne pouvez pas désactiver votre souscription, celle ci sera désactiver apres 1 mois par défault","title": "Portfolio Max",	"action": [{"action": "explore","title": "Go to the site"},{"action": "close","title": "Close the notification"}]});
    var subs={};
    subs.endpoint=subscription.endpoint;
    subs.keys=subscription.keys
    subs.mail=subscription.mail;
    console.log(subscription);
    Projet.collection(Config.mongo.notif).find({"endpoint":subs.endpoint}).toArray(function(err,docs){
      if(docs.length==0){
        Projet.collection(Config.mongo.notif).insertOne(subs,function(err,result){
          console.log(err);
          console.log(result)
          assert.equal(err,null);
        })
      }
    })
    test=subscription;
    webpush.sendNotification(subscription,payload).catch(error=>{
        console.error(error.stack)
    });
})
app.post('/unsubscribe',(req,res)=>{
  var mail ={mail: req.body.mail}
  if(mail==null){
    if(req.body.endpoint==null){
      return res.status(400).json("Mail non présent")
    }
   mail={"endpoint":req.body.endpoint}
  }
  Projet.collection(Config.mongo.notif).deleteOne({mail},function(err,result){
    assert.equal(err,null);
    res.status(200).json("Unsubscribe done")
  })
})

app.post('/notif',(req,res)=>{
  if(!req.body.mdp) return res.status(418).json({"status":"Dont dream you are just a teapot"})
  bcrypt.compare(req.body.mdp, Config.password.hash, function(err, result) {
    if(err) return res.status(400).json(err);
    if(result){
      const payload = JSON.stringify({"body": "test","title": "Maxleriche",	"action": [{"action": "explore","title": "Go to the site"},{"action": "close","title": "Close the notification"}]});
    Projet.collection(Config.mongo.notif).find({}).toArray(function(err,docs){
      if(err) return res.status(400).send("Max ta fait de la merdeeeeeee");
      docs.forEach(element => {
        webpush.sendNotification(element,payload).catch(error=>{
          console.error(error.stack)
      });
      });
      return res.status(200).send("Send")
    })
    }
    else{
      return res.status(418).json(JSON.stringify({status:"Dont dream you are just a teapot"}))
    }
  });
    
   
})
app.post('/mail',async (req,res)=>{
  console.log(req.body)
  if(req.body.captcha){
    const params = new URLSearchParams();
    params.append('secret', Config.recaptcha.private);
    params.append('response', req.body.captcha);
    params.append('remoteip', req.headers['x-forwarded-for'] || req.connection.remoteAddress);
    var options = {
      method: 'POST',
      url: 'https://www.google.com/recaptcha/api/siteverify',
      headers: {
        accept: 'application/json',
      },
      body: params
      };
      const response = await fetch( 'https://www.google.com/recaptcha/api/siteverify',options);
    const body=await response.json();
    console.log(body)
    if (!response.ok) return res.status(400).json(response.statusText);
    if(body.success==false) return res.status(401).json(body);
  }
  if(req.body.Name&&req.body.Email&&req.body.Subject&&req.body.Message){
    var options = {
      method: 'POST',
      url: 'https://api.sendinblue.com/v3/smtp/email',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': Config.mail.apikey
      },
      body: JSON.stringify({
        sender: {email: 'maxime@maxleriche.tech'},
        to: [{email: 'maxleriche.60@gmail.com', name: 'maxime'}],
        replyTo: {email: 'maxime@maxleriche.tech', name: 'maxime'},
        textContent:`You have received a new message from your website contact form.\n\nHere are the details:\n\nName: ${req.body.Name}\n\nEmail: ${req.body.Email}${req.body.Telephone?"\n\nPhone:"+req.body.Telephone:""}\n\nMessage:\n${req.body.Message}`,
        subject: 'Message en provenance de maxleriche.tech'
      })
};
    const response = await fetch( 'https://api.sendinblue.com/v3/smtp/email',options);
    const body=await response.json();
    console.log(response)
    console.log(body)
      if (!response.ok) return res.status(400).json(response.statusText+ body);
      return res.status(200).send(body)
    
  }
  res.status(400).send("Bad request arg isnt well formed")
})

app.get('/projet',(req,res)=>{
  Projet.collection(Config.mongo.article).find({}).toArray(function(err,docs){
    assert.equal(err,null);
    res.status(200).json(docs);
  })
})
app.get('/projet/count',(req,res)=>{
  Projet.collection(Config.mongo.article).find({}).toArray(function(err,docs){
    assert.equal(err,null);
    res.status(200).json(docs.length);
  })
})
app.post('/projet',(req,res)=>{
  const projet = req.body.proj;
  Projet.collection(Config.mongo.article).find({slug:projet}).toArray(function(err,docs){
    assert.equal(err,null);
    console.log(docs)
    res.status(200).json(docs);
  })
})

app.post('/projet/creadit',async (req,res)=>{
  if(!req.body.mdp) return res.status(418).json({"status":"Dont dream you are just a teapot"})
  bcrypt.compare(req.body.mdp, Config.password.hash, function(err, result) {
    if(err) return res.status(400).json(err);
    if(result&&req.body.pslug&&req.body.pname&&req.body.data){
      Projet.collection(Config.mongo.article).updateOne(
        {slug:req.body.pslug},
        {$set:{name:req.body.pname,slug:req.body.pslug,data:req.body.data,img:""}},
        {upsert:true},
        (err,r)=>{
          assert.equal(null,err)
          console.log(r)
          res.status(200).json(JSON.stringify({"status":"ALL IS GREEN"}))
      })
    }
    else{
      return res.status(418).json(JSON.stringify({status:"Dont dream you are just a teapot"}))
    }
  });
})

app.get('/preview',async (req,res)=>{
  console.log(req.query)
  var url = req.query.url;
  url = url.includes('http')?url:"https://"+url;
  getLinkPreview(url)
    .then(data=>{
      if(data){
        var response={
          "success" : 1,
          "meta": {
              "title" : data.title,
              "domaine":data.url.replace('http://',"").replace('https://',"").replace('/*',""),
              "description" :data.description,
              "image" : {
                  "url" : data.images[0]?data.images[0]:data.favicons[0]?data.favicons[0]:""
              },
              "url":url
          }
      }
      return res.status(200).json(response)
      }
    }).catch(err=>{
      return res.status(404).json(JSON.stringify({success:0}));
    })
})

app.get(`*`, (req,res) =>{ res.sendFile(path.join(__dirname+`/../build/index.html`));});



http.listen(port);
console.log("app is listening on port "+port)