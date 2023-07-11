//127 파일에 내용 추가

const fs = require('fs');

const list = [1,2,3,4,5];
list.forEach(item => fs.appendFile('./chapters.txt', `chapter${item}\n`, function(error){
    console.log('write end!');
}));