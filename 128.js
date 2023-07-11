//128 디렉토리 만들기

const fs = require('fs');

const dirName = `${__dirname}/img`;

if(!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
}