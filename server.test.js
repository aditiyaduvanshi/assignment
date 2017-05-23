const expect = require('expect');
const request = require('supertest'); 
//const util = require('./server');
const Abc = require('./Name.js');

var httpMocks = require('node-mocks-http');

let names = new Abc();


  it('teamtest', (done) => {
      const mongo = require('mongodb').MongoClient;
console.log('hi')
  mongo.connect('mongodb://localhost:27017/ipl', (err, db) => {
    //console.log('hi1')
    if (err) {
      console.log('Unable to connect to server');
    }
    else{
      var request  = httpMocks.createRequest();
      request.query = {
        name: 'raj',
        data: '2'
      }

        names.queryTeam(request , db)
        .then((docs) => {
          console.log(docs)
          expect(res).toBeA('object');
          done();
        })
  .catch((error) => {
    done()
  })

      
        //var res1 = JSON.parse(res);
   
    }
  });
  });
