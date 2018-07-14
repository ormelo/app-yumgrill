var express = require('express');
var app = express();
var path = require('path');
var webpush = require('web-push');
var fs = require('fs');
var url = require('url');
var redis = require('redis');

var pages = [];
  fs.readFile("public/index.html", "utf8", function(err, data) {
    pages.index = data;
  });

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/get-styled', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'getstyled.html'));
});

app.get('/fit-profile', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'steps.html'));
});

app.get('/shop', function(request, response) {
  response.redirect('/');
});

app.get('/home', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'home.html'));
});

app.get('/sendnotif', function(request, response) {
    // VAPID keys should only be generated only once.
    var vapidKeys = webpush.generateVAPIDKeys();

    webpush.setGCMAPIKey('AAAAb0Jcd5Y:APA91bF0de1UNG5yFMZinQhn1We89nTyigofC-kIrTGeM2RoI4bgSXUcYyUy17W4IgRJborqAENOb-t4zEo2MQD32LoAr64KFQdb8CPKdV-yOzVdG7RDhrWcqTvx96Yaf9_oQsX70Yl-');
    //Above is obtained from https://console.firebase.google.com/project/push-notification-web-d0beb/settings/cloudmessaging

    webpush.setVapidDetails(
      'mailto:sampath.oops@gmail.com',
      vapidKeys.publicKey,
      vapidKeys.privateKey
    );

    var pushSubscription = {
      endpoint: 'https://android.googleapis.com/gcm/send/fiSjtrIp9u0:APA91bF9zt6Q2nTmvAXeq7_bUzdD9GopkXfSmpW2kkbEGAluHCdzSRutceviXn4Xcu8E1r1PS4aUsfIXq4I5zTrxYNXaM03q0hUyH3QiNdpw7MqQt60xmuEPWEe3amVo3dH96TWOe_P5',
      keys: {
        auth: 'b-UTZCGu2p735HpH1g5g4w==',
        p256dh: 'BAtnK3PMuoczYKkRi2Iqzz-BJnPo1ZUhk_9ontvTVWcVLmFy44dN_RoiCfIy22y03TASWlbRxxuVlntwCVf8_e8='
      }
    };

    webpush.sendNotification(pushSubscription, 'First notification.')
    .then(function(result){
      console.log(result)
    }).catch(function(error){
      console.log('error', error)
    });

});

app.get('/fit-test', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'steps.html'));
});

app.get("/", function(request, response) {
  response.send(pages.index);
});

app.get("/set", function(request, response) {
  var client = redis.createClient('redis://rediscloud:vWISiXr6xai89eidZYXjM0OK3KeXfkPU@redis-16431.c10.us-east-1-2.ec2.cloud.redislabs.com:16431', {no_ready_check: true});
  response.send(client.set("welcome_msg", "Hello from Redis!"));
});

app.get("/get", function(request, response) {
  var REDISCLOUD_URL = 'redis-16431.c10.us-east-1-2.ec2.cloud.redislabs.com:16431';
  // res.send(process.env); 

//var redisURL = url.parse(process.env.REDISCLOUD_URL);
var client = redis.createClient('redis://rediscloud:vWISiXr6xai89eidZYXjM0OK3KeXfkPU@redis-16431.c10.us-east-1-2.ec2.cloud.redislabs.com:16431', {no_ready_check: true});
 // client.auth('vWISiXr6xai89eidZYXjM0OK3KeXfkPU');
// res.send(client);
  client.get("welcome_msg", function (err, reply) {
    if (reply != null) {
      response.send(reply);
    } else {
      response.send("key not found");
    }
  });
});

app.get("/redis", function(request, response) {
  response.send('redis test...');
});

/* app.get('/', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});*/

app.get('/onboard/step2', function(request, response) {
  response.writeHead(301,
  {Location: '/'}
);
response.end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
