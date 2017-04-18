var express = require('express');
var app = express();
var yachtRouter = express.Router();
var YachtQuery = require('../db/YachtQuery');
var yachtQuery = new YachtQuery('yachts');

yachtRouter.get('/', function(req, res){
    yachtQuery.all(function(docs){
      res.json(docs);
    })

})





module.exports = yachtRouter;