/// <reference path="_reference.ts" />

import Person = objects.Person;
import Student = objects.Student;

console.log("My game Started Here..."); 

//var myName: string = "Nafisabanu Mulla";
//var nameLenght: number = 0;

//myName.length = myName.length;

var person: Person = new Person("Nafisabanu Mulla");
person.speaks();

var student: Student = new Student("Javed Mulla", 123456);
student.studies();
student.speaks();


