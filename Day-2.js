// this JS script is day 2 of 30 days javascript: objects in JS.

// Objects in JavaScript...
// object reffered as a real world entity in the programming.
// objects contain properties and methods as well...

// creation of objects using object literals..
const student={
    name:"Raj Bhushan Dixit",
    age:23,
    course:"BCA",
    sem:6,
    getStudentInfo:function(){
        console.log("------Student Information------");
        console.log(`Student name:${student.name}`);
        console.log(`Age:${student.age}`);
        console.log(`Course:${student.course}`);
        console.log(`Semester:${student.sem}`);
        console.log("-------------------------------");
    }
}
student.getStudentInfo();

// creating objetc using object constructor...
const person=new Object()

// adding properties..
person.name="Sameer"
person.age=21


person.getPersonInfo=function(){
    console.log("------Person Information------");
    console.log(`Name:${person.name}`);
    console.log(`Age:${person.age}`);
    console.log("------------------------------");
}
person.getPersonInfo();

// using method in objects..

// creating a object 'college'
let college={
    name:"IIT Kanpur",
    location:"Kanpur",
    getCollegeInfo: function(){
        console.log("------College Information------");
        console.log(`College name:${college.name}`);
        console.log(`Location:${college.location}`);
        console.log("-------------------------------");
    }
}
college.getCollegeInfo();