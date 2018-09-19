const express = require('express');
const bodyParser = require('body-parser');
const bc = require('./controllers/books_controller.js') //creating a variable from the books_controller file that will keep track of the books array.

const app=express(); //will store a new server in the app const

app.use(bodyParser.json()) //top level middleware. Will change the text in the const app server from json to javascript
app.use( express.static( __dirname + "/../build") ); //express.static takes an argument that is the location of the folder files you want to serve when the server url is hit in a browser

app.get('/api/books',bc.read) //reaching out to grab info from /api/books; we then enter in the read method from books_controller using bc.read; in this case bc is the const/var we declared and we are destructering it by pulling out the .read method

app.post('/api/books',bc.create) //this allows us to grab the necessary information needed to make a new book and post it in the books array

app.put('/api/books/:id',bc.update) //this allows us to search for a book by its specific id and update its information

app.delete('/api/books/:id',bc.delete) //this allows us to search for a specific book by its id then allows us to delete it.

const port=3000
app.listen(port,()=>{console.log(`Hard to Port ${port}`)}) //tells the app server to listen on a specific port