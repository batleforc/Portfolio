const webpush = require('web-push');
const express = require('express');
const app = express();
const http = require(`http`).createServer(app);
const path = require(`path`);
var SibApiV3Sdk = require('sib-api-v3-sdk');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const Config = require('./Config.all')

var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = Config.mail.apikey;
var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
emailCampaigns.name = "Email sent via the form of weebo.Fr";
emailCampaigns.subject = 'Form sended';
emailCampaigns.sender = {"name": "Maxime", "email":"maxleriche.60@gmail.com"};
emailCampaigns.type = "classic";

const port = process.env.PORT || 5000;
const client = new MongoClient(Config.mongo.url);
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
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());
 
webpush.setGCMAPIKey(Config.notif.gcm);
webpush.setVapidDetails(Config.notif.mailto,Config.notif.vapid1,Config.notif.vapid2);
app.use(express.static(path.join(__dirname, `/../dist/`)));
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
  const mail = req.body.mail;
  if(mail==null){
    return res.status(400).json("Mail non présent")
  }
  Projet.collection(Config.mongo.notif).deleteOne({mail:""},function(err,result){
    assert.equal(err,null);
    res.status(200).json("Unsubscribe done")
  })
})

app.get('/notif',(req,res)=>{
    const payload = JSON.stringify({"body": "test","title": "Maxleriche",	"action": [{"action": "explore","title": "Go to the site"},{"action": "close","title": "Close the notification"}]});
    webpush.sendNotification(test,payload).catch(error=>{
        console.error(error.stack)
    });
    return res.status(200).send("Send")
})
app.post('/mail',(req,res)=>{
  console.log(req.body)
  if(req.body.Name&&req.body.Email&&req.body.Subject&&req.body.Message){
    emailCampaigns.htmlContent= `You have received a new message from your website contact form.\n\nHere are the details:\n\nName: ${req.body.Name}\n\nEmail: ${req.body.Email}${req.body.Phone?"\n\nPhone:"+req.body.phone:""}\n\nMessage:\n${req.body.Message}`;
    apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
      console.log('API called successfully. Returned data: ' + data);
      console.log(emailCampaigns.htmlContent);
      res.status(200)
      }, function(error) {
      console.error(error);
      res.status(400).send(error)
      });
      return;
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
  console.log(projet)
  Projet.collection(Config.mongo.article).find({slug:projet}).toArray(function(err,docs){
    assert.equal(err,null);
    res.status(200).json(docs);
  })
})

app.get(`*`, (req,res) =>{
  res.sendFile(path.join(__dirname+`/../dist/index.html`));
});

http.listen(port);
console.log("app is listening on port "+port)