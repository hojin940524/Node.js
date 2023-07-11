//132 파일 이름 바꾸기

const fs = require('fs');

const renameFile = (before, after) => {
    fs.rename(before, after, (err) => {
        if(err) console.log(`ERROR:${err}`);
    });
};

const before = './message.txt';
const after = './message_rename.txt';

renameFile(before, after);