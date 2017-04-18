var MongoClient = require('mongodb').MongoClient;

var YachtQuery = function(collectionName){
//mongodb runs on my computer as a url
this.url = "mongodb://localhost:27017/yacht_site";
this.collectionName = collectionName;
};

YachtQuery.prototype = {

  //getting data from the db
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){

      if (db){
        var collection = db.collection(this.collectionName);
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
        })
      }

    }.bind(this))
  },

//writing data to the db
add: function(yachtToAdd, onQueryFinished){
  MongoClient.connect(this.url, function(err, db){
    if(db){
      var collection = db.collection(this.collectionName);
      collection.insert(yachtToAdd);
      collection.find().toArray(function(err,docs){
        onQueryFinished(docs);
      })
    }
  }.bind(this));

}

}

module.exports = YachtQuery;