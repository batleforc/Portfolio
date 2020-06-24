const webpush = require('web-push');
const express = require('express');
const app = express();
const http = require(`http`).createServer(app);
var SibApiV3Sdk = require('sib-api-v3-sdk');

var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';
var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
emailCampaigns.name = "Email sent via the form of weebo.Fr";
emailCampaigns.subject = 'Form sended';
emailCampaigns.sender = {"name": "Maxime", "email":"maxleriche.60@gmail.com"};
emailCampaigns.type = "classic";

const port = process.env.PORT || 5000;
var test={
    endpoint: 'https://fcm.googleapis.com/fcm/send/eRiR0_2zoBs:APA91bG1So1zvIlM6nV5HogtMrI-g0oCWqFApsQxO0b0pWt3b_G1_1oPBtTDns_StUhlXrQLuAMSC3aSBdAjRLaZL9TkGIdIZEZhfx7WvCwJiYnrFku6YwATsGPV-P429xX3CUtdCwQi',
    expirationTime: null,
    keys: {
      p256dh: 'BErEtn2a4y0VhXk_Soe43SZ0kUcTe8rkTHZXvaL7IC3SmUnscArKO3IbG20DtyBsGgVv3W5ZkLied7SaWD9QHPM',
      auth: '7W6d-LxiBHF7vRJUi3Cpig'
    }
  };
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());
 
webpush.setGCMAPIKey('AAAAKfLx5bw:APA91bHDv2yxoFf8YpH-sD6TtBfXJsDyoO3kf8mHVDEt9gfYMfjIbqD0R-zY3mRGZwe-LtYNlcFlDVzffirVhgE0z5tWAiylwHjcxJuSqOxZ9I0z9v-OxwbWkYvaCllU6GRm9O6JgwPk');
webpush.setVapidDetails(
  'mailto:maxime.lerichepro@gmail.com',
  "BOlh24I5TR7jPJJUNHT7UAG7oZr90fjAB8OGuPVvHhDC21VBfwypluguEysXpCuEK-paELmJFO1OXGM5raboQl8",
  "SFwya9cIk3PX_1tPBZ_KAk1XJSmGewOJX1xG3iDB6ho"
);
 
app.post('/subscribe',(req,res)=>{
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({"body": "Bienvenue sur le moteur de Template","title": "Template :D",	"action": [{"action": "explore","title": "Go to the site"},{"action": "close","title": "Close the notification"}]});

    console.log(subscription);
    test=subscription;
    webpush.sendNotification(subscription,payload).catch(error=>{
        console.error(error.stack)
    });
})
app.get('/',(req,res)=>{
    res.status(200).send("Index.JS Template API")
})
app.get('/notif',(req,res)=>{
    const payload = JSON.stringify({"body": "test","title": "Template :D",	"action": [{"action": "explore","title": "Go to the site"},{"action": "close","title": "Close the notification"}]});
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





http.listen(port);
console.log("app is listening on port "+ port)