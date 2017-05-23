const express = require("express");

  class Name {
    
  queryDelivery(req, db){
    console.log(req);
  var x = req.query.name;
  var y = parseInt(req.query.data);

  return db.collection('deliveries').find(
        {match_id:parseInt(x)}
      )
      .skip((12*(y-1)))
      .limit(13)
      .toArray()
  }

  queryTeam(req, db) {

  var x = req.query.name;
  var y = parseInt(req.query.data);

  return db.collection('matches').find(
      {$or:[{"team1":
        {$regex : x + ".*"}
      },
      {"team2":
        {$regex : x + ".*"}
      }
      ]})
      .skip((12*(y-1)))
      .limit(13)
      .toArray()
  }

}

module.exports = Name;