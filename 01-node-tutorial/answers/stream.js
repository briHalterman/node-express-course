// STREAMS
// --Writeable
// --Readable
// --Duplex
// --Transform

const { createReadStream } = require( 'fs' );

// Create a read stream for the big file (../content/big.txt) with encoding of utf8 and a highWaterMark of 200
const stream = createReadStream('../content/big.txt', {
    encoding: 'utf8',
    highWaterMark: 200
});

// Initialize a counter to 0
let counter = 0;

// Handle the “data” event for the stream by incrementing the counter and logging the event result to the screen
stream.on('data', ( result ) => {
    counter++;
    console.log( `Data Chunk: ${result}` );
});

// Handle the “end” event by reporting the number of chunks received
stream.on('end', () => {
    console.log( `# of Chunks: ${counter}` );
});

// Handle the stream “error” event by logging the error to the console
stream.on('error', ( err ) => {
    console.log( err );
});