//125 비동기로 파일 열기

const fs = require('fs');

fs.readFile('./message.txt', (err, data) => {
    if(err) throw err;
    console.log('async work01');
    console.log(data.toString());
});

//비동기로 파일 읽기
//처리 속도: 동기방식 << 비동기방식
//여러개의 파일에 여러 줄이 있는 경우 비동기의 장점을 확인 할 수 있음
//Tip> 프로그램 형태에 따라 순서가 중요하다면 '동기', 순서가 중요하지 않다면 '비동기' 방식 사용