// Use the fs.promises package
const { writeFile, readFile } = require('fs').promises;

// Create an async function called writer that writes three lines to a file, calling the writeFile function with await
// Put the await statements inside of a try/catch block!
const writer = async () => {
    try {
        await writeFile('./temporary/awaitFile.txt', 'Once Upon a Time, ');
        await writeFile('./temporary/awaitFile.txt', 'In a Faraway Place, ', { flag: 'a' });
        await writeFile('./temporary/awaitFile.txt', 'There was a Great Big Circus...', { flag: 'a' });
    } catch(err) {
        console.log("An error occurred: ", err);
    }
};

// Create another async function called reader that reads the file with await readFile and logs the return from the await to the screen
const reader = async () => {
    try {
       const awaitText = await readFile('./temporary/awaitFile.txt', 'utf8');
       console.log(awaitText);
    } catch(err) {
        console.log("An error occurred: ", err);
    } 
};

// Now we want to call the two functions in order, first the writer, and the reader
// But, be careful! These are asynchronous functions, so if you just call them, you don’t know what order they’ll occur in 
// And you can’t use await in your mainline code

// Write a third async function called readWrite
const readWrite = async () => {
    await writer();
    await reader();
};

readWrite();