// npm i -S express express-ws
const express = require('express');
const expressWs = require('express-ws');
const process = require('./wsRouter/processRouter.js');
// const user = require('./wsRouter/userRouter.js');

const app = express();
expressWs(app);

const baseUrl = '/api/cpts/ws/v1';
app.use(baseUrl, process);
// app.use('/ws/assistant/vioce', user);

app.listen(31001);
console.log('listen:31001');
