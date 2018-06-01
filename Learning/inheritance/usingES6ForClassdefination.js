'use strict';

class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){
        console.log(`Hey ${this.firstname} ${this.lastname}, How are you doing today?`);
    }
}

var person = new Person("Mafrel", "Karki");
// var person = new Person();
console.log(person.greet());


function People(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
};

People.prototype.greet = function(){
    console.log(`I'm created using funtion constructor`);
    console.log(`Hello ${this.firstname} ${this.lastname}, Im stunned`);
};

var people = new People("Jonathan", "Timberland");
console.log(people.greet());

