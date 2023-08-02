// FS-SYNC

// Should load writeFileSync and readFileSync from the fs module
// Then use writeFileSync to write 3 lines to a file, ./temporary/fileA.txt, using the append flag for each line after the first
// Then use readFileSync to read the file, and log the contents to the console

//NOTE
// Be sure you create the file in the temporary directory
// That will ensure that it isn’t pushed to github when you submit your answers


const { readFileSync, writeFileSync } = require('fs');

console.log('start');

// const fs = require('fs');
// fs.readFileSync;

const fileA = readFileSync('./temporary/message.txt', 'utf8');
const fileB = readFileSync('./content/fileB.txt', 'utf8');

// console.log(fileA, fileB);

writeFileSync(
    './temporary/fileA.txt',
    `Here is the result : ${fileA}, ${second}`,
    { flag: 'a' }
);

// console.log('done with this task');
// console.log('starting the next one');

console.log(fileA);