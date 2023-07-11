//161 express module - response

// 모듈 설치 npm install express

const express = require('express');
const app = express();

app.get('/', (request, response) => {
    const result = [];
    const multipleNum = 9;
    for (let i = 1; i < 5; i++) {
        result.push({
            number: `${multipleNum}X${i}`,
            multiple: multipleNum * i
        });
    }
    response.send(result);
});

app.listen(3000, () => {
    console.log('server is running port 3000!');
})