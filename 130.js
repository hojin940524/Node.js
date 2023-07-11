//130 list를 json 형식으로 파일에 저장하기

const fs = require('fs');
const userList = [
    {name: 'jeongrae', age: 20},
    {name: 'hojin', age: 30}
];

fs.writeFile('./list.json', JSON.stringify(userList), function(error){
    console.log('write end!');
});
