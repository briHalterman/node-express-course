// PATH

// Should load the path module, which is another built in module
// Then call path.join to join up a sequence of alphanumeric strings
// Should print out the result

// Note

// Result will work one way on Windows, where the directory separator is a backslash, 
// and a different way on other platforms, where the directory separator is a slash

const path = require( 'path' );

console.log( path.sep );

const filePath = path.join( '/content/', 'subfolder', 'test.txt' );
console.log( filePath );

const base = path.basename( filePath );
console.log( base );

const absolute = path.resolve( __dirname, 'content', 'subfolder', 'test.txt' );
console.log( absolute );
