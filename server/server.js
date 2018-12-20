var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// var MongoClient = require('mongodb').MongoClient;
// var template = require('./src/index');
// var devBundle = require('devBundle');

const app = express()
//comment out before building for production
// devBundle.compile(app)
const CURRENT_WORKING_DIR = process.cwd()
app.use('/public', express.static(path.join(CURRENT_WORKING_DIR, 'public')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.get('/api/userdata',(req, res) =>{
  res.send({ express: [{
                        'name': 'Nitesh Patare',
                        'amount': [],
                        'payment': {
                          'payFlag':'unpaid',
                          'date': null,
                        }
                      },
                      {
                        'name': 'Nitesh2 Patil',
                        'amount': ['4000'],
                        'payment': {
                          'payFlag':'paid',
                          'date': 'Thu Dec 06 2018 09:38:09 GMT+0530' ,
                        }
                      },
                      {
                        'name': 'Nitesh2 Patil',
                        'amount': ['4000'],
                        'payment': {
                          'payFlag':'paid',
                          'date': 'Thu Dec 06 2018 09:38:09 GMT+0530' ,
                        }
                      },
                      {
                        'name': 'Nitesh Patare',
                        'amount': [],
                        'payment': {
                          'payFlag':'unpaid',
                          'date': null,
                        }
                      },
                      {
                        'name': 'Nitesh Patare',
                        'amount': [],
                        'payment': {
                          'payFlag':'unpaid',
                          'date': null,
                        }
                      },
                      {
                        'name': 'Nitesh2 Patil',
                        'amount': ['4000'],
                        'payment': {
                          'payFlag':'paid',
                          'date': 'Thu Dec 06 2018 09:38:09 GMT+0530' ,
                        }
                      },
                      {
                        'name': 'Nitesh2 Patil',
                        'amount': ['4000'],
                        'payment': {
                          'payFlag':'paid',
                          'date': 'Thu Dec 06 2018 09:38:09 GMT+0530' ,
                        }
                      }]
          });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'public/build')));
  // Handle React routing, return all requests to React app
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
  });
}

let port = process.env.PORT || 5000
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})

// // Database Connection URL
// const url = process.env.MONGODB_URI || 'mongodb://firstuser:9007310163bdae6047c91fdcd8dfdd6f@ds027748.mlab.com:27748/firstdb';

// MongoClient.connect('url', function (err, client) {
//   if (err) throw err
//   console.log("Connected successfully to mongodb server");
// //  db.close();
// //   var db = client.db('animals')
// //   db.collection('mammals').find().toArray(function (err, result) {
//   if (err) throw err
//     console.log(result)
//   // })
// })