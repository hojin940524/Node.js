//131 파일을 json 형식으로 불러오기

const fs = require('fs');

fs.readFile('./list.json', (err, data) => {
    if(err) throw err;
    const json = JSON.parse(data.toString());
    for (let i = 0; i <= 1; i++) {
        console.log('name: ',json[i].name);
        console.log('age: ',json[i].age);
    }
});