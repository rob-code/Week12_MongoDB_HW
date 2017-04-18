var express = require('express');
var app = express();
var yachtRouter = express.Router();
var YachtQuery = require('../db/YachtQuery');
var yachtQuery = new YachtQuery('yachts');

//SHOW ALL
yachtRouter.get('/', function(req, res){
    yachtQuery.all(function(docs){
      res.json(docs);
    })

})

//SHOW BY ID IN THE RETURNED DOCS ARRAY
yachtRouter.get('/:id', function(req, res){
  yachtQuery.all(function(docs){
    res.json(docs[req.params.id])
  })
})

//UPDATE
yachtRouter.put('/:id', function(req, res){
  yachtQuery.all(function(docs){
    docs[req.params.id] = req.body
    res.json(docs)
  })

})

//CREATE
yachtRouter.post('/', function(req, res){

  var newYacht = {
    name: req.body.name,
    type: req.body.type,
    length: req.body.length,
    engine: req.body.engine,
    review: req.body.review
  }

  yachtQuery.add(newYacht, function(docs){
    res.json(docs);
  })
})


//DELETE




module.exports = yachtRouter;