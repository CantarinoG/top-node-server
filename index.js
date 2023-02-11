const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {
    response.status(200).send( await readFile('./index.html', 'utf8') );
});

app.get('/index', async (request, response) => {
  response.status(200).send( await readFile('./index.html', 'utf8') );
});

app.get('/about', async (request, response) => {
    response.status(200).send( await readFile('./about.html', 'utf8') );
});

app.get('/contact-me', async (request, response) => {
    response.status(200).send( await readFile('./contact-me.html', 'utf8') );
});

app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "/" + "style.css");
});

app.use( async (request, response) => {
    response.status(404).send( await readFile('./404.html', 'utf8'));
});

app.listen(process.env.PORT || 3000);