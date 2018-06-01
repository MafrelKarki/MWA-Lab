'use strict';
var Emitter = require('events');

class Student extends Emitter {
    constructor(firstname, lastname, age) {
        super();
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){
        console.log(`Hey there, ${this.firstname} ${this.lastname}, What's up`);
    }
}

var student = new Student("Mafrel", "Karki");
student.on('click', function(){
        this.greet();
})

student.emit('click');