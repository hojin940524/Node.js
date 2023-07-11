//124 동기로 파일열기(읽기)

const fs = require('fs');

const data = fs.readFileSync('./message.txt');
const string = data.toString(); //읽은 데이터는 상수로 저장 -> toString()함수로 문자열 타입으로 변환
console.log('sync work1');
console.log(string);

//동기로 파일 읽기
//함수가 실행되면 해당파일을 읽으면서 다른 작업을 동시에 할 수 X
//설정파일을 읽고 적용하거나 로그파일을 보고 출입을 허가하는 등의 순서를 반드시!! 보장할 때 활용
