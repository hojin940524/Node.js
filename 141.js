//141 쿠키(cookie) 생성

const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie' : ['soju = grilledPork', 'beer = chicken'] 
    });

    response.end(`<h1>${request.headers.cookie}</h1>`);
}).listen(12000, () => {
    console.log('서버가 동작중입니다, http://127.0.0.1:12000');
});