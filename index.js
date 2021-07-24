const express = require('express');
const bodyparser = require('body-parser');
const crypto = require('crypto');
const cryptoJs = require('crypto-js');
const nodeRsa = require('node-rsa');
const nodeTripleDes = require('node_triple_des');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000, function(req,res){
        console.log("Server Fired Up and Listening at Post 3000");
      }
    );

app.get('/', function(req,res){
    res.
    status(200).
    sendFile(path.join(__dirname, "public","index.html"));
});

app.get('/encrypt', function(req,res){
    res.
    status(200).
    sendFile(path.join(__dirname, "public","encrypt.html"));
});
app.get('/about', function(req,res){
    res.
    status(200).
    sendFile(path.join(__dirname, "public","about.html"));
});
app.get('/packages', function(req,res){
    res.
    status(200).
    sendFile(path.join(__dirname, "public","packages.html"));
});