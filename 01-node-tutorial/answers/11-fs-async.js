// FS-ASYNC

// Should load the fs module, and use the asynchronous function writeFile to write 3 lines to a file, ./temporary/fileB.txt
// Put console.log statements at various points in your code to tell you when each step completes
// Then run the code - Do the console log statements appear in the order you expect?
// Run the program several times and verify that the file is created correctly


// NOTES

// Now, be careful here! This is our first use of asynchronous functions in this class, but we are going to use them a lot!
// 1. You need to use the append flag for all but the first line
// 2. Each time you write a line to the file, you need to have a callback, because the write to the operation is asynchronous
// 3. For each line you write, you need to do the write for the line that follows in the callback 
//     – otherwise the operations won’t happen in order

// Here is how you might start:

// const { writeFile } = require('fs'); 
// console.log("at start");   
// writeFile(
//     './temporary/output.txt', 
//     'This is line 1\n', (err, result) => {
//         console.log("at point 1")  
//         if (err) {           
//             console.log("This error happened: ", err);
//     } else {       
//         // here you write your next line     
//     }   
// })  

// console.log('at end'); 


const { writeFile } = require('fs');

console.log('at start');

// “callback hell”

writeFile(
    './temporary/fileB.txt',
    'Oh Baby, You!',
    (err, result) => {
        console.log('at line 1')
        if (err) {
            console.log('an error happened at line 1', err)
        } else {
            writeFile('./temporary/fileB.txt',
            ' You got what I need!', 
            { flag: 'a'},
            (err, result) => {
                console.log('at line 2')
                if (err) {
                    console.log('an error happened at line 2', err)
                } else {
                    writeFile('./temporary/fileB.txt',
                    ` When you say he's just a friend, and you say he's just a friend.`, 
                    { flag: 'a' }, 
                    (err, result) => {
                        console.log('at line 3')
                        if (err) {
                            console.log('an error happened at line 3', err)
                        }
                    })
                }
            })  
        }
    }
);
