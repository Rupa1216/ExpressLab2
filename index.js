// Import Express Library
const express = require('express');

// Initiate an Express App
const app = express();

// Define a Port
const port = 8000;

// Import Functionalities
const file = require(`./services/functionalities.js`);

// Define Server's Routes
app.get('/', (req, res) => {
    res.send('<h1>This is the Homepage</h1>');
})

app.get('/class/add', (req,res) => {
    res.send('Hello');
})

/* Successful response:
{ 
  added: { name: 'John', age: 30, city: 'NYC', grade: 75 }
  class: 'physics'
}

Error message:
{ 
  error: 'Please fill out all the information for the student'
}
*/

app.get('/class/list', (req,res) => {
    res.send('Hello');
})

/* Successful response:
{
  students: [
    { name: 'John', age: 30, city: 'NYC', grade: 75 },
    { name: 'Emily', age: 28, city: 'LA', grade: 80 }
  ]
}
Error message:
{ 
  error: 'Class physicslol doesn't exist.'
}
*/

app.get('/class/listfailing', (req,res) => {
    res.send('Hello');
})

app.get('/class/listfromcity', (req,res) => {
    res.send('Hello');
})

// Get App Server to listen for requests
app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
});