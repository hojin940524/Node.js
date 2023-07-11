//126 파일 내용 수정하기(비동기)

const fs = require('fs');
fs.readFile('./message.txt', (err, data) => {
    if(err) throw err;
    let contents = data.toString();
    contents = 'jeongrae\nis\ncute!!!';
    fs.writeFile('./message.txt', contents, function(error){
        console.log('write end!');
    });
});