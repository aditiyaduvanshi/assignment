const Abc = require('./Name.js');

let name = new Abc();
const request = require('supertest');
const express = require('express');

const query = require('query-parser');

var app = express();
//import {Name} from './Name.js';
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
  res.send('index.html');

});


app.get('/auto', (req, res)=>{

    
    
    const MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://localhost:27017/ipl', (err, db) => {
    if (err) {
      console.log('Unable to connect to server');
    }
    else{
      main(db, req, res);
    } 

  });
});




const main = (db, req, res) => {


      name.queryTeam(req, db)
      .then((docs) =>{

        res.json(docs)

      //console.log(JSON.stringify(docs,undefined,2));
      }),(err) =>{
      console.log('Unable to fetch Todos',err);
      }

    //db.close();

} 



app.get('/delivery', (req, res)=> {
  
    //console.log(x)
  const MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://localhost:27017/ipl', (err, db) => {
    if (err) {
      console.log('Unable to connect to server');
    }
    else{
      sec_main(db, req, res);
    }
    

    //db.close();

  });

});



const sec_main = (db, req, res) => {

      name.queryDelivery(req, db)
      .then((docs) =>{

        res.json(docs)

      //console.log(JSON.stringify(docs,undefined,2));
      }),(err) =>{
        console.log('Unable to fetch Todos',err);
      }
}



 


app.listen(3000);

module.exports.app =app;


