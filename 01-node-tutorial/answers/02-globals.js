// GLOBALS 

// This program should use console.log to write some globals to the screen
// Set an environment variable with the following command: export MY_VAR="Hi there!" 
// The program should then use console.log to print out the values of __dirname (a global) 
// and process.env.MY_VAR (process is also a global, and contains the environment variables you set.) 
// You could print out other globals as well
// For each of these programs, you invoke them with node to make sure they work

// NOTES 

// NO WINDOW !!!!

// __dirname    - path to current directory
// console.log(__dirname)

// __filename   - file name
// console.log(__filename)

// require      - function to use modules (CommonJS)
// console.log(require)

// module       - info about current module (file)
// console.log(module)

// process      - info about env where the prgram is being executed
// console.log(process)

 // Tutorial code

 console.log(__dirname);
 console.log(__filename);

 console.log(process.env.MY_VAR);

 setTimeout(() => {
    console.log('Hello node!')
 }, 1500);

