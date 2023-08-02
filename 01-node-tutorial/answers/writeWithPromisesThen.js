// Use the fs.promises package
const { writeFile, readFile } = require( 'fs' ).promises;

// Use the .then style of asynchronous programming
// Sprinkle console.log statements in your code so that you understand the order of execution

// Write line 1
console.log('Write an awesome line 1');
writeFile(
    './temporary/thenFile.txt', 
    ` Everything is Awesome!!!! `
)
.then(() =>{
    // Write line 2
    // Return the promise so you can chain the .then statements
    console.log('Write an awesome line 2');
    return writeFile(
        './temporary/thenFile.txt', 
        ` Everything is *~AWESOME~*! Everything is cool when you're part of the team! `, 
        { flag: 'a' }
    );
}) 
.then(() => {
    // write the third line
    console.log('Write an awesome line 3');
    return writeFile(
        './temporary/thenFile.txt',
        ` Everything is *~AWESOME~* when you're living out a dream! `,
        { flag: 'a' }
    );
}) 
//  Write two more .then blocks
.then(() => {
    // Call readFile to read it back out
    return readFile('./temporary/thenFile.txt', 'utf8');
}) 
.then((data) => {
    // Log the data to the screen
    console.log(`The file reads: '${data}'. The first lines of a song by Tegan And Sara for The LEGO® Movie`);
}) 
.catch((error) => {
    console.log("An error occurred: ", error);
});