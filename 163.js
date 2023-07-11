//163 express module - 미들웨어

const express = require('express');
const app = express();

app.use((request, response, next) => {
    console.log('첫번째 미들웨어에 요청');
    request.user1 = 'jeongrae';
    next();
});

app.use((request, response, next) => {
    console.log('두번째 미들웨어에 요청');
    request.user2 = 'hojin';
    next();
});

app.use((request, response, next) => {
    console.log('세번째 미들웨어에 요청');
    response.writeHead('200', {'Content-Type' : 'text/html; charset = utf8'});
    response.write(`<div><p>${request.user1}</p></div>`);
    response.write(`<div><p>${request.user2}</p></div>`);
    response.end('<h1>express server response result</h1>'); 
});

app.listen(3000, () => {
    console.log('server is running port 3000!');
});
