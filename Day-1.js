// this JS script is day 1 of 30 days javascript: Variables and data types.

// Variables in JavaScript:

// In JavaScript the variable are of 3 type as of modern JavaScript

// var, let and cost.
// Each variable type have some difference

// var Variable...
var a=10;
// var variables are function scoped or global scoped.
function getvar(){ 
    a=0
    console.log(a)
}
// let Variable...
// let declaration of variable is introdused in ES6 in JacaSript. They are block-scoped.
function getlet(){
    let l=1
    console.log(l)
}
console.log(l)// RefferenceError:l is not defined.

// const Variables...
const c='raj'
function getconst(){
    c='Raj'//Uncaught ReferenceError: Cannot access 'c' before initialization
    console.log(c)
}


// Hoisting in JavaScript...
// hoisting is the way to move the all declarations on the top of their scops.

// one example code to uderstand it better.
hello()
function hello(){
    console.log("Hello")
}


getvalue()
var z;
function getvalue(){
    z=0
    console.log(z)
}

// Data Types in JavaScript..
// In JavaScript premitive data types are: string, numbers, boolean,null,bigint,symbols and undefined.
function getdatatype(){
    var n=10 // number
    var b='Raj' // string
    var x=true // boolean
    var y=null // null
    var d=undefined // undefined
    var s=Symbol("id") //symbol 
    var big=122398388388384899n // bigint

    // accessing data types
    console.log(typeof n)
    console.log(typeof b)
    console.log(typeof x)
    console.log(typeof y)
    console.log(typeof d)
    console.log(typeof s)
    console.log(typeof big)
}
getdatatype()