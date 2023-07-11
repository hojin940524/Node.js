//동기와 비동기
//비동기 return 값이 없어 .. 그저 해!! => 빨라
//동기 return 값을 받기 전까지 기다려야 한다. 이 시간이 프로그램을 실행시간에 포함하기 때문

//123 파일로 출력하기(비동기방식으로 파일 저장)
const fs = require('fs');

const contents = 'jeongrae\nis\nhandsome';
fs.writeFile('./message.txt', contents, function(error){
    console.log('write end!!!');
});