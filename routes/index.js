var express = require('express');
var router = express.Router();
var app = express();
var https = require('https');
var http = require('http');
var firebase = require("firebase");
var request = require('request');

/* GET home page. */
router.get('/', function(req, res){
    res.render('index', {
      title: 'Index'
    });
});

router.post('/postDataCall', function(req, res){
    if(req.body.data === "yes"){
      res.json({"data":"no"})
    }else{
      res.json({"data":"yes"})
    }
});

module.exports = router;
