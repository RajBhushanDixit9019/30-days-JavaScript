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
        console.log(`Student name:${this.name}`);
        console.log(`Age:${this.age}`);
        console.log(`Course:${this.course}`);
        console.log(`Semester:${this.sem}`);
        console.log("-------------------------------");
    }
}
student.getStudentInfo();

// creating objetc using object constructor...
const person=new Object()

// adding properties..
person.name="Sameer"
person.age=21


person.getPersonInfo = function() {
    /**
     * Logs the name and age of a person object to the console.
     * 
     * @example
     * person.getPersonInfo();
     * // Output:
     * // ------Person Information------
     * // Name: Sameer
     * // Age: 21
     * // ------------------------------
     */
    
    console.log(`------Person Information------
    Name:${this.name}
    Age:${this.age}
    ------------------------------`);
}
person.getPersonInfo();

// using method in objects..

// creating a object 'college'
let college={
    name:"IIT Kanpur",
    location:"Kanpur",
    getCollegeInfo: function(){
        console.log("------College Information------");
        console.log(`College name:${this.name}`);
        console.log(`Location:${this.location}`);
        console.log("-------------------------------");
    }
}
college.getCollegeInfo();