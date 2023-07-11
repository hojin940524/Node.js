//129 파일 리스트 출력하기

const testFolder = './';
const fs = require('fs');

const filenameList = fs.readdirSync(testFolder);

filenameList.forEach((fileName) => {
    console.log(fileName);
});