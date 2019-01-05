// Import Express Library
const express = require('express');

// Initiate an Express App
const app = express();

// Define a Port
const port = 8000;

// Import Functionalities
const file = require(`./services/ReadWriteLoad.js`);

// Define Server's Routes
app.get('/', (req, res) => {
    res.send('<h1>This is the Homepage</h1>');
})


// Get App Server to listen for requests
app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
});