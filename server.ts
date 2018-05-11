import * as express from 'express';
// import express from 'express';

import { join } from 'path';
import open = require('open');

const port = 3000;
const app = express();

app.use(express.static('dist'));

app.get('/', function(request, response) {
  response.sendFile(join(__dirname, './dist/buttons.html'));
});

app.listen(port, function(error) {
  if (error) {
    console.log(error);
  } else {
    open('http://localhost:' + port);
  }
});