require('dotenv').config();
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const sequelize = require('./util/database');
const cors = require('cors');
const users = require('./routes/users');
const acl = require('express-acl');


app.use(bodyparser.json({ limit : '10mb'}));
app.use(bodyparser.urlencoded({ limit : '10mb', extended: false }));


// CORS POLICY
app.use(cors({
    origin: "http://localhost:3001",
    methods: ['GET', 'PUT', 'DELETE', 'POST'],
    allowedHeaders: ['Content-Type', 'x-access-token']
}));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


//ACL CONFIG
// acl.config({
//     baseUrl: '/',
//     fileName: 'nacl.json',
//     decodedObjectName: 'user',
//     defaultRole: 'anonymous'
//   })


//TEST ROUTE
app.get('/api', (req, res, next) => {
    res.send('Hello World');
});
 
//CRUD ROUTES
app.use('/api/users', users)


//TEST ROUTE
// app.use(express.static(path.join(__dirname,'build')))
// app.get('/*', (req, res, next) => {
//     res.sendFile(path.join(__dirname,'build','index.html'))
// });


//ERROR HANDLING
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});


//SYNC DATABASE
sequelize
    .sync()
    .then(result => {
        console.log("🚀🚀Database connected !🚀🚀");
        app.listen(3000);
    })
    .catch(err => console.log('⛔⛔Une erreur est survenue : ', err));
