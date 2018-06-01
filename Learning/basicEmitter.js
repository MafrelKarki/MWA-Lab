var Emitter = require('events');
var emtr = new Emitter();

emtr.on('greet', function(msg, value, val){
    // console.log("Hello from MWA");
    console.log(msg);
    console.log(value);
    console.log(val);
});

console.log("______________________________________________");

emtr.on('greet', function(msg, value){
    console.log("*********************start*******************");
    console.log(msg);

    console.log("Inside the greet event without argument");

    console.log(value);

    console.log("********************end********************");
});

// console.log('Hello There');
emtr.emit('greet', "tero bau ko tauko", 12, "hello there");