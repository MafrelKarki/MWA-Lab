var Emitter = require("events");
var util = require('util');

function ComproStudent(){
    Emitter.call(this);
    this.age = 25;
}

util.inherits(ComproStudent, Emitter);

var student = new ComproStudent();
// var emtr = new Emitter();

student.on('invite', function(age){
        console.log("Welcome to the campus");
        console.log(`You have been invited because your age is ${age}`);
});


ComproStudent.prototype.visit = function(age){
    this.emit('invite', age);
}

student.visit(student.age);    