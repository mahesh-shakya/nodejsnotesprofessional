// const event = require('events');


const EventEmitter= require('events');
const event = new EventEmitter();
// EventEmitter is a class of a events module,
// Here we are creating object using EventEmitter class


// event working
event.on('sayMyName', ()=>{
    console.log('Your name is Mahesh');
});

// multiple events with same name in node js
event.on('sayMyName', ()=>{
    console.log('Your name is shakya');
});


event.emit('sayMyName');
// Event created with name sayMyName & event call
// multiple events with same name in node js



/*=====================================================*/
event.on('checkpage', (statuscode, msg)=>{
    console.log(`Status code is ${statuscode} and the page is ${msg}`);
})
event.emit('checkpage', 200, 'ok');
// passing argument to events