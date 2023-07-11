//164 express module - 미들웨어

const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/multimedia`));
app.use((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    response.end('<img src = "/newyork.jpg" width = "100%"/>');
});

app.listen(3000, () => {
    console.log('server is running port 3000!');
});