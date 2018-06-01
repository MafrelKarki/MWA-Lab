var util = require("util");

function Student(){
    this.name = "Mafrel";
    this.country = "Nepal";
}

Student.prototype.getCountry = function(){
    console.log(`${this.name} is from the country : ${this.country}`);
}

function ComproStudent(){
    Student.call(this);
    this.age = 25;
    this.name = "karki";
}

util.inherits(ComproStudent, Student);

var comproStudent = new ComproStudent();
console.log(comproStudent.getCountry());
console.log(`The age is ${comproStudent.age}`);
console.log(`The name is ${comproStudent.name}`);