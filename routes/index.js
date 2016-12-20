var express = require('express');
var router = express.Router();
var app = express();
var https = require('https');
var http = require('http');
var firebase = require("firebase");
var request = require('request');

router.get('/data', function(req, res){
    res.json({
        text: "get request is good!"
    })
});

router.post('/postData', function(req, res){

    if(req.body.on === true){
      res.json({
          text:"its working, test: 1"
      })
    }else{
      res.json({
          text:"its working, test: 2"
      })
    }
});

module.exports = router;
