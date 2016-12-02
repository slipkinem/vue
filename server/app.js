/**
 * Created by slipkinem on 2016/11/28.
 */
'use strict';
const express = require('express');
const fs = require('fs');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

app.set('port',(process.env.port || 3030));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));
app.use(express.static(path.join(__dirname,'../dist')));

routes(app);

app.listen(app.get('port'),() =>
  console.log('Visit http://localhost:' + app.get('port'))
);