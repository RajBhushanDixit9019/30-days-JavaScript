// this is day 6 of 30 days of JavaScript: Prototypical Inheritance.

// Prototypical in heritance in JavaScript...
// it is a way or method in which when we read a property of any object,
// it it is missing in the object. Then JavaScript automatically take it from object's prototype...

// in this methon a special name '__proto__' is used...

const user={
    online:"active",
     work(){
        console.log(`${this.name} is working`);
    }
}
const guest={
    name:'Guest'
}
const admin={
    name:'Admin'
}

// using '__proto__'..
guest.__proto__ =user
admin.__proto__=user

// checking the status..
if(guest.online==='active'){
    // display's guest is active..
    console.log(`${guest.name} is ${guest.online}`);
    guest.work()// display's Guest is working..
}
console.log("\n");
if(admin.online==='active'){
    // display's admin is active..
    console.log(`${admin.name} is ${admin.online}`);
    admin.work()// display's admin is working..
}

console.log("\n");
// Array is also an object..
let arr=[1,2,3,4]

arr.name="Numbered array";
console.log(arr.name);

console.log("\n");
// functions are also objects..
function hello(){
    console.log("Hello");
}

hello()

hello.type='function';
console.log(hello.type);