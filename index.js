const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    const allowedOrigins = ['https://travis-ci.com/', 'http://localhost:4200', 'http://127.0.0.1:9000', 'http://localhost:9000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.setHeader('Content-Type', 'application/json');

    // Pass to next layer of middleware
    next();
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.get('/getUser', (req, res) => {
  res.send({
    user: 'pppp'
  })
})

app.post('/login', function (req, res) {
    const data = {
      userName: "userName",
      password: "password"
    };
    let response = {};
    // const login
    if (req.body.userName === data.userName && req.body.password === data.password) {
      response = {
        status: 'success',
        message: 'login successful'
      }
    } else {
      response = {
        status: 'error',
        message: 'No matching user name and password found'
      }
      res.status(404);
    }
    res.send(response);
})

app.listen(5000, () => console.log('Server running on port 5000'))