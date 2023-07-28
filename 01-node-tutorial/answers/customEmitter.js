// EVENTS
// Event Driven Programming
// Used heavily in Node.js
// Listen for events and then fire functions

// Create one or several emitters

// Tutorial Emitter
const DemoEventEmitter = require( 'events' );

const customEmitter = new DemoEventEmitter();

// ORDER MATTERS! LISTEN THEN EMIT

customEmitter.on('response', ( name, id ) => {
    console.log( `data recieved user ${ name } with id: ${ id }` );
});

customEmitter.on('response', () => {
    console.log( `Radiate Positivity!` );
});

customEmitter.emit( 'response', 'donny', 34 )

// Trigger events with a timer
// const FamilyGreetingEventEmitter = require( 'events' );

// const greetingEmitter = new FamilyGreetingEventEmitter();

// setInterval(()=> {
//     greetingEmitter.emit( "timer", "BabyRoo!" );
// }, 4000);

// greetingEmitter.on("timer", ( msg ) => console.log( msg ));


// Wait on Event
// const EventEmitter = require( 'events' );

// const emitter = new EventEmitter();

// const waitForEvent = () => {
//     return new Promise((resolve) => {
//         emitter.on("happens", (msg) => resolve(msg));
//     })
// };

// const doWait = async () => {
//     const msg = await waitForEvent();
//     console.log("We got an event! Here it is: ", msg);
// };

// doWait();
// emitter.emit("happens", "Hello World!");